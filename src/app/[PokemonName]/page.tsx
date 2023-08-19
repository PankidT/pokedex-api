import { GetPokemon } from "@/api/route";
import Image from "next/image";

export default async function PokemonName({
  params,
}: {
  params: { PokemonName: string };
}) {
  // object destructuring
  const { PokemonName } = params;
  const pokemonObejct = await GetPokemon(PokemonName);
  //   console.log(pokemonObejct);

  return (
    <div className="bg-gray-700 shadow-md rounded-xl w-[480px] py-4 m-auto mt-5">
      <h1 className="text-4xl pt-4 text-primary font-bold text-center">
        {PokemonName.toUpperCase()}
      </h1>
      <Image
        src={pokemonObejct.sprites.other["official-artwork"].front_default}
        alt={PokemonName}
        width={300}
        height={300}
        className="mx-auto"
      />
      <div className="flex flex-col items-center my-4">
        {pokemonObejct.stats.map(
          (stat: { stat: { name: string }; base_stat: number }) => (
            <div key={stat.stat.name} className="m-1 w-[80%]">
              <div className="flex flex-row">
                <h1 className="text-xl text-left ml-4">
                  {stat.stat.name.charAt(0).toUpperCase() +
                    stat.stat.name.slice(1)}
                </h1>
                <h1 className="text-xl text-left ml-4">{stat.base_stat}</h1>
              </div>
              <progress
                className="progress progress-primary w-full h-4"
                value={stat.base_stat}
                max="100"
              ></progress>
            </div>
          )
        )}
      </div>
    </div>
  );
}
