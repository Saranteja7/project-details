interface Person {
    name: string,
    age: number,
    city?: string,
    celebrateBirthday: ( x: number ) => number
}

const john : Person = {
    name: 'John',
    age: 32,
    celebrateBirthday( years : number ) {
        this.age += years;
        return this.age;
    }
};

john.city = 'Bangalore';

export {}