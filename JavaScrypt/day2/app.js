// 
// const name="Hajar";
// const age="22"
// const  arr=[
//     "Aynur",
//     "Fatima",
//     "Almaz",
//     "Elmir",
//     "Narmin",
//     "Minaya",
//     "Khanim",
//     "Gizilgul",
// ]
//  console.log(arr);
//  console.log(typeof arr);
//  console.log(arr[arr.length-1]);
//  console.log(arr[0]);
//  console.log(arr[2]);
//  console.log(arr.length);
//  console.log(arr.indexOf("Elmir"));
//  arr[5]="Sabina";
// //  
// let a=["Hajar"] 
// let b=["Hajar"]
// if (a==b){
//     console.log("Hello World");
// }
// // 
// const  students=[
//     "Aynur",
//     "Fatima",
//     "Almaz",
//     "Elmir",
//     "Narmin",
//     "Minaya",
//     "Khanim",
//     "Gizilgul",
// ]
// students.push("Fidan");
// console.log(students);
// // ən sonuncu elementi silir
// students. pop();
// // ən birinci elementi silir
// students.shift();
// // ən qabağa yeni element əlavə edir
// students.unshift("Laman")
// // obyektləri hərəsini bir sətirdə çap edir
// for(let i=0; i<students.length-1;i++){
//     console.log(students[i])
// }
// // qarşısında BDU yazır
// for (let i=0;i<students.length;i++){
//     console.log(arr[i],"BDU");
// }
// // Task1
// const numArr =[3,57,78,3,56,778];
// for (let i=0; i<numArr.length; i++){
//     if(numArr[i]%2==0){
//         console.log(numArr[i]);
//     }
// }
// // Task2


// //splice
// // ilk 2-si ekranda çap olunmayacaq
// // Bu geri qayıdacaq [3,4,5]. Orijinal massiv təsirlənir, nəticədə massiv [1,2] olur.
// var array=[1,2,3,4,5];
// console.log(array.splice(2)); [3,4,5]
// //slice
// var array2=[1,2,3,4,5]
// // Bu geri qayıdacaq [3,4,5]. Orijinal massiv TƏSİR EDİLMİR, nəticədə massiv [1,2,3,4,5] olur.
// console.log(array2.slice(2)); [3,4,5]
 
// const array3 = [1,2,3,4,5];

// // Remove first element
// console.log('Elements deleted:', array3.splice(0, 1), 'mutated array:', array3);
// // Elements deleted: [ 1 ] mutated array: [ 2, 3, 4, 5 ]
//  const fruits=["Banana","Orange","Lemon","Apple","Mango"]
//  console.log(fruits.slice(1,4));
//  console.log(fruits.splice(1,4));
//  let arr=[2,5,-4,-9,0,18,30,-40,63]
//  let newArr=[]
//  for(let i=0; i<arr.length;i++){
//     if(arr[i]<0){
//         console.log(arr[i]);
//         newArr.push(arr[i])
//     }
//  }
//  console.log(newArr);
//  let arr=[2,5,-4,-9,0,18,30,-40,63]
//  let newArr=[]
//  for (let i=0; i<arr.length; i++){
//     console.log(arr[i]*arr[i]);
//     newArr.push(arr[i]*arr[i])
//  }
//  console.log(newArr);
//  let arr=[2,5,-4,-9,0,18,30,-40,63];
//  let plusArr=[];
//  let minusArr=[];
//  for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         console.log(arr[i]*arr[i]);
//         minusArr.push(arr[i]*arr[i]);
//     }
//     else if(arr[i]>0){
//         console.log(arr[i]*arr[i]*arr[i]);
//         plusArr.push(arr[i]*arr[i]*arr[i])
//     }
//  } 
//  const arr= [2,5,-4,-9,0,18,30,-40,43];
//  const reversed=[]
//  for (let i=arr.length-1; i>=0 ; i--){
//     console.log(arr[i]);
//     reversed.push(arr[i])
//  }
// const arr= [2,5,-4,-9,0,18,30,-40,43];
// let max=arr[0];
// for (let i=0 ;i<arr.length ;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(max);
//  const arr= [2,5,-4,-9,0,18,30,-40,43];
//  for ( let i=0; i<arr.length;i++){
//     if(arr[i=1]){
//         console.log(arr[i=1]);
//         break;
//     }
//  }
 const arr= [2,5,-4,-9,0,18,30,-40,43];
 let max=arr[0];
 let min=arr[0];
 for(let i=0 ;i<arr.length;i++){

 }
// {
//  id:27,
//     name:"Aynur",
//     surname:"Israfilova",
//     age:20;
//     hobbies:["reading book","listen to piano music" ],
//     student:true,
//     teacher:[{id:1,name:"gurban"},{id:2,name:"hajar"},{id:3,name:"Yusif"] ,
//     loginDetail:{username:"israfilova14",password:"aynur2003"}
//     gender:"girl",
//     boyfriendGirlfriend:true,
//     fail:False,
//     avgPoint:95,6,
//     salaryAZN:155,
//     };

let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];
 
for(let i=0;i<students.length;i++){
    console.log(students[i]);
}
for (let i=0;i<students.length; i++){
    console.log("Ad:",students[i].name);
}
for(let i=0;i<students.length;i++){
    console.log("Ad:",students[i].name,"Soyad:",students[i].name);

}

for(let i=0;i<students.length;i++){
        if(students[i].fail==true){
        console.log( students[i]);
        }
}
let maxAvg=students[0].avgPoint;
let
for (let i=0;i<students.length;i++){
    if(maxPoint>avgPoint){
        maxPoint=max;
        console.log(max);
    }
    // if(students[i].avgPoint==90){
    //     console.log(students[i]);
    // }
}
console.log(students[i].maxPoint==max);
 