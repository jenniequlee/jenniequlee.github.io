// Welcomes visitors by the time of day

let today = new Date(); // new date object; based on number of ms since 1/1/70
console.log(Date.now());
let hour = today.getHours(); // current hour method to parse date object
console.log(hour);
let welcome; // initialize variable
let paragraph = document.getElementById('welcome'); // accessing an element on the page

if (hour >= 18) {
  welcome = 'Good evening!';
} else if (hour >= 12) {
  welcome = 'Good afternoon!';
} else if (hour >= 0) {
  welcome = 'Good morning!';
} else {
  welcome = 'Hello!';
}

paragraph.textContent = welcome;
console.log(welcome);


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
