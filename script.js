const container = document.querySelector('.container');

function creatingDivs() {
for (let i = 0; i < 16; i++) {
    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'divRow');
    for (let j = 0; j < 16; j++) {
        let divs = document.createElement('div');
        divs.setAttribute('class', 'innerDiv');
        divRow.appendChild(divs);
        divs.addEventListener('mouseover', () => {
            divs.style.backgroundColor = 'blue';
        })
    }
    container.appendChild(divRow);
}
};
creatingDivs();


