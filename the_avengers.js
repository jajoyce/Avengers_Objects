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

