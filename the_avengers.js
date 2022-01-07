// Iron Man 
const ironMan = {
    regularName: 'Anthony Edward "Tony" Stark',
    abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
    marvelMovieAppearances: {
        ironMan: true,
        theHulk: true,
        ironManTwo: true,
        thor: false,
        captainAmerica: false,
        theAvengers: true,
        ironManThree: true,
        thorTwo: false,
        captainAmericaTwo: false,
        guardiansOfTheGalaxy: false,
        avengersTwo: true,
        antMan: false,
        captainAmericaThree: true,
        doctorStrange: false,
        guardiansOfTheGalaxyTwo: false,
        spiderManHomecoming: false,
        thorThree: false,
        blackPanther: false,
        avengersThree: true
    },
    jarvisAreYouThere: () => {
       console.log('At your service, sir')
    }
}

// 1. 
console.log(ironMan.abilities[2]);

// 2. 
for (let i = 0; i < ironMan.abilities.length; i++) {
    console.log(ironMan.abilities[i]);
}

// 3. 
console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);

// 4. 
ironMan.marvelMovieAppearances.spiderManHomecoming = true;
console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);

// 5. 
ironMan.jarvisAreYouThere();


// Assembling Other Avengers 

// createCaptain 

const createCaptain = function () {
    return {
        aliases: {
            superheroName: 'Captain America'
        },
        abilities: ['Superhuman Stamina', 'Superhuman Reflexes', 'peak human strength'],
        sayPhrase: () => 'i can do this all day'
    }
};

console.log(createCaptain().aliases.superheroName);
console.log(createCaptain().abilities[2]);
console.log(createCaptain().sayPhrase());

// blackWidow 

const blackWidow = {
    aliases: {
        realName: 'Natalia Alianovna Romanova', 
        otherNotableAliases: ['Black Widow', 'Natalie Rushman']
    }
};

console.log(blackWidow.aliases.realName);
console.log(blackWidow.aliases.otherNotableAliases[1]);

