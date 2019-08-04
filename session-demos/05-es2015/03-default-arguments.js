/**
 * Function greet accepts message and name and print a greeting to the console
 */
function greet( message = 'Hello', name = 'World' ) {
    console.log( `${message} ${name}!` );
}

greet( 'Good morning', 'John' );
greet( 'Good morning' );
greet();
greet( undefined, 'Mary' ); // default assigned for message argument