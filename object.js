// ! Chain invoke with dot notation
{
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function () {
      console.log(this.step);
      return this;
    },
  };
  ladder.up().up().down().up().up().down().showStep();
}

// ! Clone objects
{
  const user = {
    name: 'Yar',
    age: 35,
    birthDate: new Date(1987, 7, 19, 12, 0, 0),
    address: {
      city: 'Minsk',
    },
    laptop: {
      brand: 'Asus',
      title: 'VivoBook',
      date: new Date(2017, 6, 15),
    },
    books: ['html', 'css', 'js'],
    jobs: [
      { id: 1, title: 'Epam' },
      { id: 2, title: 'Yandex' },
    ],
  };
  const companies = {
    yar: [
      { id: 1, title: 'DeA' },
      { id: 2, title: 'Yandex' },
      { id: 3, title: 'Google' },
    ],
    art: [
      { id: 1, title: 'Porta one' },
      { id: 2, title: 'EPAM' },
      { id: 3, title: 'Google' },
    ],
  };
  // TODO: Object.assign()
  const obj = { a: 1 };
  const copy = Object.assign({}, obj);
  console.log(copy); // { a: 1 }

  //TODO: descriptors
  const clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

  //TODO: for...in
  for (let key in user) {
    clone[key] = user[key];
  }

  // TODO: JSON - deep clone
  let obj1 = { a: 0, b: { c: 0 } };
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3));
  // { "a": 0, "b": { "c": 0}}

  // TODO: deep clone objects or array
  const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

  const deepClone = (input) => {
    if (!isObject(input)) {
      return input;
    }
    if (input instanceof Date) {
      const copyDate = new Date();
      copyDate.setTime(input.getTime());
      return copyDate;
    }

    const initialInput = Array.isArray(input) ? [] : {};

    return Object.keys(input).reduce((acc, key) => {
      const value = input[key];
      acc[key] = isObject(value) ? deepClone(value) : value;
      return acc;
    }, initialInput);
  };

  const newObj = deepClone(obj1);
  console.log(newObj === obj1);
  obj1.b.d = 1;
  console.log(newObj, obj1);
  console.log('---------');

  const newArr = deepClone(arr4);
  console.log(newArr === arr4);
  console.log(newArr, arr4);
  console.log('---------');

  const newUser = deepClone(user);
  console.log(newUser === user);
  console.log(newUser, user);
  console.log('---------');

  const newCompanies = deepClone(companies);
  console.log(newCompanies === companies);
  console.log(newCompanies, companies);
}
// ! Delete field in a obj with Destructuring assignment and rest
{
  const person = {
    name: 'Marcus',
    city: 'Rome',
    born: 12,
  };

  function deleteField(source, obj) {
    const { [source]: forget, ...other } = obj;
    return other;
  }
  console.log(deleteField('name', person));
}

//! Compare Objects
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

const getTypeOf = (input) => {
  return Object.prototype.toString.call(input).slice(8, -1).toLowerCase();
};

const getPrimitive = (input) => {
  if (input instanceof Number) {
    return input.valueOf();
  } else if (input instanceof String) {
    return input.toString();
  } else if (input instanceof Boolean) {
    return input.valueOf();
  }
};

