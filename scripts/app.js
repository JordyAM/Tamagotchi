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
        if(this.foodLvl === 0 || this.foodLvl === 1){
            return this.foodLvl = 0;
        }
        return this.foodLvl -= 2;
    },
    decreaseTiredLvl(){
        if(this.tiredLvl === 0 || this.tiredLvl === 1){
            return this.foodLvl = 0;
        }
        return this.tiredLvl -= 2;
    },
    decreasePlayLvl(){
        if(this.playLvl === 0 || this.playLvl ===1){
            return this.foodLvl = 0;
        }
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


/* button works fine, now i need to make the increase functions to iterate without any clicks. then we make more buttons to assign to other meters, and make them be able to decrease the meters. */

$("#decFood").on('click', () => {
    console.log(tamagotchi.decreaseFoodLvl());
})

$("#decTire").on('click', () => {
    console.log(tamagotchi.decreasePlayLvl());
})

$("#decPlay").on('click', () => {
    console.log(tamagotchi.decreaseTiredLvl());
})


$("#Begin").on('click', () => {
    setInterval(increaseFoodLvl, 3000);
    setInterval(increasePlayLvl, 3000);
    setInterval(increaseTiredLvl, 3000);
    setInterval(increaseAge, 6000);
})