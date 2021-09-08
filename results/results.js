import { getCharacter } from '../local-storage.js';
import { aliveRupeeMessages, deadRupeeMessages, hpMessages } from './utils.js';



// // ***********TODO*****************
// // 1) Evaluation of result on results page

// // get data from local storage, check hp and rupees
// // make functions with if statements to determine results

// // 2) Results Page design and information display

// // hardcode a p tag and inject
// // **********************************


const user = getCharacter();
function healthyLink(user) {
    if (user.hp <= 0) return 'dead';
    if (user.hp < 2) return 'frail';
    return 'healthy';
}

function wealthyLink(user) {
    if (user.rupees <= 0) return 'broke';
    if (user.rupees < 100) return 'comfortable';
    return 'rich';
}

const healthy = healthyLink(user);
const wealthy = wealthyLink(user);

const linkHealthEl = document.querySelector('#link-health');
const linkWealthEl = document.querySelector('#link-wealth');

healthy === 'dead' 
    ? linkWealthEl.textContent = deadRupeeMessages[wealthy]
    : linkWealthEl.textContent = aliveRupeeMessages[wealthy];

linkHealthEl.textContent = hpMessages[healthy];