// TODO: Shallow equality
{
  const hero1 = {
    name: 'Batman',
    realName: 'Bruce Wayne',
  };
  const hero2 = {
    name: 'Batman',
    realName: 'Bruce Wayne',
  };
  const hero3 = {
    name: 'Joker',
  };

  const shallowEqualObj = (obj_1, obj_2) => {
    const keys_1 = Object.keys(obj_1);
    const keys_2 = Object.keys(obj_2);

    if (keys_1.length !== keys_2.length) return false;

    for (const key of keys_1) {
      if (obj_1[key] !== obj_2[key]) return false;
    }
    return true;
  };
  shallowEqualObj(hero1, hero2);
  shallowEqualObj(hero1, hero3);

  const shallowCompare = (obj_1, obj_2) => {
    const primitive = ['string', 'number', 'boolean'];
    const typeObj_1 = getTypeOf(obj_1);
    const typeObj_2 = getTypeOf(obj_2);

    if (primitive.includes(typeObj_1) && typeof obj_1 === 'object') {
      obj_1 = getPrimitive(obj_1);
    }
    if (primitive.includes(typeObj_2) && typeof obj_2 === 'object') {
      obj_2 = getPrimitive(obj_2);
    }

    if (typeObj_1 !== typeObj_2) {
      return false;
    }

    if (typeObj_1 === 'array') {
      if (obj_1.length !== obj_2.length) {
        return false;
      }
      return obj_1.every((el, ind) => el === obj_2[ind]);
    }
    if (typeObj_1 === 'object') {
      const keys_1 = Object.keys(obj_1);
      const keys_2 = Object.keys(obj_2);

      if (keys_1.length !== keys_2.length) {
        return false;
      }
      return keys_1.every((key) => obj_1[key] === obj_2[key]);
    }
    if (typeObj_1 === 'date') {
      return obj_1.getTime() === obj_2.getTime();
    }

    return obj_1 === obj_2;
  };
}
// TODO: Deep equality
{
  const hero1 = {
    name: 'Batman',
    address: {
      city: 'Gotham',
    },
    skills: [1, 2, 3],
    superPower: true,
  };
  const hero2 = {
    name: 'Batman',
    address: {
      city: 'Gotham',
    },
    skills: [1, 2, 3],
    superPower: true,
  };
  const deepEqualObj = (obj_1, obj_2) => {
    const keys_1 = Object.keys(obj_1);
    const keys_2 = Object.keys(obj_2);

    if (keys_1.length !== keys_2.length) return false;

    for (const key of keys_1) {
      const val_1 = obj_1[key];
      const val_2 = obj_2[key];
      const areObjects = isObject(val_1) && isObject(val_2);
      if ((areObjects && !deepEqualObj(val_1, val_2)) || (!areObjects && val_1 !== val_2)) {
        return false;
      }
    }
    return true;
  };
  // console.log(deepEqualObj({ name1: 'abc' }, { name2: 'abc' }));
  // console.log(deepEqualObj(hero1, hero2));
  // console.log(deepEqualObj([1, 2], [1, 2]));
  // console.log(deepEqualObj(1, 2));
  const deepCompare = (obj_1, obj_2) => {
    const primitive = ['string', 'number', 'boolean'];
    const typeObj_1 = getTypeOf(obj_1);
    const typeObj_2 = getTypeOf(obj_2);

    if (primitive.includes(typeObj_1) && typeof obj_1 === 'object') {
      obj_1 = getPrimitive(obj_1);
    }
    if (primitive.includes(typeObj_2) && typeof obj_2 === 'object') {
      obj_2 = getPrimitive(obj_2);
    }

    if (typeObj_1 !== typeObj_2) {
      return false;
    }

    if (typeObj_1 === 'array') {
      if (obj_1.length !== obj_2.length) {
        return false;
      }
      return obj_1.every((el, ind) => deepCompare(el, obj_2[ind]));
    }
    if (typeObj_1 === 'object') {
      const keys_1 = Object.keys(obj_1);
      const keys_2 = Object.keys(obj_2);

      if (keys_1.length !== keys_2.length) {
        return false;
      }
      return keys_1.every((key) => deepCompare(obj_1[key], obj_2[key]));
    }
    if (typeObj_1 === 'date') {
      return obj_1.getTime() === obj_2.getTime();
    }

    return obj_1 === obj_2;
  };
  console.log(deepCompare({ name1: 'abc' }, { name2: 'abc' }));
  console.log(deepCompare({ name1: 'abc' }, { name1: 'abc' }));
  console.log(deepCompare(hero1, hero2));
  console.log(deepCompare([1, 2], [1, 2]));
  console.log(deepCompare([1, 2], [1, 2, 3]));
  console.log(deepCompare(true, false));
  console.log(deepCompare(1, 1));
  console.log(deepCompare(null, null));
  console.log(deepCompare(undefined, undefined));
  console.log(deepCompare(2, new Number(2)));
  console.log(deepCompare(true, new Boolean(true)));
  console.log(deepCompare('abc', new String('abc')));
  console.log(deepCompare('abc', new String('abcd')));
  console.log(deepCompare(new Date(), new Date()));
  console.log(deepCompare(hero1, hero2));
}
