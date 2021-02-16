'use strict';

let score = 0;

// Special data type to store many values
let arr = ['Neveen','Amjad','Anwar','Ashar'];
console.log( 'All Element inside array -> ' , arr );
console.log( 'spic. Element inside array -> ' , arr[1] );

let arr1 = ['Waleed', true, 11, ['class 3', 'Asac']];
console.log( 'Multiple data type ->', arr1 );
// console.log( 'select nested array ->', arr1[3][1] );

// Add new element to the array
// arr1.push( 'new Element' );
// console.log( 'Add new ele. ->', arr1 );

// Remove the last element from the array
// arr1.pop();
// console.log( 'remove ele. ->', arr1 );

// arr.push( 33 );
// arr[10] = '33';
// console.log(arr);

// Remove from specific index in an array
arr1.splice( 2, 1 );
console.log( arr1 );

console.log( arr.length );

// For loop
for( let i = 0; i < arr.length; i++ ) {
  console.log( arr[i] );
  if( arr[i] === 'Amjad' ) {
    console.log( arr[i] );
  }
}

// T && T = T
// F && F, T = F

// T || T = T
// T || F = T
// F || F = F

// false && 'true'
// 0
// '', ""

// true
// [], {}


// While loop
let userName = prompt( 'please enter your name' ).toLowerCase();
while( !userName ) {
  userName = prompt( 'please enter your name' ).toLowerCase();
}

// To break the while it must have a falsy value
let question1 = prompt( 'Are you a human' ).toLowerCase();
while( question1 !== 'yes' && question1 !== 'y' && question1 !== 'no' && question1 !== 'n' ) {
  question1 = prompt( 'Are you a human' ).toLowerCase();
}

if( question1 === 'yes' || question1 === 'y' ) {
  alert();
  score++;
  console.log( score );
}

let petsQuestion;
do {
  petsQuestion = prompt( 'Are you a cat person?' );
  console.log( petsQuestion );
} while ( petsQuestion !== 'yes' && petsQuestion !== 'y' && petsQuestion !== 'no' && petsQuestion !== 'n' );

