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

//problem 3
// let n = 7;
// for (let i = n; i >= 1; i--) {
//   let row = '*';
//   for (let j = 1; j < i; j++) {
//     row += '-*';
//   }
//   console.log(row);
// }
// for (let i = 2; i <= n; i++) {
//   let row = '*';
//   for (let j = 1; j < i; j++) {
//     row += '-*';
//   }
//   console.log(row);
// }

//problem 4

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = '--'.repeat(n - i); 
//   for (let j = 1; j <= i; j++) {
//     if (j === 1) {  row += '*';    
//            } else {
//                row += '-*';
//                 }
//   }
//   console.log(row);
// }

// problem 5
// let n = 5
// for (let i = n; i>=1; i--){
//   let row = '  '.repeat(n-i);
//   for (let j= 1; j<=1;j++){
//     row += '* '.repeat(i);
//   }
//   console.log(row);
// }

//problem 6

// let n = 5
// for (let i = n; i>=1; i--){
//   let row = '  '.repeat(n-i);
//   for (let j= 1; j<=1;j++){
//     row += '-*'.repeat(i);
//   }
//   console.log(row);
// }
// for (let i = 2; i <= n; i++) {
//     let row = '  '.repeat(n - i); 
//     for (let j = 1; j <= i; j++) {
//       row += '-*';
//     }
//     console.log(row);
//   }

//problem 7
// let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = '';
//   row += ' '.repeat(i);                  
//   row += '* '.repeat( (n - i) );    
//   console.log(row);
// }
// for (let i = 2; i <= n; i++) {
//   let row = '';
//   row += ' '.repeat(n - i);       
//   row += '* '.repeat(i);   
//   console.log(row);
//}

//problem 8
// let n = 7;
// for (let i = 1; i <= n; i++) {
//     let row = ' '.repeat(n - i); 
//     for (let j = 1; j <= i; j++) {
//       row += '* ';
//     }
//     console.log(row);
//   }
  
//   for (let i = 6; i>=1; i--){
//     let row = ' '.repeat(n-i);
//     for (let j= 1; j<=1;j++){
//       row += '* '.repeat(i);
//     }
//     console.log(row);
//   }

//problem 9 
// let n = 5; 
// for (let i = 1; i <= n; i++) {
//   let row = '-';
//   for (let j = 1; j <= i; j++) {
//     if (j == 1) {  row = '*';    
//                  } else {
//                      row += '-*';
//                       }
//   }
//   console.log(row);
// }
// for (let i = 4; i >= 1; i--) {
//   let row = '-';
//   for (let j = 1; j <= i; j++) {
//     if (j ===1) {  row = '*';    
//                  } else {
//                      row += '-*';
//                       }
//   }
//   console.log(row);
// }


//problem 10 

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = '--'.repeat(n - i); 
//   for (let j = 1; j <= i; j++) {
//     if (j == 1) {  row += '*';    
//                        } else {
//                            row += '-*';
//                             }
//    
//   }
//   console.log(row);
// }
// for (let i = 4; i>=1; i--){
//   let row = '--'.repeat(n-i);
//   for (let j= 1; j<=i;j++){
//     if (j==1) { row += '*';
//       }else{
//         row += '-*';
//       
//   }
//   console.log(row);

// }

// // problem 11
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = '';
  
//   for (let j = 1; j<= (n - i) * 2; j++) {
//     row += '-';
//   }
//  for (let k = 1; k<= i; k++) {
//     if (k == 1) {
//       row += '*';
//     } else {
//       row += '-*';
//     }
//   }
// console.log(row);
// }
// for (let i = n - 1; i >= 1; i--) {
//   let row = '';

//   for (let j = 1; j <= (n - i) * 2; j++) {
//     row += '-';
//   }
//   for (let k= 1; k<= i; k++) {
//     if (k == 1) {
//       row += '*';
//     } else {
//       row += '-*';
//     }
//   }

// //   console.log(row);
// // }
// let n = 5; 

// for (let i = 1; i <= n; i++) {
//   let row = "";

  
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }

//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "*";
//   }

//   console.log(row);
// }


 
//pyramid

// let n = 5;
// for (let i=1; i<=n;i++){
//   let row = '-';
//   row += '-'.repeat(n-i);
//   row += '-*'.repeat(i);
//   console.log(row)
// }

//inverted pyramid

// let n= 5;
// for (let i=0; i<n; i++){
// let row = '-' ;
// row += '-'.repeat(i);
// row += '-*'. repeat(n-i);
// console.log(row)
// }

// let n = 5;
// for (let i=1; i<=n;i++){
//   let row = '-';
//   row += '-'.repeat(n-i);
//   row += '-*'.repeat(i);
//   console.log(row)
// }


//code here 
// use only for loops. dont use .repeat() or .trim()

// expected output:
// * * * * *
// * * * *
// * * *
// * *
// *




//09-04-2025
//inverted pyramid

// let n=5;
// for (let i=n; i>=1; i--){
//     let row = '';
//     for (let j=1 ; j<=n-i;j++){
//         row += ' ';
//     }
// for (let k =1; k<=i; k++){
//     row += '* '
// }
// console.log (row);
// }

//Left-Aligned Decreasing Triangle

// let n = 5;
// for (let i=n; i>=1; i--){
//     let row = '';
//     for(let j = 1; j<=n ; j++){
//         row+= '';
//    }
//    for (let k = 1; k<=i ; k++){
//     if ( k === i) {row +='*'
//     }else{
//       row+='*-';
//     }
  

//    }
//    console.log(row);
// }

//Left-Aligned Increasing Triangle
// let n = 5;
// for (let i =1; i<=n; i++){
//     let row = '';
//     for (let j = 1; j<=i; j++){
//         if ( j === i) {row +='*'
//         }else{
//           row+='*-';
//         }
      
  
//     }
//     console.log(row);
// }

//pyramid
// let n = 5;
// for (let i= 1; i<=n ; i++){
//     let row ='';
//     for (let j = 1; j<=n-i;j++){
//         row+=' ';
//     }
//     for (let k=1 ; k<=i; k++){
//         if ( k === i) {row +='*'
//                       }else{
//                         row+='*-';
//                       }
                    
//                 }
    
//     console.log(row);
// }

//Right-Aligned Increasing Triangle
// let n =5;
// for (let i=1; i<=n;i++){
//     let row = '';
//     for (let j=1; j<=n-i;j++){
//         row +='--';
//     }
//     for (let k=1; k<=i ; k++){
//         if(k === i) {
//             row += '*'
//         }else{
//         row +='*-'}
//     }
//     console.log(row);
// }

//Right-Aligned Decreasing Triangle

// let n = 5;
// for (let i=n; i>=1; i--){
//     let row = '';
//     for (let j=1; j<=n-i ;j++){
//         row+='  ';
//     }
//     for (let k=1; k<=i; k++){
//         if ( k === i) {row +='*'
//           }else{
//             row+='*-';
//           }
        
//     }
//     console.log(row);
// }

// let n = 5;
// for ( let i = n ; i>=1; i--){
//     let row = '';
// for (let j = 1; j<=n-i; j++) {
//     row+= ' ';
// }
// for (let k = 1; k<=i; k++){
//     if ( k === i) {row +='*'
//                   }else{
//                     row+='*-';
//                   }
//                 }
// console.log(row);
// }
// for ( let i = 2 ; i<=n; i++){
//     let row = '';
// for (let j = 1; j<=n-i; j++) {
//     row+= ' ';
// }
// for (let k = 1; k<=i; k++){
//     if ( k === i ) {
//         row+='*'
//     }else{
// row+= '*-';
// }}
// console.log(row);
// }
