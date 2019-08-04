class Person {
    // name : string;
    // private age: number;

    // constructor( name, age ) {
    //     this.name = name;
    //     this.age = age;
    // }
    constructor( public name : string, private age : number ) {

    }

    celebrateBirthday() {
        this.age++;
    }
}

const john = new Person( 'John', 32 );
console.log( john.name );
console.log( john.age );
