let container = document.querySelector('#container');

document.querySelector('#change-resolution').onclick = changeResolution;

function changeResolution() {
    let resolution = Number(prompt("Please enter the number of squares per side for your sketch pad. Maximum: 100", "16"));
    resolution = (resolution <= 100) ? resolution : 100;

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
            
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            });

            rowContainer.appendChild(div);
        }
        container.appendChild(rowContainer);
    }
}

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