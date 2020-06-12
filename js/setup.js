'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_COUNT = 4;
var str = ' ';


/* var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');*/

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

function arrayRandElement(arr) {
  var i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

for (var j = 0; j <= WIZARD_COUNT; j++) {
  var wizards = [
    {
      name: arrayRandElement(FIRST_NAMES) + str + arrayRandElement(SECOND_NAMES),
      coatColor: arrayRandElement(COAT_COLORS),
      eyesColor: arrayRandElement(EYES_COLORS)
    }
  ];
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

// Открытие и закрытия попапа
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

// Валидация формы
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MIN_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// Изменение цвета мантии, глаз, файерболла персонажа

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
  coatElement.style.fill = COAT_COLORS[arrayRandElement(0, COAT_COLORS.length)];
  coatColor.value = coatElement.style.fill;
});

eyesElement.addEventListener('click', function () {
  eyesElement.style.fill = EYES_COLORS[arrayRandElement(0, EYES_COLORS.length)];
  eyesColor.value = eyesElement.style.fill;

});

fireballElement.addEventListener('click', function () {
  fireballElement.style.backgroundColor = FIREBALL_COLORS[arrayRandElement(0, FIREBALL_COLORS.length)];
  fireballColor.value = fireballElement.style.backgroundColor;
});
