//! Sort
let countBubbleSort = 0;
let countSelectionSort = 0;
let countQuickSort = 0;
let countBinary = 0;
let countBinaryRecursive = 0;

const arrSorted = [-3, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

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

//TODO: Quick Sort with recursive function
{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const quickSort = (arr, compare = getCompare) => {
    const { length } = arr;
    if (length <= 1) {
      return arr;
    }

    const lessArr = [];
    const biggerArr = [];
    const pivot = arr[0];

    for (let i = 1; i < length; i++) {
      countQuickSort++;
      if (compare(arr[i], pivot) === Compare.LESS_THAN) {
        lessArr.push(arr[i]);
      } else {
        biggerArr.push(arr[i]);
      }
    }
    return quickSort(lessArr).concat(pivot, quickSort(biggerArr));
  };
  console.log(quickSort([...array]));
  console.log(countQuickSort);
}

//! Binary search
//TODO: Binary search
{
  const search = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let middle;

    while (start <= end) {
      countBinary++;
      middle = Math.floor((start + end) / 2);

      if (target === arr[middle]) {
        return middle;
      } else if (target < arr[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    return -1;
  };

  console.log(search(arrSorted, 14));
  console.log(countBinary);
}
//TODO: Binary search with recursive function
{
  const searchRecursive = (arr, target, start = 0, end = arr.length - 1) => {
    countBinaryRecursive++;
    let middle = Math.floor((start + end) / 2);

    if (target === arr[middle]) {
      return middle;
    } else if (target < arr[middle]) {
      return searchRecursive(arr, target, start, middle - 1);
    } else if (target > arr[middle]) {
      return searchRecursive(arr, target, middle + 1, end);
    } else {
      return -1;
    }
  };

  console.log(searchRecursive(arrSorted, 14));
  console.log(countBinaryRecursive);
}
