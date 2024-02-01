let container = document.querySelector('#container');

document.querySelector('#change-resolution').onclick = changeResolution;

function changeResolution() {
    let resolution = Number(prompt("Please enter a resolution for your sketch pad. Maximum: 100", "16"));
    resolution = (resolution <= 100) ? resolution : 100;

    // Clear existing content in the container
    container.innerHTML = '';

    for (let i = 0; i < resolution; i++) {
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');

        for (let j = 0; j < resolution; j++) {
            let div = document.createElement('div');
            div.classList.add('square-div');
    
            if (j % resolution === 0) div.style.backgroundColor = 'lime';
            // div.addEventListener('mouseover', () => {
            //     div.style.backgroundColor = 'black';
            // });

            rowContainer.appendChild(div);
        }
        container.appendChild(rowContainer);
    }
}