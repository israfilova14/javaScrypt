//  let inp =document.querySelector(".inp");
//  let addBtn = document.querySelector(".addBtn");
//  let errorMsg = document.querySelector(".error");
//  let succesMsg = document.querySelector(".success");

//  addBtn.addEventListener("click",()=>{
//     // function clearThis(target) {
//     //     target.value= "";
//     // }
//     // console.log(clearThis);
//     if(inp.value.length>8){
//         console.log("sifre ugursuzdur");
//         errorMsg.style.display = "block";
//         succesMsg.style.display= "none";
//         // input.value = "";
//     }
//     else{
//         console.log("sifre ugurludur");
//         succesMsg.style.display= "block"
//         errorMsg.style.display = "none"
//     }
//  })
 
 let myBtn = document.querySelector(".myBtn");
 let btn2 = document.querySelector(".btn2");
 let btn3 = document.querySelector(".btn3");
 let text1 = document.querySelector(".text1");
 let text2 = document.querySelector(".text2");
 let text3 = document.querySelector(".text3");
 
 myBtn.addEventListener("click",()=>{
  text1.style.display = "block";
  text2.style.display = "none";
  text3.style.display = "none"
 })
 
 btn2.addEventListener("click",()=>{
    text2.style.display = "block";
  })
btn3.addEventListener("click",()=>{
    text3.style.display = "block";
  })

  
  
 
    
   