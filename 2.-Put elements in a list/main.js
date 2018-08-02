var arrayColors = ["Blue", "Red", "Purple", "Yellow"];

function functionList(array){
    var ul=document.getElementById("list");
    for(i=0; i<array.length; i++){
        var listItem = document.createElement("li");
        listItem.textContent = array[i];
        ul.appendChild(listItem);
    }
}

functionList(arrayColors);
