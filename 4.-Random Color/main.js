//var items = [cross, cycling, football, icehockey, mix, soccer, tennis, tennistable];
//function randomItem(){
//   return items[Math.floor(Math.random()*items.length)];
//    }
//console.log(randomItem)

function myButton() {
    var btn= document.createElement("button");
    var t = document.createTextNode("ADD A ROW");
    btn.setAttribute("id", "buttn")
    btn.appendChild(t);
    table.appendChild(btn);
}
myButton();

function addRows(){
    var table = document.getElementById("table");
    var row = document.createElement("tr");
    var columns=document.createElement("td")
    columns.style.background = randomColor();
    var text = columns.textContent;
    columns.textContent = "New Cell";
    table.appendChild(row);
    row.appendChild(columns);
}
function randomColor(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

 buttn.addEventListener('click', addRows);

//function myImages() {
//    var x = document.createElement("img");
//    x.setAttribute("id", "imagechange")
//    x.setAttribute("src", "images/baseball.jpg");
//    images.appendChild(x);
//}
//myImages();
//
//function changeImages(){
//    randomItem()
//        document.getElementById("imagechange").setAttribute("src", randomItem());
//    console.log(randomItem)
//}
//buttn.addEventListener('click', changeImages);
//
//
//
//
//
//function returnMeAvalue(){
//    return "Hola"
//}
//
//console.log(returnMeAvalue())
//
//var palabra = returnMeAvalue();
//
//console.log(palabra)