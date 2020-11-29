const users = [['John', 49], ['Frank', 25], ['David', 36]];
const usersAge = Object.fromEntries(users);
console.log(usersAge);

// outputs: {John: 49, Frank: 25, David: 36}