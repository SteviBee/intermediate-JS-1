// To select one element by ID:
let container = document.getElementById("container");

// To select one element by CSS selector 
let container = document.querySelector("#container");

// To select multiple elements:
let divs = document.getElementsByTagName("div");
let divs = document.querySelectorAll("div");

// To select multiple elements via class name:
let divsWithClassOfHello = document.getElementsByClassName("hello");
let divsWithClassOfHello = document.querySelectorAll(".hello");

// change text of element with InnerHTML:
let firstDiv = document.getElementsByTagName("div")[0];

firstDiv.innerHTML = "Just changed!";