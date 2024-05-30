import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import LyricsDisplay from "./components/LyricsDisplay";

function App() {

  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState('');

  const fetchLyrics = async (artist, title) => {
    try {
      const response = await fetch(`https://api.musixmatch.com/ws/1.1/`);
      const data = await response.json();
      if (data.lyrics) {
        setLyrics(data.lyrics);
        setError('');
      }else{
        setLyrics('');
        setLyrics('Lyrics not found.');
      }
    } catch (err){
      setLyrics('');
      setError('An error occurred. Please try again.');
    }
  };

  return (

    <div className="App">
      <h1>Lyrics Search</h1>
      <SearchForm onSearch={fetchLyrics}/>
      <LyricsDisplay lyrics={lyrics} error={error}/>

    </div>
  );
}

export default App;
