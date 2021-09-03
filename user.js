function userCreate(form){
    const create = {
        name: form.get('name'),
        race: form.get('race'),
        hp: 3,
        rupees: 0,
    };

    return create;
}
export const newUser = (form) => ({
    name: form.get('name'),
    race: form.get('race'),
    hp: 3,
    rupees: 0,
}); 




export default userCreate;