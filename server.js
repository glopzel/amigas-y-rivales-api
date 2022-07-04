const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
const PORT = 8000;

dotenv.config();

let connectionStr = process.env.DB_STRING;
let db, infoCollection, dbName = 'amigas-y-rivales';

// app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname +'/public'))

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

MongoClient.connect(connectionStr, {useUnifiedTopology: true})
    .then(client => {
        console.log(`connected to ${dbName}`)

        db = client.db(dbName);
        infoCollection = db.collection('palabreos')
    })
.catch(error => console.error(error));

const getTitleCase = name => {
    return name.toLowerCase().split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
}

app.get('/api/:name', (request, response) => {
    const nameThem = request.params.name;
    const titleCaseName = getTitleCase(nameThem);

    infoCollection.find({"name": titleCaseName}).toArray()
        .then(results => response.json(results))
    .catch(error => console.error(error))
});

app.get('/api/frases/:id', (request, response) => {
    const identifier = request.params.id;

    infoCollection.find({"num": identifier}).toArray()
        .then(results => response.json(results))
    .catch(error => console.error(error))
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT} go get it`)
})