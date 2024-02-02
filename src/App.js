import { useState } from 'react';
import './App.css';
import simpsonsImage from './img/simpsons.png';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const getCharacters = async () => {
    try {
      const apiCharacters = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=50');
      const jsonCharacters = await apiCharacters.json();

      let charactersMap = jsonCharacters.map(item => {
        return [item.character, item]
      });
      let charactersMapArr = new Map(charactersMap); //Pares de clave y valor

      let uniqueCharacters = [...charactersMapArr.values()]; //Conversión a un array

      setCharacters(uniqueCharacters);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Los simpsons</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={simpsonsImage} alt="Los simpsons" className="img-home" />
            <button className="btn" onClick={getCharacters}>
              Buscar personajes
            </button>
          </>
        )}        
      </header>
    </div>
  );
}

export default App;
