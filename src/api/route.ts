const POKEMON_API_URL = "https://pokeapi.co/api/v2/";

export async function GetPokemonList() {
  const res = await fetch(POKEMON_API_URL + "pokemon?limit=151&offset=0");
  const data = await res.json();
  return data.results;
}

export async function GetPokemon(name: string) {
  const res = await fetch(POKEMON_API_URL + "pokemon/" + name);
  const data = await res.json();
  return data;
}
