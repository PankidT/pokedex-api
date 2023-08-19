import type { NextPage } from "next";
import { GetPokemonList } from "@/api/route";
import PokemonCard from "@/components/PokemonTag";
import React from "react";
import Image from "next/image";

export default async function Home() {
  const PokemonList = await GetPokemonList();
  return (
    <div className="flex flex-col items-center h-full p-10">
      <div className="flex flex-row items-center">
        <h1 className="text-4xl m-5">POKEDEX</h1>
        <Image
          src="/pokeball.png"
          alt="pokeball"
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>
      <div className="flex flex-row mt-5 mb-10 gap-4">
        <input
          type="text"
          placeholder="Search Pokemon name"
          className="input input-bordered input-primary w-full max-w-xs "
        />
        <button className="btn btn-primary">Search</button>
      </div>
      <div className="flex h-full flex-row gap-4 flex-wrap justify-around">
        {PokemonList.map((Pokemon: { name: string }) => (
          <PokemonCard PokemonName={Pokemon.name} />
        ))}
      </div>
    </div>
  );
}
