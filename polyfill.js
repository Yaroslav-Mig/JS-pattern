// ! Method Number.isNaN() and isNan()
// TODO: The following works because NaN is the only value in JavaScript which is not equal to itself.
{
  Number.isNaN =
    Number.isNaN ||
    function isNaN(input) {
      return typeof input === 'number' && input !== input;
    };

  function isNaN(input) {
    const n = Number(value);
    return n !== n;
  }
}
// ! nullish coalescing operator (??)
{
  let a, b;
  let result = a !== undefined && a !== null ? a : b;
}

// ! method indexOf()
{
  const array = [1, 2, 3];
  function indexOf(arr, item, fromIndex) {
    fromIndex === undefined ? (fromIndex = 0) : fromIndex;
    for (let i = fromIndex; fromIndex < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  }
  console.log(indexOf(array, 12));
}

// ! method map()
{
  const array = [1, 2, 3];
  const doubleFn = (item) => item * 2;

	function mapFn(arr, fn) {
		const mappedArr = [];

    for (let i = 0; i < arr.length; i++) {
      mappedArr[i] = fn(arr[i]);
    }
    return mappedArr;
  }
  const newArr = mapFn(array, doubleFn);
  console.log(newArr);
}

//! method  slice()
{
  const sliceFn = (arr, start = 0, end = arr.length) => {
    const endInd = arr.length;
    let newArr = [];

    if (start > arr.length) {
      return newArr;
    }
    if (end > endInd) {
      end = endInd;
    }
    if (start < 0) {
      start = start + endInd;
    }
    if (end < 0) {
      end = end + endInd;
    }

    for (let i = start; i < end; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  };
}
