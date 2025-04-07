// problem 2
// let n = 5;                                
// for (let i = n; i >= 1; i--) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     if (j === 1) {  row += '*';    
//       } else {
//         row += ' *';
//          }
// }
//   console.log(row);
let n = 7;
for (let i = n; i >= 1; i--) {
  let row = '*';
  for (let j = 1; j < i; j++) {
    row += '-*';
  }
  console.log(row);
}
for (let i = 2; i <= n; i++) {
  let row = '*';
  for (let j = 1; j < i; j++) {
    row += '-*';
  }
  console.log(row);
}

//code here
// use only for loops. dont use .repeat() or .trim()

// expected output:
// * * * * *
// * * * *
// * * *
// * *
// *

