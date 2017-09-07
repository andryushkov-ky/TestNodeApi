// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('59af6dea51cc44e6b5b21fe2')
    }, {
        $set: {
            completed: false
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    })
    // db.close();
});