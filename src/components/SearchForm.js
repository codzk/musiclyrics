import React, { useState } from "react";

function SearchForm({ onSearch }) {
    const [artist, setArtist] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(artist, title);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Artist:</label>
                <input 
                    type="text"
                    value={artist}
                    onChange={ (e) => setArtist(e.target.value)}
                    />
            </div>
            <button type="submit">Search</button>   
        </form>
    );
}

export default SearchForm;