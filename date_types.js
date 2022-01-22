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