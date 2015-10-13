// Array exercises
// 1. Use the following array to join all of the words together.
var arraySentence = ["I'm", "now", "a", "pro", "at", "arrays", "!"];
console.log(arraySentence.toString());

// Use the following array for questions 2-4:
var tvShows = ["Portlandia", "Curb Your Enthusiasm", "Dr. Quinn, Medicine Woman"];

// 2. Change the second element to "Full House"
tvShows[1] = "Full House"
console.log(tvShows);
// 3. Add a new TV show to the beginning of the array.
tvShows.unshift("Idk")
console.log(tvShows);
// 4. Create a new Array called showTV. The items should be the same as tvShows, only in reverse order
var showTV = tvShows.reverse()
console.log(showTV);

// Object Exercises
// 5. Create an object called "myPartner" that describes you with your partnery's name, favorite color, and pet's name.
var myPartner = new Object();



console.log(myPartner);
console.log('hi');

// 6. Create an object called dogs. Assign a key of "favoriteBreeds" with the value being an array of three dog breeds.
var dogs = new Object();

dogs.favoriteBreeds =["Chow-Chow", "Husky", "Lab"];

console.log(dogs);
// 7. Get the length of the 3rd dog name.
dogs.favoriteBreeds[2].length

// 8. To the dogs object, add a key of "sweetNames" with a value that is an array of dog names.

dogs.sweetNames = ["Fido", "Spot", "tank", "Doug"];


// Looping Exercises
// 9. Using a loop, log to the console numbers 23 to 99, only in increments of 3.
for(i=23; i<=99; i++){
  console.log(i);
}
// 10. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//     number is even and greater than 10, and 'Odd' if the number is odd.
var numArray = [2, 19, 7, 34, 6];
for(i=0; i<numArray.length; i++){
  if((numArray[i] % 2) == 0){
    console.log(numArray[i]);
  }
}

// 11. Write a loop that outputs the following to the console:
// *
// **
// ***
// ****
// *****
// ******
// *******

// 12. Write a loop that asks a user to input a sentence and returns whether the total number of characters
//     (not counting white spaces) is even or odd.



// Bonus
// Prompt a user to enter a phone number. Write a function that reverses the number.
