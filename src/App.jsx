import { Button } from './components/Button';
import { Card } from './components/Card';
import { CallApi } from './Hooks/callApi';
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import './saas/App.scss'
import { useState, useEffect } from 'react'

const App = () => {
  const [pokemonId, setPokemonId] = useState(1)

  const { pokemonEvolutions } = CallApi(pokemonId)

  const prevClick = () => {
    setPokemonId(pokemonId !== 1 ? pokemonId - 1 : 1)
  }

  const nextClick = () => {
    setPokemonId(pokemonId + 1)
  }

  return (
    <>    <div className="container">

      <div className={`card_container card${pokemonEvolutions.length}`}>
        {
          pokemonEvolutions.map(pokemon=>(
            <Card key={pokemon[0]} name={pokemon[0]} img={pokemon[1]} />
          ))
        }
       
      </div>
      <div className="button_container">
        <Button
          icon={<TiArrowLeftOutline />}
          handleClick={prevClick}
        />
        <Button
          icon={<TiArrowRightOutline />}
          handleClick={nextClick}
        />
      </div>
    </div>
    </>

  );
}

export { App };