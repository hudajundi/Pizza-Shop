'use strict';

alert('Pizza on the way!');

var body = document.getElementById('body');
    
var card = document.getElementsByClassName('card');


body.addEventListener('click', clickOnPizza);



function clickOnPizza(event){
    var artc = event.target.id;
    for (var i= 0 ; i < 8 ; i++ ) {
    if(artc === `pizza-${i}`){
    // img.src = "assests/images/cart-updated.png";
    alert ('you choose pizza1')
    }
    }
} 



