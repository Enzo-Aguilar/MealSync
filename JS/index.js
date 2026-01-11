import { validPassword} from "./validator.js";

document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector("#form");
    const res = document.querySelector(".Res");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    form.addEventListener("submit", function(e){
        e.preventDefault();
        if(!validPassword(password)){
            res.innerHTML = "Invalid Password";
        }
        else{
            alert("Welcome to mealSync!!");
            window.location.href = "meals.html";
        }
    });
});

