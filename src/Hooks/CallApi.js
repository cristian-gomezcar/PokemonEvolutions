import React, { useEffect, useState } from 'react'

function CallApi(pokemonId) {
    const [pokemonEvolutions, setPokemonEvolutions] = useState([])

    const getFetch = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}/`)
            const data = await response.json()

            let pokemonEvolutions = []
            let pokemonLvl1 = data.chain.species.name
            let pokemonLvl1Img = await getPokemonNames(pokemonLvl1)
            pokemonEvolutions.push([pokemonLvl1, pokemonLvl1Img])

            if (data.chain.evolves_to.length !== 0) {
                let pokemonLvl2 = data.chain.evolves_to[0].species.name;
                let pokemonLvl2Img = await getPokemonNames(pokemonLvl2)
                pokemonEvolutions.push([pokemonLvl2, pokemonLvl2Img])

                if (data.chain.evolves_to[0].evolves_to.length !== 0) {
                    let pokemonLvl3 = data.chain.evolves_to[0].evolves_to[0].species.name;
                    let pokemonLvl3Img = await getPokemonNames(pokemonLvl3)
                    pokemonEvolutions.push([pokemonLvl3, pokemonLvl3Img])
                }
            }
            setPokemonEvolutions(pokemonEvolutions)

        } catch (error) {
            console.log("asasas");
        }

    }
    const getPokemonNames = async (name) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            const data = await response.json()
            return data.sprites.other['official-artwork'].front_default
        } catch (error) {
            console.log("asasas");
        }
    }


    useEffect(() => {
        getFetch();
    }, [pokemonId])

    return {
        pokemonEvolutions
    }
}

export { CallApi }