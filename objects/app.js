var clue = {
  people: [
    {name: "Eddy"},
    {name: "Linda"},
    {name: "Peter"},
    {name: "Erwin"},
    {name: "Anita"},
    {name: "Lisa"},
    {name: "Linda Vinck"}
  ],
  weapons: [
    { type: "lead pipe", location: "lab"},
    { type: "glass shard", location: "lab"},
    { type: "baseball bat", location: "lab"},
    { type: "candlestick", location: "lab"}
  ],
  rooms: [
    "living room",
    "kitchen"
  ]
}

clue.rooms.push("attic");

console.table(clue);

// Destructuring
let situation = {
  name: 'Rusty', 
  weapon: 'candlestick', 
  room: 'kitchen'
};

let [name, weapon, room] = [situation.name, situation.weapon, situation.room];
const {n, w, r} = {
  n: 'Rusty', // the keys have to match in this case
  w: 'candlestick', 
  r: 'kitchen'
};