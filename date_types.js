// !
// TODO: way to check if it a variable a number
{
  function checkIsNumber(value) {
    if (value instanceof Number) {
      value = value.valueOf();
    }
    return !isNaN(value) && Number.isFinite(value);
  }
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


