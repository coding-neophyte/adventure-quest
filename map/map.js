// List of Quests/Questions with query param links

// done: create all quest links with query params
// add background image and styling
// find images for data


import data from '../data/data.js';

// const quest = data[0];

const ul = document.getElementById('ul');

for (let quest of data) {
    const link = document.createElement('a');
    const li = document.createElement('li');
    link.textContent = quest.title;
    link.href = `../quest/?id=${quest.id}`;
    link.classList.add('quest-link');
    link.style.top = quest.position.top;
    link.style.left = quest.position.left;
    li.append(link);
    ul.append(li);
}

// ***********TODO*****************
// 1) List Page handles completed tasks (render links for incomplete, other styles for completed)

// check if quest is done during link creation, get data from local storage and check
//  disable link and change its look if it is


// 2) List Page detects end conditions and navigates to end page

// goes at top of the page
// get data from local storage, check if hp <= 0 or all quests are done
// if end conditions, relocate window to end page


// ***********************************
