// Create a repo for your tomagotchi pet
// make a commit after you finish each one of the following
// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
// Instatiate your Tomagotchi
// Display a character of your choice on the screen to represent your pet
// Display the following metrics for your pet: (in chrome console)
// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age
// Add functions to the screen to feed your pet, turn off the lights, and play with your pet. (i.e. be able to call feed() in chrome console and then log the pet to see the values change)
// Add the ability to name your pet.
// Style the page.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.

class Tamagochi{
    constructor(name){
    this.name=name;
    this.age=0;
    this.hunger=0;
    this.boredom=0;
    this.sleepiness=0;
    this.alive=true;
    this.increaseAge();

    this.increaseScales();

    }
    getAge(){
        return this.age;
    }
    getBoredom(){
        return this.boredom
    }
    getSleepiness(){
        return this.sleepiness
    }
    getHunger(){
        return this.hunger;
    }
    increaseScales(){
      let scalesInterval=setInterval(()=>{
          if(this.hunger<10&&this.sleepiness<10&&this.boredom<10&&this.alive){
            this.hunger++;
            this.boredom++;
            this.sleepiness++;
            this.update();
        }
            else{
              clearInterval(scalesInterval); 
              this.die();
            }
        },5000);
    }
    update(){
        document.getElementById("sleep").innerText=this.sleepiness
        document.getElementById("hunger").innerText=this.hunger;
        document.getElementById("boredom").innerText=this.boredom;
    }
    increaseAge(){
    let ageInterval=setInterval(() => {
        if(this.age<5&&this.alive){
        this.age++;
        document.getElementById("age").innerText=this.age;}
        else{
            clearInterval(ageInterval); 
            this.die(); 
        }

    }, 10000);
    }

    die(){
        alert("your pet is dead");
        this.alive=false;
    }

    feed(){
        if(this.hunger>0){
            this.hunger--;
            document.getElementById("hunger").innerText=this.hunger;
        }
        else{
            console.log("Your Tamagochi is not hungry");
        }
    }

    sleep(){
        if(this.sleepiness>0){

        this.sleepiness--;
        document.getElementById("sleep").innerText=this.sleepiness;
        }
        else{
            alert("Your Tamagochi is not sleepy");
        }
 

    }

    play(){
        if(this.boredom>0){
        this.boredom--;
        document.getElementById("boredom").innerText=this.boredom;
        }else{
            alert("Your Tamagochi is not bored")
        }
    }

}

let myPet=new Tamagochi("toothless");

var $feed=document.getElementById("feed");
var $play=document.getElementById("play");
var $sleep=document.getElementById("petSleep");

$feed.addEventListener("click",feedMe);
$play.addEventListener("click",playWithpet);
$sleep.addEventListener("click",petSleep);
function petSleep(){

myPet.sleep();

}
function feedMe(){
myPet.feed();
}

function playWithpet(){
myPet.play();

}






