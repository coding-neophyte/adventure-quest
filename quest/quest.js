import { findById } from '../utils.js';
import data from '../data/data.js';



const search = new URLSearchParams(window.location.search);
const questId = search.get('id');

const currentQuest = findById(data, questId);

const imageEl = document.querySelector('#image');
const titleEl = document.querySelector('#title');
const questionEl = document.querySelector('#question');

titleEl.textContent = currentQuest.title;
imageEl.src = currentQuest.image;
questionEl.textContent = currentQuest.question;

for (let i = 1; i <= 3; i++){
    const descriptionEl = document.querySelector(`#description-${i}`);
    descriptionEl.textContent = currentQuest.choices[i - 1].description;
}

const formEl = document.querySelector('form');
formEl.addEventListener('submit', (e)=> {
    e.preventDefault();
    const choiceResultEl = document.getElementById('choice-result');
    formEl.classList.add('hidden');
    choiceResultEl.classList.remove('hidden');

});
// ***********TODO*****************
// 1) Handle form submit on quest page shows user description of results in the DOM and gives user a way to get back to the map page

// add event listener for form (prevent default)
// hide choices, render results and provide link to go back to map

// choices.classList.add('hidden')
// results.classList.remove('hidden')
// .hidden {
//     display: none;
// }


// 2) Handle form submit on quest page updates user object
// get user data from local storage and update health and rupees
// display user data
// store user data back to local storage


// extra: add setInterval to something
// ***********************************

// const formData = new FormData(form);
//const dataId = data.get('id');
//const choice = data.get('choice');
