


// third

const bcrypt = require('bcryptjs');
const password = '1232134';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     })
// });

const hashedPass = '$2a$10$Lh1aWGda6QTqemvavahI7OnLK0FM/.bHYlmE0HDeC.aceNvvt9vvy';

bcrypt.compare(password, hashedPass, (err, res) => {
    console.log(res);
});

// second

// const jwt = require('jsonwebtoken');

// const data = {
//     id: 10
// };
//
// const token = jwt.sign(data, '123abcSOLD');
// console.log(token);
//
// const decoded = jwt.verify(token, '123abcSOLD');
// console.log('decoded', decoded);


// First
// const {SHA256} = require('crypto-js');

// const message = 'I am user name';
// const hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Message: ${hash}`);
//
// const data = {
//     id: 4
// };
//
// // data what we send back to the server
// const token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// // lets try to hack our data
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust');
// }

