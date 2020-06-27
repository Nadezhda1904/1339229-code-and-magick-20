'use strict';

(function () {
  // Для изменения цвета элементов
  var form = document.querySelector('.setup-wizard-form');
  var coatElement = form.querySelector('.setup-wizard .wizard-coat');
  var eyesElement = form.querySelector('.setup-wizard .wizard-eyes');
  var fireballElement = form.querySelector('.setup-fireball-wrap');

  // Для изменения цвета в значениях input
  var coatColor = form.querySelector('input[name="coat-color"]');
  var eyesColor = form.querySelector('input[name="eyes-color"]');
  var fireballColor = form.querySelector('input[name="fireball-color"]');


  // Изменение цвета по клику
  coatElement.addEventListener('click', function () {
    coatElement.style.fill = window.setup.arrayRandElement(window.setup.COAT_COLORS);
    coatColor.value = coatElement.style.fill;
  });

  eyesElement.addEventListener('click', function () {
    eyesElement.style.fill = window.setup.arrayRandElement(window.setup.EYES_COLORS);
    eyesColor.value = eyesElement.style.fill;

  });

  fireballElement.addEventListener('click', function () {
    var colorFireball = window.setup.arrayRandElement(window.setup.FIREBALL_COLORS);
    fireballElement.style.backgroundColor = colorFireball;
    fireballColor.value = colorFireball;
  });
})();
