const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const id = '69af7a01b61bac077829f3e6';

if (!ObjectID.isValid(id)) {
    return console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todos) => {
    console.log('Todo', todos);
});

Todo.findById(id)
    .then((todo) => {
        if (!todo) {
            return console.log('Id not found')
        }
        console.log('Todo By Id', todo);
    })
    .catch((e) => {
        console.log(e);
    });