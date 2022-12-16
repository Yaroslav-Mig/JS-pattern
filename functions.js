//! Closure and encapsulate data, access to object owing to API
{
  const calculator = (function () {
    const data = {
      number: 0,
    };

    return {
      sum: (val) => (data.number += val),
      subtract: (val) => (data.number -= val),
      display: () => console.log(`Result: ${data.number}`),
    };
  })();

  calculator.sum(10);
  calculator.subtract(2);
  calculator.display();
}
