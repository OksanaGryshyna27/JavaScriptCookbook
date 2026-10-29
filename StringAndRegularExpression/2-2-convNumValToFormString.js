const someNumber = 42;
const someString = someNumber + '';

const someNumber = 42; --- IGNORE ---
const someString = someNumber.toString(); --- IGNORE ---

Number.toFixed();
Number.toExponential();
Number.toPrecision();


const someNumber = 1242.0055;
//Ask for exactly 2 decimal points. Numbers will be rounded if nesessary. 
const fixedString = someNumber.toFixed(2); // "1242.01"

//Ask for 5 significant digits. Scentific notation is used if nessecsry.
const precisionString = someNumber.toPrecision(5); // "1242.0"

//Ask for scentific notation with 2 decimal places.
const scentificString = someNumber.toExponential(2); // "1.24e+3"


const formatter = new Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD'});

const someNumber = 1242.0055;
const formattedString = formatter.format(someNumber); // "$1,242.01"

const formatter = new Intl.NumberFormat();
const formatter = new Intl.NumberFormat('en-US');