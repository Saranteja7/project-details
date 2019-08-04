// export const sum = ( x, y ) => x + y;
// export const diff = ( x, y ) => x - y;

const sum = ( x, y ) => x + y;
const diff = ( x, y ) => x - y;

export default class {
    constructor( real, imaginary ) {
        this.real = real;
        this.imaginary = imaginary;
    }
}

export {
    sum,
    diff,
    // ComplexNumber as default
};