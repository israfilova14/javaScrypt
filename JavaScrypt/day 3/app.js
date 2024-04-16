// An empty object (“empty cabinet”) can be created using one of two syntaxes:
// let user=new Object(
   
// )
// In the usercard object ,there are three properties
// let usercard={
//   name: "Aynur",        
//   surname: "Israfilova",  
//   age:20,
//   hobbies: "reading books,learning different languages" 
// }
// console.log(usercard);
// alert(usercard.name);
// alert(usercard.age);
// usercard.university="BDU"
// delete usercard.hobbies;

// In the user object, there are two properties
// let user = {     // an object
//     name: "John",  // by key "name" store value "John"
//     age: 30  ,      // by key "age" store value 30
//   };
//   console.log(user);
//   alert( user.name );
//   alert( user.age );
//   user.isAdmin=true;
//   delete user.age;

// We can also use multiword property names, but then they must be quoted:
// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // multiword property name must be quoted
//   };
//   console.log(user);

//   let user1={
//     name:"Aynur",
//     surname:"Israfilova",
//     age:20,
//     "reading books": true,
//     "swimming and playng pianino":false,
//   }
// console.log(user1);

// let user = {
//     name: "John",
//     age: 30,
//   }

//   For multiword properties, the dot access doesn’t work:
// this would give a syntax error
// user.likes birds = true

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true , // multiword property name must be quoted
//     "school achievements": true,
//   };
//   user["likes birds"] = true;
//   console.log(user);
//   user["user skills"]=true;
//   user["school achievements"]=true;
//   delete user["likes birds"];
//   delete user["user skills"];
//   alert(user["likes birds"]);
//   alert(user["school achievments"]);

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true 
//   };
//   let key = "likes birds";
//   user[key] = true;
//   console.log(user);
//   let user2={
//     name: "Aynur",
//     age: 20,
//   }
//   user2["reading books"]=true;
//   let data="reading books";
//   user2[data]=true;
//   console.log(user2);

// let user = {
//     name: "John",
//     age: 30,
//   };
//   let key = prompt("What do you want to know about the user?", "name");
  // access by variable
//   alert( user[key] ); // John (if enter "name")


//   let user1={
//     name:"Aynur",
//     age:20,
//     "school achievements":true,
//   };
//   let data=prompt("What do you want to know about the user age?","age")
//   alert(user1[data]);
// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = "name";
//   alert( user.key )

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//     [fruit]: 5, // the name of the property is taken from the variable fruit
//   };
//   alert( bag.apple ); // 5 if fruit="apple"

// let bag=prompt("Which bag to buy?","handbag");
// let card={
//     [bag]:4,
// }
// alert(card.handbag);

// let skills=prompt("Do you have any skills?" ,"yes");
// let bag={
//     [skills]:3
// }
// alert(bag.yes)

