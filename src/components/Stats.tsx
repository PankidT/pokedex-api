import React from "react";
import { GetPokemon } from "@/api/route";

export default async function Stats(PokemonName: string) {
  const pokemonObejct = await GetPokemon(PokemonName);

  return (
    <div>
      {pokemonObejct.stats.map(
        (stat: { stat: { name: string }; base_stat: number }) => (
          <div key={stat.stat.name} className="mb-4 border border-red-400">
            <div className="flex flex-row">
              <h1 className="text-2xl text-left ml-4">{stat.stat.name}</h1>
              <h1 className="text-2xl text-left ml-4">{stat.base_stat}</h1>
            </div>
            <progress
              className="progress progress-primary w-[60%] h-4"
              value={stat.base_stat}
              max="100"
            ></progress>
          </div>
        )
      )}
    </div>
  );
}
