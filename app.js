'use strict';

// alert('Pizza on the way!');


    
var card = document.getElementsByClassName('card');

var cart = document.getElementById('cart');

var totalCart = document.getElementById('theTotalCart')

var theClickedProducts = {}; /// we put the products into a group to count the amount 


// body.addEventListener('click', clickOnPizza);



function clickOnPizza(event){
    var productData = event.getAttribute('data-product');
    
    var get_productData = document.getElementById(`pizza-${productData}`);

    var total_productData = parseFloat(get_productData.textContent); ///to change string to num

    ////// to know how many times the user click on the product : 

    var total_products = parseFloat(theClickedProducts[productData]) ;  

    if (total_products) {

        total_productData = total_products + total_productData
    }


    theClickedProducts[productData] = total_productData;

    cartFunction();
} 

 

function cartFunction() {
var sum = 0;
var count=0; 
   

    for ( var i=1; i <= 6; i++){
        var price = parseFloat(theClickedProducts[i]);
        

        if (price){
            sum += price;
            count++;
        }
    }


    var cart = document.getElementById('cart');

cart.innerHTML = sum.toFixed(2);
var totalCart = document.getElementById('theTotalCart')
totalCart.innerHTML = count;

}