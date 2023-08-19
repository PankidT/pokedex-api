"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function PokemonTag({ PokemonName }: { PokemonName: string }) {
  const router = useRouter();

  return (
    <div
      className="btn btn-outline w-32 text-center"
      onClick={() => router.push(`./${PokemonName}`)}
    >
      {PokemonName}
    </div>
  );
}
