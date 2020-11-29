var button = document.querySelector("button");
var ul = document.querySelector("#navbar>ul");
var style = getComputedStyle(ul);

button.onclick = function() {   
    if(style.display === "none") {
        ul.style.setProperty("display","block");
    } 
    else if(style.display === "block") {
        ul.style.setProperty("display","none");
    }
    
}