// for (let i=1; i<=100; i++){
//     console.log(i);
// }
// let number=54236868;
// let lastNumber=number%10;
// let secondNum ;
// // task 1
// while (number>10){
//     secondNum=number%10;
//     number=parseInt (number/10);
// }
// console.log(lastNumber + secondNum);
// task 2
// let number =54236868;
// let counter=0;
// while (number>0){
//     let digit=number % 10;
//     counter ++;
//     number=number/10;
// }
// console.log(counter);

// task1

// for (let i=10 ; i<=99;i++){
//     let lastNumber=i%10;
//    if (lastNumber==7){
//     console.log(i);
//    }
// }
// task2
// for (let i=10; i<=99; i++){
//     let Mynumber=i%11;
//     if (Mynumber==0){
//     console.log(i);
//     }
// }
// task 3
// let number=1234
// let str=String(number);
// for (let i=0;i<str.length;i++ ){
//    console.log(str[i]);
// }
// task 4
// let number=45678;
// let sum=0;
// while (number>0){
//     let char =number%10;
//     sum +=char;

// }
// task 5
// let number=7777;
// let sum=0;
// let hasil=1;
// while (number>0){
//     let char=number%10;
//     sum +=char;
//     hasil *=char;
//     number=parsenInt(number/10);
//     console.log(char);
// }
// console.log(sum);
// while (number>0){
//     let digit=number%10;
//     hasil *=digit;
//     number=parsenInt(number/10);
//     console.log(digit);
// }
//   console.log(hasil-cem);
// task 6
// let number=3651;
// let maxnum=0;
// let str=String(number);
// for (let i=0;i<str.length;i++){
//      if (number>0 && i[1]-i[0]>0&&i[1]-c>0&&b-d>0){
//         console.log(b);
//      }
// }
// task 7
// let number=3651;

// let str=String(number);
// let maxIndex=0;
// console.log(str);
// let min=Number (str[0]);
// let max=Number(str[0]);
// for (let i=0;i<str.length;i ++){
//     if (Number(str[i])<min){
//         min=Number(str[i]);
//         index=index+String(str[i]);
//         console.log(index);
//     }

// }
// console.log(min);
// 
// task 8
// let number=54236868;
// let sum=0;
// while(number>0){
//     let char=number%10;
//     sum +=char;
//     number=parseInt(number/10);
//     console.log(char);
// }
// console.log(sum);
// task 9
// let number=54236868;
// let lastNumber=number%10;
// let digit;
// while(number>10){
//     digit=number%10;
//     number=parseInt(number/10);
// }
// console.log(digit);
// console.log(digit +lastNumber);
// task 10
// let number=54236868;
// let counter=0;
// while(number){
//     let digit =number%10;
//     counter ++
//     number=parseInt(number/10)
// }
// console.log(counter);
// task 11
let number=3251;
let str=String(number);
console.log(str);
let newNumber="";

let max=Number(str[0]);
let maxIndex=0;
let min=Number(str[0]);
let minIndex=0;

for(let i=0; i<str.length; i++){
    if(Number(str[i])>max){
        max=Number(str[i])
        maxIndex=i;
    }
    if(Number(str[i])<min)
    min=Number(str[i]);
        minIndex=i;
}
console.log("maxIndex",maxIndex);
console.log(max);
console.log("minIndex",minIndex);
console.log(min);