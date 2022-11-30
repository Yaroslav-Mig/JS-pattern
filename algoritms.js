//! Sort
let countBubbleSort = 0;
let countSelectionSort = 0;

const array = Array(100)
  .fill(0)
  .map((v) => (v = Math.round(Math.random() * 1000)));

const Compare = {
  BIGGER_THAN: 1,
  LESS_THAN: -1,
  EQUAL: 0,
};
const swap = (arr, a, b) => {
  [arr[b], arr[a]] = [arr[a], arr[b]];
};
const getCompare = (a, b) => {
  if (a === b) return Compare.EQUAL;
  return a > b ? Compare.BIGGER_THAN : Compare.LESS_THAN;
};

//TODO: Bubble Sort
{
  const bubbleSort = (input, compare = getCompare) => {
    const len = input.length;
    for (let i = 0; i < len - 1; i++) {
      let isSorted = true;
      for (let j = 0; j < len - 1 - i; j++) {
        countBubbleSort++;
        if (compare(input[j], input[j + 1]) === Compare.BIGGER_THAN) {
          isSorted = false;
          swap(input, j, j + 1);
        }
      }
      if (isSorted) break;
    }
    return input;
  };
  console.log(bubbleSort([...array]));
  console.log(countBubbleSort);
}

//TODO: Selection Sort
{
	const selectSort = (input, compare = getCompare) => {
		const { length } = input;
    for (let i = 0; i < length - 1; i++) {
			let indexMin = i;
			for (let j = i + 1; j < length; j++) {
				countSelectionSort++;
				if (compare(input[indexMin], input[j]) === Compare.BIGGER_THAN) {
					indexMin = j;
				}
			}
			if (indexMin !== i) {
				swap(input, i, indexMin);
			}
    }
		return input;
	};
	console.log(selectSort([...array]));
  console.log(countSelectionSort);
}
