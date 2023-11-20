import React, { useState, useEffect } from "react";
import axios from "axios";
import './Search.css'

const Pokeman = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);

  const apiUrl = "https://pokeapi.co/api/v2/pokemon";

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}?limit=10&offset=${offset}`);
      setPokemonList((prevList) => [...prevList, ...response.data.results]);
      setOffset((prevOffset) => prevOffset + 10);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Initial load

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/${searchTerm.toLowerCase()}`);
      setPokemonList([response.data]);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleBookmark = (pokemon) => {


    const existingData =JSON.parse(localStorage.getItem('bookmarkedPokemon'))
    console.log(existingData)
    localStorage.setItem('bookmarkedPokemon', JSON.stringify(pokemon));
  };

  return (
    <div className="container"> 
      <div className="search-container">
        <input
          className="input"
          type="text"
          placeholder="enter Pokémon name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="search-btn">Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {pokemonList.map((pokemon, i) => (
        <div key={i} className="list-container">
          <p>{pokemon.name}</p>
          <button
            onClick={() => handleBookmark(pokemon)}
            className="bookmark-btn"
          >
            Bookmark
          </button>
        </div>
      ))}
      <button onClick={fetchPokemon} className="load-more-btn">Load More</button>
    </div>
  );
};

export default Pokeman;
