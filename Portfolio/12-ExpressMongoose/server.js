
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// MongoDB Schema
const driverSchema = new mongoose.Schema({
    number: Number,
    code: String,
    forename: String,
    surname: String,
    current_team: String
});

const Driver = mongoose.model('Driver', driverSchema);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/f1_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Middleware to load drivers
app.use(async (req, res, next) => {
    try {
        res.locals.drivers = await Driver.find();
        res.locals.teams = [...new Set(res.locals.drivers.map(d => d.current_team))];
        next();
    } catch (err) {
        console.error('Error loading drivers:', err);
        next(err);
    }
});

// Routes
app.get('/', (req, res) => {
    res.render('index', { drivers: res.locals.drivers, teams: res.locals.teams });
});

app.post('/add', async (req, res) => {
    const { number, code, forename, surname, current_team } = req.body;
    try {
        await Driver.create({ number, code, forename, surname, current_team });
        res.redirect('/');
    } catch (err) {
        console.error('Error adding driver:', err);
        res.redirect('/');
    }
});

app.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { number, code, forename, surname, current_team } = req.body;
    try {
        await Driver.findByIdAndUpdate(id, { number, code, forename, surname, current_team });
        res.redirect('/');
    } catch (err) {
        console.error('Error editing driver:', err);
        res.redirect('/');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
