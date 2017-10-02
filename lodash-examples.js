/* ----------- REFERENCE AND MORE EXAMPLES: https://colintoh.com/blog/lodash-10-javascript-utility-functions-stop-rewriting#1)_loop_for_n_times

    Lodash is a library for performing regular JS functions in a matter of short lined functions, usually preceded with
    an _underscoreFuncName()
*/

// -----  1) Loop for N times
// Basic for loop.
for(var i = 0; i < 5; i++) {
    // ....
}

// Using Array's join and split methods
Array.apply(null, Array(5)).forEach(function(){
    // ...
});

// Lodash
_.times(5, function(){

    // ...
});

//  -----  2) Loop through a collection and return a deeply-nested property from each item
// Fetch the name of the first pet from each owner
var ownerArr = [{
  "owner": "Colin",
  "pets": [{"name":"dog1"}, {"name": "dog2"}]
}, {
  "owner": "John",
  "pets": [{"name":"dog3"}, {"name": "dog4"}]
}];

// Array's map method.
ownerArr.map(function(owner){
  return owner.pets[0].name;
});

// Lodash
_.map(ownerArr, 'pets[0].name');

//  -----  3) Create an array of N size and populate them with unique values of the same prefix
// Create an array of length 6 and populate them with unique values. The value must be prefix with "ball_".
// eg. [ball_0, ball_1, ball_2, ball_3, ball_4, ball_5]

// Array's map method.
Array.apply(null, Array(6)).map(function(item, index){
  return "ball_" + index;
});


// Lodash
_.times(6, _.uniqueId.bind(null, 'ball_'));

// ----- 4) Deep-cloning Javascript object
var objA = {
  "name": "colin"
}

// Normal method? Too long. See Stackoverflow for solution: http://stackoverflow.com/questions/4459928/how-to-deep-clone-in-javascript

// Lodash
var objB = _.cloneDeep(objA);
objB === objA // false

// ----- 5) Get Random Number between a range
// Get a random number between 15 and 20.

// Naive utility method
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(15, 20);

// Lodash
_.random(15, 20);

