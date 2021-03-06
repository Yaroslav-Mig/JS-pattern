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
  const [...rainbowClone] = rainbow;
  const rainbowClone2 = [...rainbow];
  console.log(rainbow === rainbowClone); // false
  console.log(rainbow === rainbowClone2); // false
}

// ! Удаление пустых значений, дырок в массиве c помощью flat
{
  const arr5 = [1, 2, , 4, 5];
  arr5.flat(); // [1, 2, 4, 5]
}

// ! Вложеннсть массивов Array.prototype.flat()
{
  // TODO: метод reduce и concat только для 1 уровня вложенности
  const arr = [1, 2, [3, 4]];
  let flattenedArr = arr.flat(); // To flat single level array
  flattenedArr = arr.reduce((acc, value) => acc.concat(value), []); // is equivalent to flat single level array

  // TODO: Flattening nested arrays
  const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
  arr4.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
