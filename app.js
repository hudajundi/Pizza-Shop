'use strict';

alert('Pizza on the way!');

var body = document.getElementById('body');
    

body.addEventListener('click', clickOnPizza);



function clickOnPizza(event){
    // var the = document.createElement("alert");
    var artc = event.target.id;
    if(artc === "pizza1"){
    // img.src = "assests/images/cart-updated.png";
    alert ('you choose pizza1')
    }

} 
addEventListener();

