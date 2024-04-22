//Method1

// const getProducts = () =>{
//     const promise = fetch("https://northwind.vercel.app/api/suppliers");

//     promise.then((value) =>value.json()).then((data)=>console.log(data));
// }

// getProducts();

//Method2

const getProducts = async () =>{
    const promise = await fetch("https://northwind.vercel.app/api/suppliers");
    const data = promise.json();

    return data;
}
const box = document.querySelector(".box");
const cards = document.querySelector(".cards");
const deleteBtn = document.querySelector(".deleteBtn")
getProducts().then((data)=>{
    console.log(data);
    data.map((element)=>{
    
        let box = document.createElement("div");
        let companyName = document.createElement("p");
        let contactName = document.createElement("p");
        let contactTitle = document.createElement("p");
        let address = document.createElement("div");
        let street = document.createElement("p");
        let city = document.createElement("p");
        let region = document.createElement("p");
        let postalCode = document.createElement("p");
        let country = document.createElement("p");
        let phone = document.createElement("p");
        let deleteButton = document.createElement("button");

        
        box.className = "box";
        companyName.className = "companyName";
        contactName.className = "contactName";
        contactTitle.className = "contactTitle";
        address.className = "address";
        street.className = "street";
        city.className = "city";
        region.className ="region";
        postalCode.className = "postalCode";
        country.className = "country";
        phone.className = "phone";
        deleteButton.className = "deleteButton"
        
        companyName.innerText = element.companyName;
        contactName.innerText = element.contactName;
        contactTitle.innerText = element.contactTitle;
        street.innerText = element?.address?.street ? element?.address?.street : "no information";
        region.innerText = element?.address?.region ? element?.address?.region : "no information";
        postalCode.innerText = element?.address?.postalCode ? element?.address?.postalCode : "no information";
        country.innerText = element?.address?.country ? element?.address?.country : "no information";
        phone.innerText = element?.address?.phone ? element?.address?.phone : "no information";
        deleteButton.innerText = "Delete"

        deleteButton.addEventListener("click",()=>{
            box.style.display = "none"
        })

        box.append(companyName, contactName, contactTitle, address,deleteButton);
        address.append(street);
        address.append(region);
        address.append(postalCode);
        address.append(country)
        address.append(phone)
        cards.append(box);
    })
   
})
getProducts()
 
const form = document.querySelector("form");
const companyNameInput = document.querySelector("#companyNameInput");
const contactNameInput = document.querySelector("#contactNameInput");
const contactTitleInput = document.querySelector("#contactTitleInput");
const addressCityInput = document.querySelector("#addressCityInput");
const addressStreetInput = document.querySelector("#addressStreetInput");
const addressRegionInput = document.querySelector("#addressRegionInput");
const addressCountryInput = document.querySelector("#addressCountryInput");
const postalCodeInput = document.querySelector("#postalCodeInput");
const addressPhoneInput = document.querySelector("#addressPhoneInput");
const addButton = document.querySelector(".addButton");

form.addEventListener("submit", async(e) =>{
    e.preventDefault();
    const obj = {
        companyName: companyNameInput.value,
        contactName: contactTitleInput.value,
        contactTitle: contactTitleInput.value,
        address: {
          street: "Valtakatu 12",
          city: "Lappeenranta",
          region: "NULL",
          postalCode: 53120,
          country: "Finland",
          phone: "(953) 10956"
        }
    }
    const newData = await fetch("https://northwind.vercel.app/api/suppliers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(obj),
      });
    
      return newData;
})

addButton.addEventListener("click", function(){
const companyNameInput = document.querySelector("#companyNameInput");
const contactNameInput = document.querySelector("#contactNameInput");
const contactTitleInput = document.querySelector("#contactTitleInput");
const addressCityInput = document.querySelector("#addressCityInput");
const addressStreetInput = document.querySelector("#addressStreetInput");
const addressRegionInput = document.querySelector("#addressRegionInput");
const addressCountryInput = document.querySelector("#addressCountryInput");
const postalCodeInput = document.querySelector("#postalCodeInput");
const addressPhoneInput = document.querySelector("#addressPhoneInput");

let obj = {
  companyName: companyNameInput.value,
  contactName: contactNameInput.value,
  contactTitle: contactTitleInput.value,
  address: {
    street: addressStreetInput.value,
    city: addressCityInput.value ,
    region:  addressRegionInput.value,
    postalCode:  postalCodeInput.value,
    country:  addressCountryInput.value,
    phone:   addressPhoneInput.value,
  }
}
 
companyNameInput.value = "";
contactNameInput.value = ""; 
contactTitleInput.value = "";
addressCityInput.value = "";
addressStreetInput.value = ""; 
addressRegionInput.value = "";
addressCountryInput.value ="";
postalCodeInput.value = "";
addressPhoneInput.value= "";
fetch("https://northwind.vercel.app/api/suppliers",{
  method: "POST",
  body: JSON.stringify(obj),

}).then(() =>{
  location.reload()
})
})



 
  