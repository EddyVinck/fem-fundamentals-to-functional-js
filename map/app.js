const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = (item) => `broken ${item}`;

const brokenWeapons = weapons.map(makeBroken);

const _ = {};

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

_.map = function(list, callback) {
  let r;
  if (Array.isArray(list)) {
    r = [];
    _.each(list, (value, i, list) => r.push(callback(value, i, list)));
  } else {
    r = {};
    _.each(list, (keyValue, key) => r[key] = callback(keyValue, key, list));
  }
  return r;
}

const me = {
  name: 'Eddy',
  age: 22,
  profession: 'Front-end developer'
}
const meWhileYelling = _.map(me, (item) => typeof item === 'string' ? item.toUpperCase() : item);
// -> { name: "EDDY", age: 22, profession: "FRONT-END DEVELOPER" }