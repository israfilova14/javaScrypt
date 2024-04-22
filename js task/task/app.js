
const form = document.querySelector("#form");
const contactNameInput = document.querySelector("#contactNameInput") ;
const postalCodeInput = document.querySelector("#postalCodeInput");
const submitButton = document.querySelector(".submitButton")

 

submitButton.addEventListener("click", function(e){
    console.log(contactNameInput.value);
    console.log(postalCodeInput.value);
    e.preventDefault()
    fetch("https://northwind.vercel.app/api/suppliers")
    .then(res=>res.json()).then(data=>{
        console.log(data);
        let found = data.find((element)=>element.contactName==contactNameInput.value)
         
    if(found){
        console.log("parol is successfully");
    }
    else{
        console.log("please, try again");
    }
    })
})