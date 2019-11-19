// fonctionalité 1
var footer = document.getElementsByTagName('footer')[0];

function ClickOnFooter (){
console.log('Clique');
};
footer.addEventListener("click", ClickOnFooter);

//fonctionnalité 1-bis

var clickCount = 0; 
function howManyClicks (){
clickCount ++;
console.log(`Clic numero: ${clickCount}`);
};

footer.addEventListener("click", howManyClicks);

// Fonctionnalité numéro 2 
let burger = document.getElementsByClassName("navbar-toggler")[0];
let menuContent = document.getElementById("navbarHeader");

// Ajouter  le collapse

function collapseManager (){
    menuContent.classList.toggle("collapse");
};
burger.addEventListener("click", collapseManager);

// Fonctionnalité numéro 3 
let cards = document.getElementsByClassName("card");
let button = document.getElementsByClassName("btn-outline-secondary")[0];
let firstCard = cards[0]
function turnEditToRed (){
    firstCard.style.color = 'red';
};

button.addEventListener("click", turnEditToRed);

//Fonctionnalité numéro 4
 let secondButton = document.getElementsByClassName("btn-outline-secondary")[1];
let secondCard = cards[1]
let black = true
function turnChangeColor (){
    if (black == true ){
        secondCard.style.color = 'green';
        black = false;
    } else {
        secondCard.style.color = 'black';
        black = true;
    };
};
secondButton.addEventListener("click", turnChangeColor)

//fonctionnalité 5
let baar = document.getElementsByTagName("header")[0];
let bootstrapLink = document.getElementsByTagName("link")[0];

let bootstrapLinkContent = document.head.getElementsByTagName("link")[0].href;
let bootstrapOn = true

function bootstrapSwitch(){
    if (bootstrapOn){
         bootstrapLink.href = "#";
        bootstrapOn = false;
    } else {
        bootstrapLink.href = bootstrapLinkContent;
        bootstrapOn = true;
    };
       
};
baar.addEventListener("dblclick", bootstrapSwitch);

// Fonctionnalité numéro 6