import React, { useState, useEffect } from 'react';

function Bookmark() {
  const [bookmarkedPokemon, setBookmarkedPokemon] = useState([]);

  useEffect(() => {
    // Retrieve bookmarked Pokémon data from local storage on component mount
    const storedPokemon = localStorage.getItem('bookmarkedPokemon');
    if (storedPokemon) {
      // Parse the stored data and ensure it's an array
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
