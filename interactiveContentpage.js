
// background color selector
let themes = document.querySelector('body');
console.log(themes);

let darkBtn = document.getElementById('btn1');
let lightBtn = document.getElementById('btn2');

// function to change background to dark and text to light
function darkBg() {
  themes.style.backgroundColor = "rgb(0, 0, 0)";
  themes.style.color = "rgb(255, 255, 255)";
}

// function to change background to light and text to dark
function lightBg() {
  themes.style.backgroundColor = "rgb(255, 255, 255)";
  themes.style.color = "rgb(0, 0, 0)";
}

// DOM event listeners
darkBtn.addEventListener('click', darkBg);
lightBtn.addEventListener('click', lightBg);
