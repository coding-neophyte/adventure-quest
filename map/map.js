// List of Quests/Questions with query param links

// done: create all quest links with query params
// add background image and styling
// find images for data

import { getCharacter } from '../local-storage.js';
import data from '../data/data.js';
import { findById, renderUserStats } from '../utils.js';

// const quest = data[0];

const ul = document.getElementById('ul');
const userStatsDiv = document.getElementById('user-stats');
const user = getCharacter();
const userStats = renderUserStats(user);
userStatsDiv.append(userStats);

if (user.hp <= 0 || allQuestsComplete(user)) {
    window.location = '../results';
}

for (let quest of data) {
    if (!user.completed[quest.id]) {
        const link = document.createElement('a');
        const li = document.createElement('li');
        link.textContent = quest.title;
        link.href = `../quest/?id=${quest.id}`;
        link.classList.add('quest-link');
        link.classList.add('link-styling');
        link.style.top = quest.position.top;
        link.style.left = quest.position.left;
        li.append(link);
        ul.append(li);
    } else {
        const div = document.createElement('div');
        const li = document.createElement('li');
        div.textContent = quest.title;
        div.classList.add('quest-link');
        div.classList.add('line-through');
        div.style.top = quest.position.top;
        div.style.left = quest.position.left;
        li.append(div);
        ul.append(li);
    }
}

function allQuestsComplete(user) {


    for (let eachQuest of data) {
        const isComplete = user.completed[eachQuest.id];
        if (!isComplete) {
            return false;
        }
    }

    return true;
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
