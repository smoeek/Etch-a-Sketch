const container = document.querySelector('.container');
const btn = document.querySelector('button');
let divNum = 16;
// let color;
// function getRandomColor() {
//     return color = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')' ;
// };
// console.log(getRandomColor());

function creatingDivs() {
for (let i = 0; i < divNum; i++) {
    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'divRow');
    for (let j = 0; j < divNum; j++) {
        let divs = document.createElement('div');
        divs.setAttribute('class', 'innerDiv');
        divRow.appendChild(divs);
        divs.addEventListener('mouseover', () => {
            divs.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')' ;
        })
    }
    container.appendChild(divRow);
}
};
creatingDivs();

btn.addEventListener('click', () => {
    divNum = prompt('Enter the amount of squares you want');
    if (divNum > 100) {
        divNum = 100;
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    creatingDivs();
});

