
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/movies', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Schemas
const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    likes: Number,
    dislikes: Number,
    comments: [String]
});

const Movie = mongoose.model('Movie', movieSchema);

// Routes
app.get('/movies', async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});

app.post('/movies', async (req, res) => {
    const { title, description } = req.body;
    const movie = new Movie({ title, description, likes: 0, dislikes: 0, comments: [] });
    await movie.save();
    res.status(201).json(movie);
});

app.post('/movies/:id/comment', async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    const movie = await Movie.findById(id);
    if (movie) {
        movie.comments.push(comment);
        await movie.save();
        res.status(200).json(movie);
    } else {
        res.status(404).json({ error: 'Movie not found' });
    }
});

app.post('/movies/:id/like', async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (movie) {
        movie.likes += 1;
        await movie.save();
        res.status(200).json(movie);
    } else {
        res.status(404).json({ error: 'Movie not found' });
    }
});

app.post('/movies/:id/dislike', async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (movie) {
        movie.dislikes += 1;
        await movie.save();
        res.status(200).json(movie);
    } else {
        res.status(404).json({ error: 'Movie not found' });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
