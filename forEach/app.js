function Suspect(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log(`My name is ${this.name}`);
    }
  }
}

let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

let suspectsList = [];
suspects.forEach((suspect) => suspectsList.push(Suspect(suspect)));

suspectsList = suspects.map((suspect) => Suspect(suspect));

let barrie = new Suspect("Barrie Blue");

let _ = {};

_.each = function(list, callback) {
  if(Array.isArray(list)) {
    for(var i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for(var key in list) {
      callback(list[key], key, list);
    }
  }  
}

let suspectsList2 = [];
_.each(suspects, function(suspect) {
  suspectsList2.push(Suspect(suspect));
});
console.log('suspectsList2');

console.log(suspectsList2);

_.each(
  {
    item1: {
      prop1: "proppy prop", 
      prop2: "banana"
    },
    item2: {
      prop1: "proppy prop 2", 
      prop2: "banana 2"
    }
  }, function(thing) {
    console.log(thing);
});