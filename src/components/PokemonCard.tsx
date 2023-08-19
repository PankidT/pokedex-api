import React from "react";
import Image from "next/image";
import Stats from "@/components/Stats";

type TPokemonCard = {
  PokemonName: string;
  PokemonImage: string;
};

export default function PokemonCard({
  PokemonName,
  PokemonImage,
}: TPokemonCard) {
  return (
    <div className="bg-gray-700 shadow-md rounded-xl h-[680px] w-[480px]">
      <h1 className="font-bold text-4xl pt-4">{PokemonName}</h1>
      <Image
        src={PokemonImage as string}
        alt={"test"}
        width={300}
        height={300}
        className="mx-auto"
      />
      <div className="flex flex-row items-center my-4">
        <h1 className="text-2xl text-left ml-4">HP</h1>
        <progress
          className="progress progress-primary w-[75%] h-4 mx-auto"
          value="10"
          max="100"
        ></progress>
      </div>
      <div className="flex flex-row items-center my-4">
        <h1 className="text-2xl text-left ml-4">HP</h1>
        <progress
          className="progress progress-primary w-[75%] h-4 mx-auto"
          value="10"
          max="100"
        ></progress>
      </div>
      <div className="flex flex-row items-center my-4">
        <h1 className="text-2xl text-left ml-4">HP</h1>
        <progress
          className="progress progress-primary w-[75%] h-4 mx-auto"
          value="10"
          max="100"
        ></progress>
      </div>
      <div className="flex flex-row items-center my-4">
        <h1 className="text-2xl text-left ml-4">HP</h1>
        <progress
          className="progress progress-primary w-[75%] h-4 mx-auto"
          value="10"
          max="100"
        ></progress>
        {/* <Stats PokemonName={PokemonName} /> */}
      </div>
    </div>
  );
}
