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
*/
let setTimer;
let setAge;


const tamagotchi = {
    name: prompt("please enter a name:"),
    foodLvl: 0,
    tiredLvl: 0,
    playLvl: 0,
    age: 1,

    /*

    */
    increaseFoodLvl(){
      let food = this.foodLvl;
        food++;
      $('#feed').text('Hunger: ' + food);
      if(food === 10){
        gameOver();
        return reset();
      }
        return this.foodLvl += 1;
    },

    increaseTiredLvl(){
      let tired = this.tiredLvl;
        tired++;
      $('#tired').text('Tiredness: ' + tired);
      if(tired === 10){
        gameOver();
        return reset();
      }
        return this.tiredLvl += 1;
    },

    increasePlayLvl(){
      let play = this.playLvl;
        play++;
      $('#boredom').text('Boredom: ' + play);
      if(play === 10){
        gameOver();
        return reset();
      }
        return this.playLvl += 1;
    },

    increaseAge(){
      let age = this.age;
        age++;
      $('#age').text('Age: ' +  age);
        return this.age+=1;
    },

    decreaseFoodLvl(){
      let decFood = this.foodLvl;
        if(this.foodLvl === 0){
          $('#feed').text('Hunger: ' + decFood);
            return this.foodLvl = 0;
        }
        decFood--;
        $('#feed').text('Hunger: ' + decFood);
          return this.foodLvl -= 1;
    },

    decreaseTiredLvl(){
      let decTired = this.tiredLvl;
        if(this.tiredLvl === 0){
          $('#tired').text('Tiredness: ' + decTired);
            return this.foodLvl = 0;
        }
        decTired--;
        $('#tired').text('Tiredness: ' + decTired);
          return this.tiredLvl -= 1;
    },

    decreasePlayLvl(){
      let decPlay = this.playLvl;
        if(this.playLvl === 0){
          $('#bordom').text('Boredom: ' + decPlay);
            return this.foodLvl = 0;
        }
        
        decPlay--;
        $('#boredom').text('Boredom: ' + decPlay);
          return this.playLvl -= 1;
    },
}
$("#name").text(`${tamagotchi.name}`);

/* button works fine, now i need to make the increase functions to iterate without any clicks. then we make more buttons to assign to other meters, and make them be able to decrease the meters. */

$("#decFood").on('click', () => {
  console.log(tamagotchi.decreaseFoodLvl());
})

$("#decTire").on('click', () => {
  console.log(tamagotchi.decreaseTiredLvl());
})

$("#decPlay").on('click', () => {
  console.log(tamagotchi.decreasePlayLvl());
})

/* we'll need a function to initialize the game and start the meters for each metric that we're tracking. For now I'll make a button to just show that things are tracking, but not do the increase on an interval.
*/

$("#begin").on('click', () => {
  setTimer = setInterval(() => {
    tamagotchi.increaseTiredLvl();
    tamagotchi.increasePlayLvl();
    tamagotchi.increaseFoodLvl();}, 1000);
  setAge = setInterval(() => {
    tamagotchi.increaseAge();
  }, 10000);

});

const gameOver = function() {
  clearInterval(setTimer);
  alert(`${tamagotchi.name} has died`);
}

const reset = function() {
  tamagotchi.playLvl = 0;
  tamagotchi.tiredLvl = 0;
  tamagotchi.foodLvl = 0;
  tamagotchi.age = 1;
}