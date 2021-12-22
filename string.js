// ! преобразование строки в массив
{
  const myString = 'hello';
  const array = [...myString];
  console.log(array); // [ 'h', 'e', 'l', 'l', 'o' ]
}

// ! Method join() and split()
// TODO: Copy string
{
  const str = 'The quick brown fox jumps over the lazy dog.';
  strCopy = str.split().join();
  console.log(strCopy);
}
// TODO: replacement substring int original string
{
  let str = 'Learn JAVASCRIPT, forget JAVA!';
  let newStr = str.split('JAVA').join('Java').split('SCRIPT').join('Script');
}

// ! Reverse string
//TODO: Method split(), reverse() and split()
{
  const str = 'Hello';
  const reverseStr = str.split('').reverse().join('');
  console.log(reverseStr);
}
//TODO: Loop For()
{
  const str = 'Goodbye';
  const reverseStr = (str) => {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  };
  console.log(reverseStr(str));
}
//TODO: TODO: Reverse a string with a recursion and ternary operator
{
  const str = 'JavaScript';
  const reverseStr = (str) => (!str ? '' : reverseStr(str.slice(1)) + str.charAt(0));
  console.log(reverseStr(str));
}
