'use strict'
//prompt per ogni numero

const n1 = parseInt(prompt('inserisci un numero'));
const n2 = parseInt(prompt('inserisci un numero'));
const n3 = parseInt(prompt('inserisci un numero'));
const n4 = parseInt(prompt('inserisci un numero'));
const n5 = parseInt(prompt('inserisci un numero'));
const n6 = parseInt(prompt('inserisci un numero'));
const n7 = parseInt(prompt('inserisci un numero'));
const n8 = parseInt(prompt('inserisci un numero'));
const n9 = parseInt(prompt('inserisci un numero'));
const n10 = parseInt(prompt('inserisci un numero'));

//somma dei numeri

let nums = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
};
//risultato finale

console.log(sum);