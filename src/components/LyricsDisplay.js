import React from "react";

function LyricsDisplay ({ lyrics, error }) {
    return(
        <div>
            {error && <p style={{ color: 'red'}}>{error}</p>}
            {lyrics && <pre>{lyrics}</pre>}
        </div>
    );
}

export default LyricsDisplay;