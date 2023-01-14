//! Closure and encapsulate data, access to object owing to API
{
  const calculator = (function () {
    const data = {
      number: 0,
    };

    return {
      sum: (val) => (data.number += val),
      subtract: (val) => (data.number -= val),
      display: () => console.log(`Result: ${data.number}`),
    };
  })();

  calculator.sum(10);
  calculator.subtract(2);
  calculator.display();
}
//! curring()
{
  const sum = (a, b, c) => a + b + c;

  function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      }
      return function (...newArgs) {
        return curried.apply(this, args.concat(newArgs));
      };
      //* return curried.bind(this, ...args);
    };
  }

  const curriedSum = curry(sum);
  console.log(curriedSum(2, 2, 3));
  console.log(curriedSum(2, 2)(3));
  console.log(curriedSum(2)(2)(3));
  console.log(curriedSum(2)(2, 3));
  console.log(curriedSum()(2)()()(2)(3));
  console.log(curriedSum(1)(1)(1, 5));
}
//TODO: simple solution
{
  const sum = (a) => (b) => b ? sum(a + b) : a;
  console.log(sum(1)(2)(3)(10)());
  console.log(sum(11)(11)());
  console.log(sum(1)(1)());

  function add(x) {
    return function (y) {
      if (typeof y !== 'undefined') {
        x = x + y;
        return arguments.callee;
      } else {
        return x;
      }
    };
  }
  console.log(add(1)(2)(3)(10)());
  console.log(add(10)(10)());
  console.log(add(1)(1)(2)());
  console.log('------------');
}
//TODO: invoke function with several arguments
{
  const getSum = (arr) => arr.reduce((acc, val) => acc + val, 0);

  function sum(...args) {
    const sumArgs = args.length > 1 ? getSum(args) : args[0];

    return function (...newArgs) {
      const { length } = newArgs;
      if (length) {
        return sum(sumArgs + (length > 1 ? getSum(newArgs) : newArgs[0]));
      }
      return sumArgs;
    };
  }
  console.log(sum(1, 1)(2)(3)(4, 5)(6)(8)()); // 30
  console.log('------------');

  function add(...args) {
    if (!args.length) {
      return 0;
    }
    return function (...newArgs) {
      if (!newArgs.length) {
        return getSum(args);
      }
      return add(...args, ...newArgs);
    };
  }
  console.log(add());
  console.log(add(2)(2)());
  console.log(add(1)(1, 1)());
  console.log(add(2, 3)(1)(1)(1, 2, 3)());
  console.log(add(1, 1)(2)(3)(4, 5)(6)(8)());
}
//TODO: curring and composition of function is point-free or tacit programming style
{
  const str = 'Hello'
    .replace(/Hello/g, 'Bye')
    .concat('!')
    .repeat(2)
    .split('!')
    .filter((x) => x !== '!')
    .map((x) => 'Hello')
    .toString();

  console.log(str);

  const compose = (...functions) => {
    return (input) => functions.reduce((acc, fn) => fn(acc), input);
  };

  const replace = (regex, replacement) => (str) => str.replace(regex, replacement);
  const concat = (item) => (str) => str.concat(item);
  const repeat = (number) => (str) => str.repeat(number);
  const split = (item) => (str) => str.split(item);
  const filter = (fn) => (arr) => arr.filter(fn);
  const map = (fn) => (arr) => arr.map(fn);
  const toString = (arr) => arr.toString();

  const str2 = compose(
    replace(/Hello/g, 'Bye'),
    concat('!'),
    repeat(2),
    split('!'),
    filter((x) => x != '!'),
    map((x) => 'Hello'),
    toString
  )('Hello');
  console.log(str2);

  console.log(map((x) => 'w')(['Hello', 'Hello world', 'Hi']));
}

// ! This examples shows how to use various methods on different type of data owing to prototype (borrow method)
{
  //TODO: how to use map on a String
  let map = Array.prototype.map;
  const string = 'Hello World';
  const arrString = map.call(string, (x) => x.charCodeAt(0));

  // TODO: how to iterate through a collection of objects collected by querySelectorAll
  let elements = document.querySelectorAll('select option:checked');
  let values = Array.prototype.map.call(elements, (obj) => obj.value);

  // TODO: Using apply() or call() on array-like objects with pop()
  let myFish = { 0: 'angel', 1: 'clown', 2: 'mandarin', 3: 'sturgeon', length: 4 };
  const propped = Array.prototype.pop.call(myFish);
  console.log(propped);
}
