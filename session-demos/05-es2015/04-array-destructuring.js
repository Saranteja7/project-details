const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

// const first = days[0], second = days[1], third = days[2];
const [ first, second, third, , fifth = 'Holiday', sixth = 'Holiday' ] = days;
console.log( first, second, third, fifth, sixth );
