const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Wow! this is my second node server!!');
});

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '0178888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '0178888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '0178888888' },
    { id: 3, name: 'Shuchorita', email: 'Shuchorita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '0178888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '0178888888' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use search query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    res.send(users)
});

// APP.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hello', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send('Fruits khawa valo');
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})