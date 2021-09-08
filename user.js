function userCreate(form){
    const create = {
        name: form.get('name'),
        race: form.get('race'),
        hp: 3,
        rupees: 0,
        completed: {},
    };

    return create;
}

export default userCreate;


//created this function so that it will essentially render
//what the user chooses in terms of name and race and then this will be able to be used
// to show up in the header as we continue on with other pages.
// we might need to make a 'new user' option if the person wants to restart
//OHH and we need to add a complete:{} so that the user can continue on.
