function foo( a, b ) {
    console.log( this );
    console.log( a );
    console.log( b );
}

foo.call( { x: 100 }, 100, 200 );
foo.call( null, 100, 200 );

const boundFoo = foo.bind( { x: 100 } );
boundFoo( 1, 2 );
boundFoo( 3, 4 );
boundFoo( 5, 6 );
boundFoo( 7, 8 );

const boundFooWithA1 = foo.bind( { x: 100 }, 1 );
boundFooWithA1( 100 );
boundFooWithA1( 200 );