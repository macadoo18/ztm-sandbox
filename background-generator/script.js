// Write code so that the colour inputs match the background generated on the first page load. 
// Display the initial CSS linear gradient property on page load.
// BONUS: Add a random button which generates two random numbers for the colour inputs.

let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');

// console.log('body color', bodyColor1);
body.style.background = `linear-gradient(to right, #913B8E, #AB9E49)`;


window.onload = () => {
    body.style.background = `linear-gradient(to right, #913B8E, #AB9E49)`;
    color1.value = '#913B8E';
    color2.value = '#AB9E49';
    css.textContent = body.style.background;
}

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
    css.textContent = body.style.background;
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);