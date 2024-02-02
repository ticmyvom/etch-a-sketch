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
            setBackgroundColor(div, 'lightblue');
            
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

function attachHoverListeners() {
    let squareDivs = document.querySelectorAll('.square-div');
    for (let sqDiv of squareDivs) {
        sqDiv.addEventListener('mouseover', () => {
            if (isPenOn) {
                if (isRandomColor) {
                    sqDiv.style.backgroundColor = randomRgbColor();
                } else {
                    sqDiv.style.backgroundColor = 'black';
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
        setBackgroundColor(sqDiv, 'lightblue');
    }
}

function setBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}