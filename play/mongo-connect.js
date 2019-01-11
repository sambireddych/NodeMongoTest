const MongoClient = require('mongodb').MongoClient;

var user = { name:'sam', age : 23 }
var { name } = user
console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect');
    }
    console.log('connected to mongodb');
    const db = client.db('TodoApp')
    db.collection('Todos').insertOne({
        text: 'created None',
        completed: false
    }, (err, result) => {
        if (err) {
        return console.log('Unable to create record', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops)
    })

    client.close();

});
