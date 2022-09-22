'use strict';

 let userName = prompt("Welcome to my news page! What is your name?")


if (userName === "Kassie" || userName === "kassie" ){
       alert("Welcome teach!")
} else if (userName == "Cody" || userName == "cody"){
  alert("Welcome, creator.")
}else if (userName === "Kai" || userName === "kai"){
    alert("oh it's you...")
} else if (userName == ""){
    while(userName == ""){
        userName = prompt("That's not a name")
    }
} else {
  alert("Enjoy the news :) " + userName)
}


let userEmail;

function signUp(){
    let userEmail = prompt("What is your email?");
    return userEmail;
};


function catTakeover(){
    let catInput = prompt("How many cats are there?");
    for(let i = 0 ; i < catInput; i++){
        document.write("<img src='images/cat.PNG'>")
    };
};


function contactUs(){
    alert("I don't want to talk")
};


