'use strict';

(function () {

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // Для изменения цвета элементов
  var form = document.querySelector('.setup-wizard-form');
  var coatElement = form.querySelector('.setup-wizard .wizard-coat');
  var eyesElement = form.querySelector('.setup-wizard .wizard-eyes');
  var fireballElement = form.querySelector('.setup-fireball-wrap');

  // Для изменения цвета в значениях input
  var coatInput = form.querySelector('input[name="coat-color"]');
  var eyesInput = form.querySelector('input[name="eyes-color"]');
  var fireballInput = form.querySelector('input[name="fireball-color"]');


  // Изменение цвета по клику
  coatElement.addEventListener('click', function () {
    var newCoatColor = window.render.arrayRandElement(COAT_COLORS);
    coatElement.style.fill = newCoatColor;
    coatInput.value = newCoatColor;
    window.setup.onCoatChange(newCoatColor);
  });

  eyesElement.addEventListener('click', function () {
    var newEyesColor = window.render.arrayRandElement(EYES_COLORS);
    eyesElement.style.fill = newEyesColor;
    eyesInput.value = newEyesColor;
    window.setup.onEyesChange(newEyesColor);

  });

  fireballElement.addEventListener('click', function () {
    var colorFireball = window.render.arrayRandElement(FIREBALL_COLORS);
    fireballElement.style.backgroundColor = colorFireball;
    fireballInput.value = colorFireball;
  });

})();
