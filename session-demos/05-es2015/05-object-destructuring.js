const john = {
    name: 'Jonathan',
    age: 32,
    address: {
        firstLine: '#32, Gachibowli',
        city: 'Hyderabad'
    },
    emailids: [
        'john@gmail.com',
        'john@yahoo.com'
    ]
};

// const name = john.name, age = john.age;
const { name, age = 18, city = 'Hyderabad', address : { firstLine, city : residence } } = john;
console.log( name, age, city, firstLine, residence );