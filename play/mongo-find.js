const MongoClient = require('mongodb').MongoClient;

var user = { name: 'sam', age: 23 }
var { name } = user
console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect');
    }
    console.log('connected to mongodb');
    const db = client.db('TodoApp')

    db.collection('Todos').find({}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    },  (err) => {
        return conslole.log("error", err)
    });
    console.log("Succesfully fetched")
    client.close();

});
