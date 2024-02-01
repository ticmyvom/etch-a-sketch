let container = document.querySelector('#container');
let dimension = 16;

for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
        let div = document.createElement('div');
        div.classList.add('square-div');

        if (j % 4 === 0) div.style.backgroundColor = 'lime';

        container.appendChild(div);
    }
}