// ! Destructuring assignment
{
  let arr = ['Yar', 'Mig'];
  let [name, nick] = arr;
  //* Записывает firstName = arr[0], surname = arr[1]

  // * Отлично смотрится в сочетании со split или другими методами, возвращающими массив:
  let [firstName, surname] = 'Ilya Kantor'.split(' ');
}

// ! Destructuring assignment for change variables
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
  const array2 = [...mySet]; // [1, 2, 3]
  new Set(array2); // Set { 1, 2, 3 }

  // TODO: Map → Массив → Map
  const mySet3 = new Set([1, 2, 3]);
  const array3 = [...mySet3]; // [1, 2, 3]
  new Set(array3); // Set { 1, 2, 3 }

  // TODO: NodeList → Массив
  const nodeList = document.querySelectorAll('div');
  const array4 = [...document.querySelectorAll('div')];
  // [ div, div, div]

  // TODO: Array.from vs Spread
  Array.from('hi'); // ['h', 'i']
  Array.from(new Set([1, 2, 3])); // [1,2,3]
  Array.from(new Map([[1, 'one']])); // [[1, 'one']]
  Array.from(document.querySelectorAll('div')); // [ div, div, div]
}

// ! Clone array
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
  const rainbowClone3 = [...rainbow]; // spread
  console.log(rainbow === rainbowClone); // false
  console.log(rainbow === rainbowClone3); // false
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

//! Merging two arrays
// TODO: This example uses spread syntax to push all elements from a second array into the first one.
{
  let vegetables = ['parsnip', 'potato'];
  let moreVegs = ['celery', 'beetroot'];
  vegetables.push(...moreVegs);
  console.log(vegetables);
}

// ! Remove duplicate items in an array
{
  let array = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
  // TODO: Array.from()
  {
    const noDuplicates = Array.from(new Set(array));
    console.log(noDuplicates);
  }

  // TODO: Spread operator
  {
    const noDuplicates = [...new Set(array)];
    console.log(noDuplicates);
  }

  // TODO: Reduce()
  {
    const noDuplicates = array.reduce((acc, val) => {
      if (!acc.includes(val)) {
        acc.push(val);
      }
      return acc;
    }, []);
    console.log(noDuplicates);
  }

  // TODO: Filter()
  {
    const noDuplicates = array.filter((val, ind) => (ind === array.indexOf(val) ? true : false));
    console.log(noDuplicates);
  }
}

// ! Find a prime number in an array
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
    if (value > 5 && (value % 2 === 0 || value % 5 === 0)) return false;
    const sqrtVal = Math.sqrt(value);
    for (let divisor = 2; divisor <= sqrtVal; divisor++) {
      if (value % divisor === 0) return false;
    }
    return value > 1;
  }
}

//TODO: Double loop for() with push() and flag
{
  function isPrimeLoop(limitVal) {
    const primeArr = [];

    for (let number = 2; number <= limitVal; number++) {
      let flag = true;

      for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor) {
          continue;
        } else {
          flag = false;
          break;
        }
      }

      if (flag) {
        primeArr.push(number);
      }
    }
    return primeArr;
  }
}

//! Max and min in the array
{
  const arr = [-15, 0, 2, 4, 8, 6, 100];
  const arr2 = [-7, 0, 2, 64, 8, 6, 20];

  //TODO: method reduce()
  const max = arr.reduce((prevVal, curVal) => Math.max(prevVal, curVal), -Infinity);
  const min = arr.reduce((prevVal, curVal) => Math.min(prevVal, curVal), Infinity);
  console.log(max);
  console.log(min);

  //TODO: function apply()
  const max1 = (arr) => Math.max.apply(null, arr);
  console.log(max1(arr));

  //TODO: spread operator
  const min1 = Math.min(...arr);
  console.log(min1);

  //TODO: loop while()
  function arrMax(arr) {
    let max = -Infinity;
    let len = arr.length;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }
  function arrMin(arr) {
    let min = Infinity;
    let len = arr.length;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }
  console.log(arrMax(arr));
  console.log(arrMin(arr));
}
//! Using fill() to create a matrix of all 1
{
  const array = new Array(3);
  for (let i = 0; i < array.length; i++) {
    array[i] = Array(4)
      .fill(1)
      .map((el, i) => (el = i));
  }
}
