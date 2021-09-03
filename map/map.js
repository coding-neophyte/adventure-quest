import data from '../data/data.js';

// const quest = data[0];

const ul = document.getElementById('ul')
const img = document.createElement('img');




// link.textContent = quest.title;
// link.href = `../quest/?id=${quest.id}`;

// li.append(link);
// ul.append(li);

for (let quest of data) {
    const link = document.createElement('a');
    const li = document.createElement('li');
    link.textContent = quest.title;
    link.href = `../quest/?id=${quest.id}`;

    li.append(link);
    ul.append(li);
}
//comment 