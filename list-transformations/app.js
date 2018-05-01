const game = {
  'suspects': [
    {
      name: 'Rusty',
      color: 'orange'
    },
    {
      name: 'Miss Scarlet',
      color: 'red'
    }
  ]
}

for(var i = 0; i < game.suspects.length; i++) { 
  var suspect = game.suspects[i];
  if(suspect.name === 'Rusty') suspect.guilty = true;
  console.log(suspect);  
}

// Destructuring, the kind of ugly way
let [red, orange] = [game.suspects[1].color, game.suspects[0].color];
console.log(red, orange);

// Destructuring with objects, cool if you already know the property you want
var [{color: firstColor}, {color: secondColor}] = game.suspects;

// My own way of destructuring
[c1, c2] = game.suspects.map((suspect) => suspect.color);

let getProperties = (array = [], property = "") => {
  return array.map((i) => i[property]);
};

console.log(getProperties(game.suspects, "name"));