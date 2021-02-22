// ! Цепь вызова - точечная нотация
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

// ! Клонирование объектов
{
  // TODO: Клонируем с помощью  Object.assign()
  const obj = { a: 1 };
  const copy = Object.assign({}, obj);
  console.log(copy); // { a: 1 }

  // TODO: Глубокое клонирование
  let obj1 = { a: 0, b: { c: 0 } };
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
}
