// ! Method Number.isNaN() and isNan()
// TODO: The following works because NaN is the only value in JavaScript which is not equal to itself.
{
	Number.isNaN = Number.isNaN || function isNaN(input) {
		return typeof input === 'number' && input !== input;
	}

	function isNaN(input) {
    const n = Number(value);
    return n !== n;
  }
}
