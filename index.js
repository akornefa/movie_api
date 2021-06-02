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

//return list of all movies to user
app.get('/movies', (req, res) => {
    res.json(myMovies);
});

//return data about a single movie
app.get('/movies/:title', (req, res) => {
    res.send('JSON data about a single movie');
});

//data about a genre 
app.get('/movies/:genre', (req, res) => {
    res.send('List of movies under specified genre');
});

//data about a director
app.get('/movies/:director-name', (req, res) => {
    res.send('JSON data holding information about a director.');
});

//new users register
app.post('/users/register', (req, res) => {
    res.send('return whether registration was successful');
});

//user updates info
app.put('/users/:username', (req, res) => {
    res.send('return whether update was successful');
});

//user adds movie to favorites
app.put('/users/:title', (req, res) => {
    res.send('return whether addition was successful');
});

//user removes movie from favorites
app.delete('/users/:title', (req, res) => {
    res.send('return whether removal of movie was successful');
});

//user to be deregistered
app.delete('/users/:email', (req, res) => {
    res.send('return whether deregistration of user\'s email address was successful');
});

app.get('/', (req, res) => {
    res.send('Welcome to myFlix!');
});

app.use(express.static('public'));

app.get('/documentation.html', (req, res) => {
    res.sendFile('/public/documentation.html', { root: __dirname });
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error!');
  });

app.listen(8080, () => {
    console.log('Your app is listening on port 8080');
});