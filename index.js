const express = require('express'),
morgan = require('morgan');
const app = express();

app.use(morgan('common'));

let myMovies = [
    {
        title: 'Chocolat',
        director: 'Lasse Hallstrom'
    },
    {
        title: 'Moonlight',
        director: 'Barry Jenkins'
    },
    {
        title: 'Love and Basketball',
        director: 'Gina Prince-Bythewood'
    },
    {
        title: 'Get Out',
        director: 'Jordan Peele'
    },
    {
        title: 'Rafiki',
        director: 'Wanuri Kahiu'
    },
    {
        title: 'Parasite',
        director: 'Bong Joon Ho'
    },
    {
        title: 'Black Panther',
        director: 'Ryan Coogler'
    },
    {
        title: 'The Lion King',
        director: 'Roger Allers and Rob Minkoff'
    },
    {
        title: 'The Princess Diaries',
        director: 'Gary Marshall'
    },
    {
        title: 'Frozen',
        director: 'Chris Buck and Jennifer Lee'
    }
];

app.get('/movies', (req, res) => {
    res.json(myMovies);
});

app.get('/', (req, res) => {
    res.send('Welcome to myFlix!');
});



app.listen(8080, () => {
    console.log('Your app is listening on port 8080');
});