const pokemonId = document.querySelector("#pokemonId");
let URL = "https://pokeapi.co/api/v2/pokemon/";


function buscarPokemon(pokemon) {
    const div = document.createElement("div");
    div.classMain.add("pokemon");
    div.innerHTML = `
        <div id="todos">
            <div class="pokemon-todos">
                <div class="pokemon">
                    <p class="pokemon-id-back">#${pokemonId}</p>
                </div>
                <div class="pokemon-imagem">
                    <img scr="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
                </div>
                <div class="pokemon-info">
                    <div class="conteudo">
                        <p class="pokemon-id">#${pokemonId}</p>
                        <h2 class="pokemon-name">#${pokemon.name}<h2>
                    </div>
                    <div class="pokemon-tipos">
                        ${types.join(', ')}
                    </div>
                    <div class="pokemon-stats">
                        <p class="stat">${pokemon.height}m</p>
                        <p class="stat">${pokemon.weight}kg</p>
                    </div>
                </div>
                <div class="container-stats">
                    <h1>Estatisticas</h1>
                </div>
                <div class="stats">
                    <span>${pokemon.hp}<span>
                    <div class="bar"></div>
                <div>
                <div class="stats">
                    <span>${pokemon.attack}<span>
                    <div class="bar"></div>
                <div>
                <div class="stats">
                    <span>${pokemon.defense}<span>
                    <div class="bar"></div>
                <div>
                <div class="stats">
                    <span>${pokemon.specialAttack}<span>
                    <div class="bar"></div>
                <div>
                <div class="stats">
                    <span>${pokemon.specialDefense}<span>
                    <div class="bar"></div>
                <div>
                <div class="stats">
                    <span>${pokemon.speed}<span>
                    <div class="bar"></div>
                <div>
            </div>
        </div>     
    `
    console.log(pokemon);
}