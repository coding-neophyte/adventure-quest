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


// const formData = new FormData(form);
//const dataId = data.get('id');
//const choice = data.get('choice');
