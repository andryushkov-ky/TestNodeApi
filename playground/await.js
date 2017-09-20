const users = [{
    id: 1,
    name: "Rob",
    school: 101
}, {
    id: 2,
    name: 'Jess',
    school: 10
}];

const grades = [{
    id: 1,
    school: 101,
    grade: 123
}, {
    id: 2,
    school: 10,
    grade: 230
}, {
    id: 3,
    school: 10,
    grade: 300
}];

// const getUser = (id, callback) => {
//     const user = users.find((user) => user.id === id);
//     callback(user)
// };
//
// getUser(2, (res) => {
//     if (res) {
//         console.log(res);
//     } else {
//         console.log('Didn\'t find');
//     }
// });

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);

        if (user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id of ${id}`);
        }
    });
};

const getGrades = (school) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.school === school))
    })
};

// Rob has a 123% in the class
const getStatus = (userId) => {
    let user;
    return getUser(userId)
        .then((tempUser) => {
            user = tempUser;
            return getGrades(user.school)
        })
        .then((grades) => {
            let average = 0;

            if (grades.length > 0) {
                average = grades.map((grade) => grade.grade).reduce((a, b) =>  a + b) / grades.length;
            }

            return `${user.name} has a ${average}% in the class`
        });
};

/*
    async await

    () => {
        return new Promise((resolve, reject) => {
            reject('This is an error') // - throw new Error('This is an error');
        })
    }

 */

//always return Promise
 const getStatusAlt = async (userId) => {
    const user = await getUser(userId);
    const grades = await getGrades(user.school);
    let average = 0;

    if (grades.length > 0) {
        average = grades.map((grade) => grade.grade).reduce((a, b) =>  a + b) / grades.length;
    }

    return `${user.name} has a ${average}% in the class`
};

getStatusAlt(2)
    .then((name) => {
        console.log(name);
    })
    .catch((e) => {
        console.log(e);
    });

// getStatus(2).then((status) => {
//     console.log(status);
// }).catch((e) => {
//     console.log(e);
// });