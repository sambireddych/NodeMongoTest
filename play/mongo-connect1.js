const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    db.collection('Todos').insertOne({
        text: 'created second',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to create record', err);
        }
        console.log('inserted');
    })

    client.close();
});