
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [comment, setComment] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/movies/${id}`)
            .then((res) => res.json())
            .then((data) => setMovie(data))
            .catch((err) => console.error(err));
    }, [id]);

    const handleAddComment = () => {
        fetch(`http://localhost:5000/movies/${id}/comment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ comment }),
        })
            .then((res) => res.json())
            .then((data) => setMovie(data))
            .catch((err) => console.error(err));
    };

    return (
        <div className="container mt-4">
            {movie ? (
                <>
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                    <h3>Comments</h3>
                    <ul>
                        {movie.comments.map((c, index) => (
                            <li key={index}>{c}</li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button onClick={handleAddComment}>Add Comment</Button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default MovieDetails;
