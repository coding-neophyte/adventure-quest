const awaken = {
    id: 'awaken',
    title: `link's awakening`,
    image: '',
    description: 'You have awoken on an island with no memory of how you arrived, you hear a voice telling you to get off the island, how do you do it?',
    choices: [{
        id: 'explore island',
        description: 'walk around island searching for resources',
        result: `you found some essentials needed to build a boat and sail away`,
        hp: 0,
        rupees: 0
    },
    {
        id: 'swim',
        description: 'you make an attempt to swim away',
        result: `youre attacked by sharks`,
        hp: -3,
        rupees: 0
    },

    {
        id: 'locals',
        description: 'make friends with the locals',
        result: `locals provide you with rupees and a cpatain will take you to the mainland`,
        hp: 0,
        rupees: 20

    }

    ],
};

const town = {
    id: 'town',
    title: `save the villagers`,
    image: '',
    description: 'you make it to the mainland and you see a hoard of moblins heading towards the town, what do you do?',
    choices: [{
        id: 'warning',
        description: 'warn the town people of the pending moblin attack',
        result: `you get a burst of energy from sleeping on the boat ride and you make it in time to warn the villagers of the attack, the villagers survive and thank you by rewarding you rupees`,
        hp: 0,
        rupees: 10
    },
    {
        id: 'fight',
        description: 'armed with a branch you decide to take on the moblins yourself',
        result: `your branch breaks mid combat resulting in your death`,
        hp: -3,
        rupees: 0
    },

    {
        id: 'help',
        description: 'you make it to town to warn villagers and are provided with a spear to fight along side the villagers',
        result: `you defeat the moblins but not without taking damage (loss of 1 heart) and you are rewarded 25 rupees`,
        hp: -1,
        rupees: 25

    }

    ],
};

const masterSword = {
    id: 'masterSword',
    title: `master weapon`,
    image: '',
    description: 'the ominous voice tells you to venture deep into the forest to find the master weapon to defeat ganondorf',
    choices: [{
        id: 'branch',
        description: 'youve been walking for a few hours and come across a glowing branch',
        result: `you mistake the glowing branch for the master weapon and are approached by wolves and destroy the glowing branch during battle only to realize it is not the master weapon`,
        hp: -3,
        rupees: 0
    },
    {
        id: 'leave',
        description: 'you become weary from all the searching and leave the forest',
        result: `ganondorf ceases control of the entire world and you live out your days breaking random pots`,
        hp: 0,
        rupees: 1000
    },

    {
        id: 'find',
        description: 'you come across the glowing sword wedged in the block of stone',
        result: `you regain memory of your past life and become the chosen one`,
        hp: 4,
        rupees: 10

    }

    ],
};


const ganon = {
    id: 'ganon',
    title: `ganons castle`,
    image: '',
    description: 'the ominous voice tells directs you on where to find ganondorf',
    choices: [{
        id: 'duel',
        description: 'you challenge ganondorf to a duel',
        result: `ganon proves to be too much for you, you are defeated in battle`,
        hp: -10,
        rupees: 0
    },
    {
        id: 'backup',
        description: 'you are accompanied by a unlikley hero to take on ganondorf',
        result: `the ominous voice turned out to be princess zelda and together you defeat ganondorf`,
        hp: 0,
        rupees: 1000
    },

    {
        id: 'run',
        description: 'you realize you are overmatched',
        result: `build a boat and spend your days enjoying life by the sea`,
        hp: 0,
        rupees: 0

    }

    ],
};
const data = [awaken, town, masterSword, ganon];
export default data;
