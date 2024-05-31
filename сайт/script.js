let signin = document.getElementById("signin");
let registration = document.getElementById("registration");
let authorization = document.getElementById("authorization");
let swapauthorization = document.getElementById("swapauthorization");
let swapregistration = document.getElementById("swapregistration");

signin.addEventListener("click", function(){
    registration.style.display = "flex";

})

swapauthorization.addEventListener("click", function(){
    registration.style.display = "none";
    authorization.style.display = "flex"
    
 
})

swapregistration.addEventListener("click", function(){
    authorization.style.display = "none"
    registration.style.display = "flex";
    
  
})

