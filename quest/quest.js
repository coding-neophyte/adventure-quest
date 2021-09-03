import { findById } from '../utils.js';
import data from '../data/data.js';



const search = new URLSearchParams(window.location.search);
const questId = search.get('id');

const currentQuest = findById(data, questId);

// const imageEl = document.querySelector('#image');
const titleEl = document.querySelector('#title');
const questionEl = document.querySelector('#question');

titleEl.textContent = currentQuest.title;
// imageEl.src = currentQuest.image;  *****waiting for image*******
questionEl.textContent = currentQuest.question;

for (let i = 1; i <= 3; i++){
    const descriptionEl = document.querySelector(`#description-${i}`);
    descriptionEl.textContent = currentQuest.choices[i - 1].description;
}


// const formData = new FormData(form);
//const dataId = data.get('id');
//const choice = data.get('choice');
<<<<<<< HEAD

// const search = new URLSearchParams(window.location.search);
 //const quest = findByID(quests, questId);


 //const title = document.getElementById('title');
 //const description = document.getElementById('description');
 //const form = document.getElementById('choice-form');
 //const choice1 = document.getElementById('choice-1');

const title = document.getElementById('title');
const description1 = document.getElementById('description');
const description2 = document.getElementById('description2');
const description3 = document.getElementById('description3');


=======
>>>>>>> b043d33227fbbc7fc487c05e45c3d6164c3de46e
