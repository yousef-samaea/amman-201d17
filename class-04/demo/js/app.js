'use strict';
// const attempts = 5;

let firstName = 'Saja';
let LastName = 'Ababneh';

// console.log('full name: ' + firstName + ' ' + LastName);


function fullName( fname, lname ) {
  // let sum = 5 + 5;
  console.log( 'full name: ' + fname + ' ' + lname );
  // return 'full name: ' + firstName + ' ' + lastName;
}

// Invoke the function
console.log( 'Invoke the function with 2 arg.' );
fullName( firstName, LastName );

// console.log(fullName('Waleeed', 'Afifi'));

let userFullName = prompt( 'Please enter your full name' );
let userAge = prompt( 'Please enter your age' );

userInformation( userFullName, userAge );

4 + 4 * 4;
function userInformation( name, age ) {
  // console.log('Your name is ' + name + ', you age is ' + age);
  return 'Your name is ' + name + ', you age is ' + age;
}

function calc( num1 , num2 ) {
  let sum = num1 + num2;
  // console.log(sum);
  return sum;
}

console.log( calc( 4, 4 ) );

console.log( userInformation( userFullName, userAge ) );
// let num1 = 33;
const printCalc = function ( num1, num2 ) {
  let sum = num1 + num2;
  // console.log(sum);
  return sum;
};

// console.log(printCalc(4 ,4));

let sumVar = printCalc( 4 ,14 );
console.log( 'sum Variables -> ', sumVar );
