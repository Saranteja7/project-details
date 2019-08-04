function foo() {
    console.log( 'foo this = ', this ); // "hello"

    /**
     * Declare 2 inner functions - one with normal syntax and one with arrow function syntax, and call both. Print the context within each function.
     */
    function f1() {
        console.log( 'f1 this = ', this ); // window
    }
    f1();

    const f2 = () => {
        console.log( 'f2 this = ', this ); // "hello"
    };
    f2();
}

foo.call( 'hello' );

const employees = {
    names: [ 'John', 'Rita', 'Mary' ],
    increments: [ 10, 20, 15 ],
    salaries: [ 50000, 25000, 60000 ],
    calculateNewSalaries: function() {
        // var that = this;

        return this.salaries.map(
            ( i, index ) => {
                return i + ( i * this.increments[index] / 100 );
            }
        );
    }
};

console.log( employees.calculateNewSalaries() );