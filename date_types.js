// ! Transform primitive objects to primitive
// TODO: way to check if it a variable a number
{
  function checkIsNumber(value) {
    if (value instanceof Number) {
      value = value.valueOf();
    }
    return !isNaN(value) && Number.isFinite(value);
  }
}
// TODO: use valueOf() and toString()
{
  const getPrimitive = (input) => {
    if (input instanceof Number) {
      return input.valueOf();
    } else if (input instanceof String) {
      return input.toString();
    } else if (input instanceof Boolean) {
      return input.valueOf();
    }
  };
}

//! Get sum of all digit the number
// TODO: Use toString().split() and reduce()
{
  function getSum(number) {
    return number
      .toString()
      .split('')
      .reduce((acc, val) => acc + Number(val), 0);
  }
}
// TODO: Use recursion, operator % and Math.trunc()
{
  function getSum(number) {
    return number < 10 ? number : (number % 10) + getSum(Math.trunc(number / 10));
  }
}
// TODO: Sum of numbers from 0 to N
{
  const sumFirstNumbers = (N) => (Boolean(N) ? N + sumFirstNumbers(N - 1) : N);
}

//! Get Typeof
{
  const isObject = (obj) => {
    return obj !== null && typeof obj === 'object';
  };

  const getTypeOf = (input) => {
    return Object.prototype.toString.call(input).slice(8, -1).toLowerCase();
  };
  console.log(getTypeOf('1'));
  console.log(getTypeOf(1));
  console.log(getTypeOf(null));
  console.log(getTypeOf(undefined));
  console.log(getTypeOf([]));
  console.log(getTypeOf({}));
  console.log(getTypeOf(() => {}));
}
