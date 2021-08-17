// Adding event listener to let the page load before using JS
document.addEventListener("DOMContentLoaded", function () {
    let change = document.getElementById("change_heading")
    change.innerText = "Hello World!"
})

// Make new div, make it background purp, add to section
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "purple");

let addTo = document.querySelector("section")
addTo.appendChild(newDiv);

// on mouseover event change text name to color
// ID colors & Item to change
let item = document.querySelectorAll("section > div")

let textToChange = document.querySelector(".selected")

// Add event to each color
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("mouseover", function () {
        textToChange.innerText = item[i].className;
    })    
}

// OR DO IT THIS WAY WITH TARGET:
// window.onload = function(){
//     var section = document.querySelector("section");
//     section.addEventListener("mouseover", function(event){
//         var selectedColor = document.querySelector('.selected');
//         selectedColor.innerText = event.target.className;
//     })
// }


// RACING GAME:
// Needs: 1 - Event on click on button to start, 2 - way to move divs across screen
// 3 - way to know which gets to right side first, 4 - alert winner
let button = document.querySelector("button");
var car1 = document.querySelector('.car1');
var car2 = document.querySelector('.car2');
car1.style.marginLeft = 0;
car2.style.marginLeft = 0;

// Add the starting line via reset function:
function reset(car1, car2) {
    clearTimeout(car1.timer);
    clearTimeout(car2.timer);
    car1.marginLeft = 0;
    car2.marginLeft = 0;
    button.disabled = false;
}

// Using setInterval to animate the cars moving
button.addEventListener("click", function (event) {
    button.disabled = true;
    car1.timer = setInterval(function () {
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + "px";
        if (parseInt(car1.style.marginLeft) > window.innerWidth) {
            alert("car 1 wins!");
            reset(car1,car2);
        };
    }, 60);

    car2.timer = setInterval(function () {
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + "px";
        if (parseInt(car2.style.marginLeft) > window.innerWidth) {
            alert("car 2 wins!");
            reset(car1,car2);
        };
    }, 60);

});

// TODO APP:



