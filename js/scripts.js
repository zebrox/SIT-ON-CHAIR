document.addEventListener("DOMContentLoaded", function(){

var nextBtn = document.getElementById("nextPicture");
var prevBtn = document.getElementById("prevPicture");
var buttons = document.querySelector("button");
var pictureNumber = 0;

var pictureList = document.querySelector(".slider-images").children;

console.log(pictureList);

var arrPictures = [];

for (var i = 0; i < pictureList.length; i++) {
     arrPictures.push(pictureList[i]);
}
console.log(arrPictures[0]);

arrPictures[0].className += "visible";


var counter = 0;
var nxt = 0;
nextBtn.addEventListener("click", function(){
    if (counter >= 1) {
        counter = 0;
        arrPictures[1].classList.remove("visible");
        arrPictures[0].className += "visible";
        console.log(counter);
    }else{
        console.log(document.querySelectorAll("li"));
    arrPictures[counter].classList.remove("visible");

    counter += 1;

    console.log(counter);
    arrPictures[counter].className += "visible";
    }
})

prevBtn.addEventListener("click", function(){
    if (counter <= 0) {
        counter = 1;
        arrPictures[0].classList.remove("visible");
        arrPictures[1].className += "visible";
        console.log(counter);
    }else{
        console.log(document.querySelectorAll("li"));
    arrPictures[counter].classList.remove("visible");

    counter -= 1;

    console.log(counter);
    arrPictures[counter].className += "visible";
    }
})
})
