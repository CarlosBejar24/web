
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then((res) => res.json())
            .then((data) => setMovies(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container mt-4">
            <h1>Movies</h1>
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-md-4 mb-4" key={movie._id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Link to={`/movies/${movie._id}`}>
                                    <Button variant="primary">View Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;
