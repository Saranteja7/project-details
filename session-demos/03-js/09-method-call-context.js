'use strict';

const john = {
    name: 'John',
    age: 32,
    celebrateBirthday: function() {
        console.log( this );
        this.age++;
    }
};

// john.celebrateBirthday();
const xyz = john.celebrateBirthday;
xyz();
console.log( john );