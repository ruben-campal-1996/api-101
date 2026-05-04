async function pokemonQuantity() {
    
    const limit = 10
    const offset = 20
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);  
    const data = await response.json();  

    console.log("Lista de Pokémon:");  
    data.results.forEach(pokemon => {  
    console.log("-", pokemon.name);
    console.log("-", pokemon.url)
    
  });  
}

pokemonQuantity()