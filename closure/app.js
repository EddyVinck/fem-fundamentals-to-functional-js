const alarm = () => {
  const x = 'Help! I think I found a clue!';
  const alerter = () => {
    alert(x);
  }
  setTimeout(alerter,1000);
  console.log('Will this log go first or will the alert go first?');  
}
// alarm();

const myAlert = () => {
  const x = 'Help! I think I found a clue!';
  let count = 0;
  const alerter = () => {
    alert(`${x} ${++count}`);
  }

  return alerter;
}

const myFunc = myAlert();
const myFunc2 = myAlert();
// myFunc();
// myFunc();
// myFunc2(); // not the same counter

const _ = {};

_.curry = (func) => {
  return (arg1) => {
    return (arg2) => {
      return func(arg1, arg2);
    }
  }
}

var abc = function(a, b) {
  return [a, b];
};

var curried = _.curry(abc);

curried(1)(2);
// => [1, 2, 3]

curried(1, 2);
// => [1, 2, 3]

_.compose = (func1, func2) => {
  return (args) => {
    return func1(func2(args));
  }
}

const consider = (name) => { 
  return `I think it could be... ${name}`; 
};

const exclaim  = (statement) => { 
  return `${statement.toUpperCase()}!`; 
};

const blame = _.compose(consider, exclaim);

console.log(blame('you'));

