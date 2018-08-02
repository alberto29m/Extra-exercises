var newImage;
var cross = "images/cross.jpg";
var cycling = "images/cycling.jpg";
var football = "images/football.jpg";
var icehockey = "images/icehockey.jpg";
var mix = "images/mix.jpg";
var soccer = "images/soccer.jpg";
var tennis = "images/tennis.jpg";
var tennistable = "images/tennistable.jpg";
var items = [cross, cycling, football, icehockey, mix, soccer, tennis, tennistable];
function randomItem(){
   return items[Math.floor(Math.random()*items.length)];
    }
console.log(randomItem)
function myButton() {
    var btn= document.createElement("button");
    var t = document.createTextNode("CHANGE THE IMAGE");
    btn.setAttribute("id", "buttn")
    btn.appendChild(t);
    images.appendChild(btn);
}
myButton();
function myImages() {
    var x = document.createElement("img");
    x.setAttribute("id", "imagechange")
    x.setAttribute("src", "images/baseball.jpg");
//    x.setAttribute("alt", "baseball");
    images.appendChild(x);
    
    
}
myImages();

function changeImages(){
    randomItem()
        document.getElementById("imagechange").setAttribute("src", randomItem());
    console.log(randomItem)
}
buttn.addEventListener('click', changeImages);
//buttn.removeEventListener('click', myImages);




function returnMeAvalue(){
    return "Hola"
}

console.log(returnMeAvalue())

var palabra = returnMeAvalue();

console.log(palabra)