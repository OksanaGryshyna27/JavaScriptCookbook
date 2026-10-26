//The function addsa alist of conseccutive numbers
//"use strict";
function addRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
//Add numbers from 10 to 15
let startNumber = 10;
let endNumber = 15;
console.log(addRange(startNumber, endNumber)); //Display 75

//Now add numbers from 1 to 5
startnumber = 1;
endNumber = 5;
console.log(addRange(startNumber, endNumber)); //Display 0, but we expected 15 because we are in strict mode and the variable sum is not defined in the function scope.