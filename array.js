// ! деструктурирующее присваивание.
{
  let arr = ['Yar', 'Mig'];
  let [name, nick] = arr;
  //* Записывает firstName = arr[0], surname = arr[1]

  // * Отлично смотрится в сочетании со split или другими методами, возвращающими массив:
  let [firstName, surname] = 'Ilya Kantor'.split(' ');
}

// ! Деструктуризацию мы можем использовать, чтобы поменять значения у переменных:
{
  let ko = 'ko';
  let so = 'so';
  [ko, so] = [so, ko]; //* so ko
}
// ! Конвертируем итерируемые в массив при помощи Spread и Array from
{
  // TODO: Строка → Массив -> Строка
  const myString = 'hello';
  const array = [...myString]; // [ 'h', 'e', 'l', 'l', 'o' ]
  array.join(''); // 'hello'

  // TODO: Set → Массив → Set
  const mySet = new Set([1, 2, 3]);
  const array = [...mySet]; // [1, 2, 3]
  new Set(array); // Set { 1, 2, 3 }

  // TODO: Map → Массив → Map
  const mySet = new Set([1, 2, 3]);
  const array = [...mySet]; // [1, 2, 3]
  new Set(array); // Set { 1, 2, 3 }

  // TODO: NodeList → Массив
  const nodeList = document.querySelectorAll('div');
  const array = [...document.querySelectorAll('div')];
  // [ div, div, div]

  // TODO: Array.from vs Spread
  Array.from('hi'); // ['h', 'i']
  Array.from(new Set([1, 2, 3])); // [1,2,3]
  Array.from(new Map([[1, 'one']])); // [[1, 'one']]
  Array.from(document.querySelectorAll('div')); // [ div, div, div]
}

// ! Клонирование массивов
{
  // TODO: Клонируем с помощью Array.prototype.slice
  const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  const rainbowClone1 = rainbow.slice();
  console.log(rainbow === rainbowClone1); // false

  // TODO: Клонируем с помощью Array.prototype.concat
  const rainbowClone2 = rainbow.concat();
  console.log(rainbow === rainbowClone2); // false

  // TODO: Клонируем с деструктуризацией, spread и rest операторами
  const [...rainbowClone] = rainbow; // rest
  const rainbowClone2 = [...rainbow]; // spread
  console.log(rainbow === rainbowClone); // false
  console.log(rainbow === rainbowClone2); // false
}

// ! Array.prototype.flat()
{
  const arr = [1, 2, [3, 4, [5, 6]]];

  // TODO: reduce and concat only for 1 nested level
  const arr2 = [1, 2, [3, 4]];
  const flattenedArr = arr2.flat(); // To flat single level array
  const flattenedArr2 = arr2.reduce((acc, value) => acc.concat(value), []); // is equivalent to flat single level array
  const flattenedArr3 = [].concat(...arr2);

  // TODO: Flattening nested arrays with Infinity
  const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
  arr4.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // TODO: removes empty slots in arrays:
  const arr5 = [1, 2, , 4, 5];
  arr5.flat(); // [1, 2, 4, 5]

  //TODO: Use a stack
  function Flattened(input) {
    const stack = [...input];
    const flatArr = [];
    while (stack.length) {
      const next = stack.pop();
      Array.isArray(next) ? stack.push(...next) : flatArr.push(next);
    }
    return flatArr.reverse();
  }

  //TODO: reduce + concat + isArray + recursivity
  function Flatten(arr) {
    return arr.reduce((acc, item) => {
      return acc.concat(Array.isArray(item) ? Flatten(item) : item);
    }, []);
  }

  //TODO: reduce + concat + isArray + recursivity + Infinity
  function FlatDeep(arr, depth = Infinity) {
    depth > 0
      ? arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? FlatDeep(item, depth - 1) : item), [])
      : arr.slice();
  }
}

// ! Sequence generator function Array.prototype.from() -
//! The Array.from() method returns an Array object from any object with a length property or an iterable object

const range = (start, stop, step) => {
  return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
};
range(0, 4, 1); // [0, 1, 2, 3, 4]
range(1, 10, 2); // [1, 3, 5, 7, 9]
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((x) => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

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
  console.log(myFish);
  console.log(popped);
}

//! Merging two arrays
// TODO: This example uses spread syntax to push all elements from a second array into the first one.
{
  let vegetables = ['parsnip', 'potato'];
  let moreVegs = ['celery', 'beetroot'];
  vegetables.push(...moreVegs);
  console.log(vegetables);
}

// ! Remove duplicate items in an array
// TODO: Array.from()
{
  let arrayWithNoDuplicates = Array.from(new Set(myArray));
}
// TODO: Reduce()
{
  let array = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
  const noDuplicates = array.reduce((acc, val) => {
    if (!acc.includes(val)) {
      acc.push(val);
    }
    return acc;
  }, []);
}

// ! PFind a prime number in an array
//TODO: filter() and loop for()
{
  const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  function isPrime(value) {
    for (let i = 2; i < value; i++) {
      return value % i === 0 ? false : value;
    }
    return value > 1;
  }
  console.log(array.filter(isPrime));
}
//TODO: method filter() and loop for() with square root
{
  const array = [-3, 17, 100, 0, 20, 2, 3, 87, 5, 6, 7, 42, 9, 67, 11, 75, 13];
  function isPrime(value) {
    if (value % 2 === 0 || value % 5 === 0) return false;
    const sqrtVal = Math.sqrt(value);
    for (let divisor = 2; divisor <= sqrtVal; divisor++) {
      if (value % divisor === 0) return false;
    }
    return value > 1;
  }
}
