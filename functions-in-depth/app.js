const _ = {};

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
  return this;
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

const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
    ]
  },
  {
    name: 'Mrs. White',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
    ]
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
    ]
  },
  {
    name: 'Rusty',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
    ]
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
    ]
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false }
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
    _.each(list, (item, key) => {
      if (callback(item, key, list) == true) {
        r[key] = item;
      }
    });
  }
  return r;
}

const wasPresent =  _.filter(videoData, (person) => {
	return person.present;
});

const me = {
  name: 'Eddy',
  age: 22,
  profession: 'Front-end developer'
}
const meFiltered = _.filter(me, (item) => typeof item === 'string' ? true : false);
// -> { name: "Eddy", profession: "Front-end developer" }

console.log(videoData.filter((item) => item.present).map((item) => item.name));

const createTuple = (a,b,c,...d) => [[a,c],[b,d]];

const mystery = createTuple('it', 'be', 'could', 'anyone', 'no one');

console.log(mystery);

function addES5(a, b) {
  b = b || 2;
  console.log(a + b);
}

addES5(3);

// array-like objects
_.from = function(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
}

function test(a, b, c, d) {
  console.log(_.from(arguments));
}
test(1,2,3,4);