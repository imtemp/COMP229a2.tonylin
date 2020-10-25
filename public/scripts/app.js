/* 
File: app.js
Name: Tony Lin
Student ID: 301071193
Date: October 7
*/

var user;
var password;


(function(){

    function Start()
    {
        console.log("App started...");
    }

    window.addEventListener("load", Start);

})();

// Function to alert the user when they click the send button

function messageSent(){
    var sent = "Your message has been sent.";
    alert (sent);
}

function authenticate(){
    user = document.getElementById('password');
    password = document.getElementById('username');
    if(user != 'test' && password != 'test'){
        
    }
    else{
        res.redirect('/contact-list');
    }
}