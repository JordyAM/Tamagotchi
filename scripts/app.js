console.log("(☞ﾟヮﾟ)☞tamagotchi project loaded☜(ﾟヮﾟ☜)");

/*
So we need to make a tamagotchi object, and methods for interacting with it.

the tamagotchi should have properties to track the three stats and the 
methods should be something like:
-feed
-sleep
-play
-increaseAge
-morph
-die
worry about css and stuff like that later.
*/

const tamagotchi = {
    name: prompt("please enter the tamagotchi's name"),
    foodLvl: 0,
    tiredLvl: 0,
    playLvl: 0,
    age: 1,

    /*

    */
    increaseFoodLvl(){
        return this.foodLvl += 1;
    },
    increaseTiredLvl(){
        return this.tiredLvl += 1;
    },
    increasePlayLvl(){
        return this.playLvl += 1;
    },
    increaseAge(){
        return this.age+=1;
    },
    decreaseFoodLvl(){
        return this.foodLvl -= 2;
    },
    decreaseTiredLvl(){
        return this.tiredLvl -= 2;
    },
    decreasePlayLvl(){
        return this.playLvl -= 2;
    },

 
}

/* we'll need a function to initialize the game and start the meters for each metric that we're tracking. For now I'll make a button to just show that things are tracking, but not do the increase on an interval.



*/
$("#check").on('click', () => {
    console.log(tamagotchi.increaseFoodLvl());
    console.log(tamagotchi.increaseTiredLvl());
    console.log(tamagotchi.increasePlayLvl());
    console.log(tamagotchi.increaseAge());
})
