import { findById } from '../utils.js';
import data from '../data/data.js';

// Quest/Question Page uses query id to load correct data
// Quest/Question Presents Question Information
// Quest/Question Presents Question Choices

//get query id from the url
// const data = new URLSearchParams(window.location.search);
// add image and description to html

// add image and desciption content
// add question choices content to radio inputs

const search = new URLSearchParams(window.location.search);
const questId = search.get('id');

const currentQuest = findById(data, questId);

const imageEl = document.querySelector('#image');
const titleEl = document.querySelector('#title');
// const description1El = document.querySelector('#description-1');
// const titleEl = document.querySelector('#title');
// const titleEl = document.querySelector('#title');

titleEl.textContent = currentQuest.title;
// imageEl.src = currentQuest.image;  *****waiting for image*******

for (let i = 1; i <= 3; i++){
    const descriptionEl = document.querySelector(`#description-${i}`);
    descriptionEl.textContent = currentQuest.choices[i - 1].description;
}


// const formData = new FormData(form);
//const dataId = data.get('id');
//const choice = data.get('choice');


// const quest = findByID(quests, questId);


 //const title = document.getElementById('title');
 //const description = document.getElementById('description');
 //const form = document.getElementById('choice-form');
 //const choice1 = document.getElementById('choice-1');