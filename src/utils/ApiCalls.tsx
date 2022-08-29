const url = 'https://pokeapi.co/api/v2/'

async function getPokemon (pokemonName = '') {
  const response = await fetch(`${url}pokemon/${pokemonName}`)
  const data = await response.json()
  return data
}

async function getAllPokemon () {
  const response = await fetch(
    `${url}pokemon/?limit=1500&offset=0`
  )
  const data = await response.json()
  return data.results
}

export { getPokemon, getAllPokemon }
