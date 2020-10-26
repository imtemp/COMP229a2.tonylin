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

        let deleteButton = document.querySelectorAll('.btn-danger')

        for(button of deleteButton){
            button.addEventListener('click', (event) =>{
                if(!confirm("Are you sure?")){
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            })
        }
    }

    window.addEventListener("load", Start);

})();

// Function to alert the user when they click the send button

function messageSent(){
    var sent = "Your message has been sent.";
    alert (sent);
}