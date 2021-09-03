import { setCharacter } from './local-storage.js';
import userCreate from './user.js';
// user info page
//make and save user object

//get data from form in main index
//const data = new FormData(form);
// data.get('what you're looking for')
//make a character object and store it to local storage? getCharacter and setCharacter functions already made
//change window location to map after submit (after setting character)

const form = document.getElementById('create-character');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const data = new FormData(form);
    const user = userCreate(data);


    setCharacter(user.value);
    window.location = 'map';

});

 





//extras: clear user when returning to page and make new user
//extras: move this to home folder and update all links


