import tinycolor from "https://esm.sh/tinycolor2";

let container = document.querySelector('#container');

let changeResolutionBtn = document.querySelector('#change-resolution');
changeResolutionBtn.onclick = changeResolution;

function changeResolution() {
    let resolution = Number(prompt("Please enter the number of squares per side. Maximum: 100", "16"));
    resolution = (resolution <= 100) ? resolution : 100;
    changeResolutionBtn.textContent = `Change the sketch pad's resolution: ${resolution} x ${resolution}`;

    // Clear existing content in the container
    container.innerHTML = '';

    for (let i = 0; i < resolution; i++) {
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');

        for (let j = 0; j < resolution; j++) {
            let div = document.createElement('div');
            div.classList.add('square-div');
            setBackgroundColor(div, 'white');
            
            // To easily keep track if the square grid's been rendered properly
            // if (j % resolution === 0) div.style.backgroundColor = 'lime';
            
            rowContainer.appendChild(div);
        } // end for-j loop
        container.appendChild(rowContainer);
    } // end for-i loop
    attachHoverListeners();
}

let isPenOn = false;
let penToggleBtn = document.querySelector('#pen-toggle');
penToggleBtn.onclick = penToggle;

function penToggle() {
    isPenOn = !isPenOn;
    penToggleBtn.textContent = (isPenOn) ? 'Pen: ON' : 'Pen: OFF';
}

let isRandomColor = false;
let randomColorToggleBtn = document.querySelector('#random-color-toggle');
randomColorToggleBtn.onclick = randomColorToggle;

function randomColorToggle() {
    isRandomColor = !isRandomColor;
    randomColorToggleBtn.textContent = (isRandomColor) ? 'Random Color: ON' : 'Random Color: OFF';
}

let isDarken = false;
let colorDarkenBtn = document.querySelector('#darken-toggle');
colorDarkenBtn.onclick = darkenToggle;

function darkenToggle() {
    isDarken = !isDarken;
    colorDarkenBtn.textContent = (isDarken) ? 'Darken Color: ON' : 'Darken Color: OFF';
}

function attachHoverListeners() {
    let squareDivs = document.querySelectorAll('.square-div');
    for (let sqDiv of squareDivs) {
        sqDiv.addEventListener('mouseover', () => {
            if (isPenOn) {
                let currentBGColor = window.getComputedStyle(sqDiv, null).getPropertyValue('background-color');
                if (tinycolor(currentBGColor).toString() === 'rgb(255, 255, 255)') {
                    // if white, proceed normally
                    if (isRandomColor) {
                        sqDiv.style.backgroundColor = randomRgbColor();
                    } else {
                        sqDiv.style.backgroundColor = 'black';
                    }
                } else {
                    // if there's already a color, darken it
                    let darkenedColor = tinycolor(currentBGColor).darken(10).toString();
                    sqDiv.style.backgroundColor = darkenedColor;
                }
            } 
        });
    }
}

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

document.querySelector('#reset').onclick = resetSketchPad;

function resetSketchPad() {
    let squareDivs = document.querySelectorAll('.square-div');
    for (let sqDiv of squareDivs) {
        setBackgroundColor(sqDiv, 'white');
    }
}

function setBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}