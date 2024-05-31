document.forms.registration.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (document.getElementById("name").value !== "" && document.getElementById("login").value !== "" && document.getElementById("password").value !== "") {
        registration.style.display = "none";
        let promis = fetch("reg.php", {
            method: "POST", body: new FormData(document.forms.registration)
        }); let result = await promis.json();
        console.log(result);
     
    } else {
        
        alert("Сори");
    }
   
});












let signin = document.getElementById("signin");
let registration = document.getElementById("registration");
let authorization = document.getElementById("authorization");
let swapauthorization = document.getElementById("swapauthorization");
let swapregistration = document.getElementById("swapregistration");
let subminregistration = document.querySelector("subminregistration");
let submitregistration = document.getElementById("submitregistration");
let name = getElementById = document.getElementById("name");
let login = getElementById = document.getElementById("login");
let password = getElementById = document.getElementById("password");

signin.addEventListener("click", function () {
    registration.style.display = "flex";

})




swapauthorization.addEventListener("click", function () {
    registration.style.display = "none";
    authorization.style.display = "flex"


})





swapregistration.addEventListener("click", function () {
    authorization.style.display = "none"
    registration.style.display = "flex";
}) 
