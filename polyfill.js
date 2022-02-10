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
      const element = fn(arr[i]);
      mappedArr.push(element);
    }
    return mappedArr;
  }
  const newArr = mapFn(array, doubleFn);
  console.log(newArr);
}
