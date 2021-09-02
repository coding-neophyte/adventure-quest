import data from '../data/data.js';

const quest = data[0];
const link = document.createElement('a');
const li = document.createElement('li');
const ul = document.creatElement('ul');


link.textContent = quest.title;
link.href = `../quest/?id=${quest.id}`;

li.append(link);
ul.append(li);

for (let quest of data){
    link.textContent = quest.title;
    link.href = `../quest/?id=${quest.id}`;

    li.append(link);
    ul.append(li);
}