import React, { useState, useEffect } from 'react';

function Bookmark() {
  const [bookmarkedPokemon, setBookmarkedPokemon] = useState([]);

  useEffect(() => {
  
    const storedPokemon = localStorage.getItem('bookmarkedPokemon');
    if (storedPokemon) {
     
      const parsedPokemon = JSON.parse(storedPokemon);
      setBookmarkedPokemon(Array.isArray(parsedPokemon) ? parsedPokemon : [parsedPokemon]);
    }
  }, []); 
  console.log(bookmarkedPokemon)

  return (
    <div>
      Bookmark
      {bookmarkedPokemon.map((pokemon, i) => (
        <div key={i} className="list-container">
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Bookmark;
