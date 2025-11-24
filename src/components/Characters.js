import React from 'react'

export default function Characters(props) {
    const {characters, setCharacters} = props;

    const resetCharacters = () => {
        setCharacters(null);
    }

  return (
    <div className="characters">
        <button className="btn" onClick={resetCharacters}>
            <span className="material-icons">arrow_back</span>
            <span className="back">Volver</span>
        </button>
        <div className="characters-container">
            {characters.map((character, index) => (
                <div className="character-details" key={index}>
                    <h3>{character.name}</h3>
                    <img src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`} alt={character.name} />
                    <p><span className="span-p">Occupation: </span>{character.occupation}</p>
                    <p><span className='span-p'>Age: </span>{character.age}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
