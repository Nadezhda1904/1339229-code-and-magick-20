'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var str = ' ';


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

function arrayRandElement(arr) {
  var i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

var wizards = [
  {
    name: arrayRandElement(FIRST_NAMES) + str + arrayRandElement(SECOND_NAMES),
    coatColor: arrayRandElement(COAT_COLORS),
    eyesColor: arrayRandElement(EYES_COLORS)
  },
  {
    name: arrayRandElement(FIRST_NAMES) + str + arrayRandElement(SECOND_NAMES),
    coatColor: arrayRandElement(COAT_COLORS),
    eyesColor: arrayRandElement(EYES_COLORS)
  },
  {
    name: arrayRandElement(FIRST_NAMES) + str + arrayRandElement(SECOND_NAMES),
    coatColor: arrayRandElement(COAT_COLORS),
    eyesColor: arrayRandElement(EYES_COLORS)
  },
  {
    name: arrayRandElement(FIRST_NAMES) + str + arrayRandElement(SECOND_NAMES),
    coatColor: arrayRandElement(COAT_COLORS),
    eyesColor: arrayRandElement(EYES_COLORS)
  }
];

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
