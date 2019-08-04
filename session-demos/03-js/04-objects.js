var john = {
    name: 'Jonathan',
    age: 32,
    celebrateBirthday: function() { // celebrateBirthday is a method of the object john
        console.log( 'happy birthday' );
    },
    /*
    printName: function() {
        console.log( this ); // function call context of an method is the object to which it belongs (usually)
        console.log( this.name );
    }
    */
};
console.log( john );

john.city = 'Hyderabad'; // we can add a new property anytime
console.log( john );

john.printName = function() { // assign method outside of object declaration
    console.log( this ); // function call context of an method is the object to which it belongs (usually)
    console.log( this.name );

    // return undefined; // default return value in JavaScript
};

delete john.age; // we can remove an existing property anytime
console.log( john );

console.log( john.name );
john.name = 'Jonathan Doe';

console.log( john );
john.celebrateBirthday(); // calling a method

console.log( john.printName() );