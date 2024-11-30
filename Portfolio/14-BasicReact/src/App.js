
import React, { useState } from 'react';
import data from './public/_data.js';

function App() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [comments, setComments] = useState({});

    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
    };

    const handleAddComment = (movieId, name, comment) => {
        setComments((prev) => ({
            ...prev,
            [movieId]: [...(prev[movieId] || []), { name, comment }],
        }));
    };

    return (
        <div className="App">
            <h1>Movie Gallery</h1>
            <div className="card-grid">
                {data.movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="movie-card"
                        onMouseEnter={() => console.log('Hover effect!')}
                    >
                        <img src={movie.poster} alt={movie.name} />
                        <h2>{movie.name}</h2>
                        <p>{movie.year}</p>
                        <button onClick={() => handleSelectMovie(movie)}>More...</button>
                    </div>
                ))}
            </div>
            {selectedMovie && (
                <div className="movie-details">
                    <h2>{selectedMovie.name}</h2>
                    <img src={selectedMovie.character.image} alt={selectedMovie.character.name} />
                    <p>{selectedMovie.character.bio}</p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const name = e.target.elements.name.value;
                            const comment = e.target.elements.comment.value;
                            handleAddComment(selectedMovie.id, name, comment);
                        }}
                    >
                        <input type="text" name="name" placeholder="Your name" required />
                        <textarea name="comment" placeholder="Your comment" required />
                        <button type="submit">Add Comment</button>
                    </form>
                    <div className="comments-section">
                        <h3>Comments</h3>
                        {(comments[selectedMovie.id] || []).map((c, index) => (
                            <div key={index}>
                                <strong>{c.name}</strong>: {c.comment}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
