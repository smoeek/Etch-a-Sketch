const container = document.querySelector('.container');
const btn = document.querySelector('button');
let divNum = 16;
btn.addEventListener('click', () => {
    divNum = prompt('Enter the amount of squares you want');
    creatingDivs();
})

function creatingDivs() {
for (let i = 0; i < divNum; i++) {
    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'divRow');
    for (let j = 0; j < divNum; j++) {
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




// let person = prompt("Please enter your name", "Harry Potter");
//   if (person != null) {
//     document.getElementById("demo").innerHTML =
//     "Hello " + person + "! How are you today?";
//   }
