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
    name: prompt("Give Kirby a nickname:"),
    foodLvl: 0,
    tiredLvl: 0,
    playLvl: 0,
    age: 1,

    

/*these functions will increase the meters as well as trigger a game over when one reaches 10. */
    
    increaseFoodLvl(){
      let food = this.foodLvl;
        food++;
      $('#feed').html(`<h2>Hunger: ${food}</h2>` );
      if(food === 10){
        gameOver();
        return reset();
      }
        return this.foodLvl += 1;
    },

    increaseTiredLvl(){
      let tired = this.tiredLvl;
        tired++;
      $('#tired').html(`<h2>Tiredness: ${tired}</h2>` );
      if(tired === 10){
        gameOver();
        return reset();
      }
        return this.tiredLvl += 1;
    },

    increasePlayLvl(){
      let play = this.playLvl;
        play++;
      $('#boredom').html(`<h2>Boredom: ${play}</h2>` );
      if(play === 10){
        gameOver();
        return reset();
      }
        return this.playLvl += 1;
    },

    increaseAge(){
      let age = this.age;
        age++;
        if(age === 5){
          this.morph();
        }
      $('#age').text('Age: ' +  age);
        return this.age+=1;
    },


  /* these functions decriment the tamagotchi variables whenever the appropriate button is clicked */
    decreaseFoodLvl(){
      let decFood = this.foodLvl;
        if(this.foodLvl === 0){
          $('#feed').text('<h2>Hunger: </h2>' + decFood);
            return this.foodLvl = 0;
        }
        decFood--;
        $('#feed').text('<h2>Hunger: </h2>' + decFood);
          return this.foodLvl -= 1;
    },

    decreaseTiredLvl(){
      let decTired = this.tiredLvl;
        if(this.tiredLvl === 0){
          $('#tired').text('<h2>Tiredness: </h2>' + decTired);
            return this.foodLvl = 0;
        }
        decTired--;
        $('#tired').text('<h2>Tiredness: </h2>' + decTired);
          return this.tiredLvl -= 1;
    },

    decreasePlayLvl(){
      let decPlay = this.playLvl;
        if(this.playLvl === 0){
          $('#bordom').text('<h2>Boredom: </h2>' + decPlay);
            return this.foodLvl = 0;
        }
        
        decPlay--;
        $('#boredom').text('<h2>Boredom: </h2>' + decPlay);
          return this.playLvl -= 1;
    },

/* transforms kirby at age 5 */
    morph(){
      alert(`${tamagotchi.name} Kirby is turning into ${tamagotchi.name} Superstar!`);
      $("#kirby").attr('src', 'SuperKirby.gif');
    }
}
$("#name").text(`${tamagotchi.name}`);

/* buttons for decreasing the meters */

$("#decFood").on('click', () => {
  tamagotchi.decreaseFoodLvl();
})

$("#decTire").on('click', () => {
  tamagotchi.decreaseTiredLvl();
})

$("#decPlay").on('click', () => {
  tamagotchi.decreasePlayLvl();
})

/* Begin button initiates the game and gameOver and reset functions do the fail state and reset the game*/

$("#begin").on('click', () => {
  setTimer = setInterval(() => {
    tamagotchi.increaseTiredLvl();
    tamagotchi.increasePlayLvl();
    tamagotchi.increaseFoodLvl();}, 1000);
  setAge = setInterval(() => {
    tamagotchi.increaseAge();
  }, 10000);
  tamagotchi.age = 1;

});

const gameOver = function() {
  clearInterval(setTimer);
  clearInterval(setAge);
  alert(`${tamagotchi.name} Kirby has died`);
}

const reset = function() {
  tamagotchi.playLvl = 0;
  tamagotchi.tiredLvl = 0;
  tamagotchi.foodLvl = 0;
  tamagotchi.age = 1;
}