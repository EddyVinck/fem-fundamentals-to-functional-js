// translate to ES6

const incr = n => n+1;
const square = n => n*n;
const doMath = (n, fn) => fn(n);

console.log(doMath(5, square));
console.log(doMath(4, incr));

// Callbacks with parameters
const ifElse = (condition, isTrue, isFalse, p) => {
  return condition ? isTrue(p) : isFalse(p);
}

ifElse(
  1 === 1,
  p => { console.log(`Hi ${p}`)},
  p => { console.log(`Bye ${p}`)},
  'Eddy'
);

ifElse(
  1 === '1',
  p => { console.log(`Hi ${p}`)},
  p => { console.log(`Bye ${p}`)},
  'Eddy' // shocking results
);

// Reduce exercise

const _ = {};

/*  function: _.reduce
  * @params(collection): object, array or array-like.
  * @params(callback): a function that should accept at least two parameters.
  * The first parameter is an accumulator, the second is the value of each iteration. 
  * The iterator or key is an optional third argument.
  * @params(accumulator): the starting value of the accumulator that the callback will operate on.
  * It accepts objects, arrays and array-like variables. Strings also work.
*/
_.reduce = (collection, callback, accumulator) => {
  if(Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      let value = collection[i];
      accumulator = callback(accumulator, value, i, collection);
    }
  } else if (typeof collection === 'object') {
    for (const key in collection) {
      let value = collection[key];
      accumulator = callback(accumulator, value, key, collection);
    }
  } else {
    // hanlde things that can be converted to an array
    try {
      accumulator = _.reduce([...collection], callback, accumulator);
      return accumulator;
    } catch(e) {
      throw 'not iterable';
    }
  }
  return accumulator;
};

let reducedSum = _.reduce([1,2], (sum, n) => {
  return sum + n;
}, 0);
// -> 3
console.log(reducedSum);

let reducedObject = _.reduce({'a': 1, 'b': 2, 'c': 1}, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
// -> { '1': ['a', 'c'], '2': ['b'] }

console.log(reducedObject);

let reducedString = _.reduce("banana", (string, letter) => {
  return string + letter;
}, "");
console.log('reducedString:');
console.log(reducedString);


// eachRight exercise

_.eachRight = (collection, callback) => {
  if(Array.isArray(collection)) {
    for (let i = collection.length - 1; i >= 0; i--) {
      const item = collection[i];
      callback(item, i, collection);
    }
  } else {
    for (const key in collection) {      
      const item = collection[key];  
      callback(item, key, collection);    
    }
  }
}

_.eachRight(
  [0,1,2,3,4,5], function(thing) {
    console.log(thing);
});

const newDevelopment = [
  {
      name: 'Miss Scarlet',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: true},
          {'dining room': true},
          {'billiard room': false},
          {library: true}
      ]
  },
  {
      name: 'Reverend Green',
      present: true,
      rooms: [
          {kitchen: true},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': true},
          {library: false}
      ]
  },
  {
      name: 'Colonel Mustard',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: true},
          {'dining room': false},
          {'billiard room': true},
          {library: false}
      ]
  },
  {
      name: 'Professor Plum',
      present: true,
      rooms: [
          {kitchen: true},
          {ballroom: false},
          {conservatory: false},
          {'dining room': true},
          {'billiard room': false},
          {library: false}
      ]
  }
];


_.filter = function(list, callback) {
  var r;
  if (Array.isArray(list)) {
    r = [];
    _.each(list, (item, i, list) => {
      if (callback(item, i, list) == true) {
        r.push(item);
      }
    });
  } else {
    r = {};
    _.each(list, (item, key, list) => {
      if (callback(item, key, list) == true) {
        r[key] = item;
      }
    });
  }
  return r;
}

_.each = function(list, callback) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (var key in list) {
      callback(list[key], key, list);
    }
  }
}

_.map = function(list, callback) {
  let r;
  if (Array.isArray(list)) {
    r = [];
    _.each(list, (v, i, list) => 
      r.push(callback(v, i, list))
    );
  } else {
    r = {};
    _.each(list, (v, key) => 
      r[key] = callback(v, key, list)
    );
  }
  return r;
}


// var unusedRooms = _.reduce(newDevelopment, (rooms, suspect) => {
  
//   return _.filter(suspect.rooms, (room, key, list) => {
//     debugger;
//     let wasInRoom = room[key];
//     return wasInRoom == false;
//   });
// }, []);

// console.table(unusedRooms); // -> Nobody was in the ballroom

let unusedRoomsForEachSuspect = _.reduce(newDevelopment, (unusedRooms, suspect) => {
  // console.log(suspect);
  let unused = _.filter(suspect.rooms, (item, i, list) => {
    let key = Object.keys(item)[0];
    return item[key] == false;
  });
  unusedRooms.push(unused);
  return unusedRooms;
}, []);

const notInRoom = suspect => {
  const emptyRooms = _.reduce(suspect.rooms, (memo, roomObj) => {
    let roomName = Object.keys(roomObj)[0];
    if (roomObj[roomName] === false) memo.push(roomName);
    return memo;
  }, []);
  return emptyRooms;
}

unusedRoomsForEachSuspect = _.map(newDevelopment, notInRoom);

console.log(unusedRoomsForEachSuspect);

let result = [
  ['kitchen','ballroom','billiard room'],
  ['ballroom','conservatory','dining room','library'],
  ['kitchen','ballroom','dining room','library'],
  ['ballroom','conservatory','billiard room','library']
];

console.log(result === unusedRoomsForEachSuspect);








































