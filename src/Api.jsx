const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=8";

function getImageUrl(index) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
}

export async function fetchCards() {
  const res = await fetch(API_URL);
  const data = await res.json();

  console.log(data);

  // возвращаем массив обьеков {id, name, image }
  return data.results.map((pokemon, index) => ({
    id: index,
    name: pokemon.name,
    image: getImageUrl(index),
  }));
}
