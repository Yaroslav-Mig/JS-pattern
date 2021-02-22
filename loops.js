// ! доступ к текущему индексу массива в цикле for/of. По умолчанию данный цикл дает доступ к значению элемента - values
{
  const arr = ['a', 'b', 'c'];
  for (const [index, values] of arr.entries()) {
    console.log(index, values); // Prints "0 a", "1 b", "2 c"
  }

  let user = {
    name: 'John',
    age: 30,
  };
  for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John, затем age:30
  }
}
