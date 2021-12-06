let calculator = {
  num1: null,
  num2: null,
  read: function (x, y) {
    this.num1 = x;
    this.num2 = y;
  },
  sum: function () {
    let result = this.num1 + this.num2;
    return result;
  },

  mul: function () {
    let result = this.num1 * this.num2;
    return result;
  },

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
