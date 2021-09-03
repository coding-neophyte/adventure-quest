const USER = 'USER';

export function getCharacter(){
    const stringyUser = localStorage.getItem(USER);
    const user = JSON.parse(stringyUser);
    return user;
} 


export function setCharacter(user){
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}