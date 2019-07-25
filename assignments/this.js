/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window is the browser representaion of the  global scope and it is where everything in JavaScript exists. So you could say the window is everything that  JavaScript can access 
when we console.log(this) we are give back a object that is full of other objects and functions that can be accesed at anytime.

* 2. Implicit binding basically means that when he call a function using dot notation on an object the this in that function refers to whatever is to the left of the dot notation is implied to be (this).

* 3. when we use the new keyword to make a new object along with a constructor function that has the (this) keyword inside it to build the object. The (this) keyword is bound to whatver name we give that new object.

* 4. explicit binding lets us use a call a function on an object using one of the built in JavaScript methods wich is .call()

.call() takes in one argument. and that argument is the object we want to call a function on. If we are using the this keyword in that function we are explicitly stating what (this) refers to  by passing an object through the function.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this)

// Principle 2

// code example for Implicit Binding
const pet = {
    species: "dog",
    sound: "bark",
    speak: function(){
        console.log(`The ${this.species} says ${this.sound}`)
    }
}
pet.speak()

// Principle 3

// code example for New Binding

function Animal(attrs){
    this.species = attrs.species;
    this.sound = attrs.sound
    this.speak = function(){
        console.log(`The ${this.species} says ${this.sound}`)
    }
}

const cat = new Animal({
    species: "cat",
    sound: "meow"
}) 

cat.speak()

// Principle 4

// code example for Explicit Binding
const animal = {
    species: "cow",
    sound: "moo"
}

function talk(){
    console.log(`the ${this.species} says ${this.sound}`)
}

talk.call(animal)