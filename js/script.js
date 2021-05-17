// // Ex N12

// let n = Math.abs( +prompt("drakan tiv",""));
// let s = 0;
// let i = 1;

// for (i = 1; i <= n; i++) {
//     s += Math.pow(i, 2);
    
// }

// console.log(s);


// ____________________________________________________________


// // Ex N13

// let i = +prompt("num i", "");
// let k = 1;
// let y = 1;

// do{
//   y *= 2;
//   k++;

// }while(k <= i);

// console.log(y);


// _____________________________________________________


// // Ex N14


// let a = Math.round(+prompt("drakan tiv",""));
// let s = 0;
// let i = 1;

// if(a <= 0){
//     a = 1;
// }

// for (i = 1; i <= a; i++) {
//     s += Math.pow(i, 2);
// }

// console.log(s);


// ___________________________________________________


// Ex N15

// let a = Math.round(+prompt("drakan tiv",""));
// let s = 0;
// let i = 1;

// if(a <= 0){
//     a = 1;
// }

// for (i = 1; i <= a; i++) {
//     s += Math.pow(2, i);
// }

// console.log(s);



// ________________________________________________



// Ex N16

// let n = Math.abs( +prompt("drakan tiv",""));
// let s = 0;
// let h = 0;
// let i = 1;

// for (i = 1; i <= n; i++) {
//     h += Math.sin(i);
//     s += i / h;
// }

// console.log(s);


// __________________________________________________

// ex 29

// const n = prompt("n", "");

// f1:for(let i = 2 ; i<= n ; i++){
//     for(let j = 2 ; j<= i / 2 ; j++){
//       if( i % j === 0){
//           continue f1;  
//         //   label f1
//       }
//     }
//     console.log(i);
// }


// -------------------------------------------

// ex 26

const n = prompt("n", "");

const n = prompt("x", "");

let y1 =x;
let y2 =1;
let s = x;

for(let i = 1 ; i <= n ; i+= 2){
  y1 *= Math.pow(x , 2);
  y2 *= (x - 1) * x;
  if (y1 / y2 < e) {
      continue
  }
}