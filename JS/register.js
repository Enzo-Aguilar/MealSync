import { validPassword, validUsername } from "./validator.js";

document.addEventListener("DOMContentLoaded", function(){
    
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const email = document.querySelector("#email");
    const form = document.querySelector("#form");
    const res = document.querySelector(".Res");

    form.addEventListener("submit", function(e){
        e.preventDefault();
        if(!validPassword(password)){
            res.innerHTML = "Invalid Password";
        }
        else if(!validUsername(username)){
            res.innerHTML = `Invalid Username ${username.value}`;
        }
        else{
            alert("Registered Sucessefully!!");
            window.location.href = "index.html"
        }
    });
});