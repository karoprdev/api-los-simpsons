import { useState } from 'react';
import './App.css';
import simpsonsImage from './img/simpsons.png';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

   const getCharacters = async () => {
  try {
    const apiCharacters = await fetch('https://thesimpsonsapi.com/api/characters');
    const json = await apiCharacters.json();

    // La API ahora retorna { count, next, prev, pages, results: [] }
    const firstPageCharacters = json.results; // ← AQUI ESTÁN LOS PERSONAJES

    console.log(firstPageCharacters);

    // Guardar en el estado
    setCharacters(firstPageCharacters);

  } catch (error) {
    console.log(error);
  }
};


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
