class Person {
    constructor( name, age ) {
        console.log( this ); // newly created object
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }

    greet( message ) {
        return `${message} ${this.name}!`;
    }
}

const john = new Person( 'John', 32 );
john.celebrateBirthday();
console.log( john ); // age should be 33
console.log( john.greet() );

// objects can also have class method syntax
// const mary = {
//     age: 28,
//     getAge() {

//     }
// }

class Employee extends Person {
    constructor( name, age, role, dept ) {
        super( name, age );

        this.role = role;
        this.dept = dept;
    }

    // Write promote that adds 'Senior ' to the current role
    promote() {
        this.role = `Senior ${this.role}`;
    }
    
    // Write celebrateBirthday that overrides the Person class celebrateBirthday and do something within the method
    celebrateBirthday() {
        super.celebrateBirthday(); // Person class celebrateBirthday is called
        console.log( 'Happy birthday' );
    }
}

const mary = new Employee( 'Mary', 28, 'Web developer', 'IT' );
mary.celebrateBirthday();
console.log( mary );