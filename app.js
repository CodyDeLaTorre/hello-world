'use strict';

let userName = prompt("Welcome to my news page! What is your name?")


if(userName === "Kassie" || userName === "kassie" ){
    alert("Welcome teach!")
} else if (userName == "Cody" || userName == "cody"){
    alert("Welcome, creator.")
}else if (userName === "Kai" || userName === "kai"){
    alert("oh it's you...")
} else if (userName == ""){
    prompt("Please enter you name!")
    if(userName == ""){
        alert("I didn't want to know you anyway")
    }
} else {
    alert("Enjoy the news :) " + userName)
}


let userEmail;

function signUp(){
    let userEmail = prompt("What is your email?");
    return userEmail;
};




function contactUs(){
    alert("I don't want to talk")
};


