'use strict';

(function () {


  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render.renderWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });
  var onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  var form = window.render.userDialog.querySelector('.setup-wizard-form');
  var submitHandler = function (evt) {
    window.backend.save(new FormData(form), function () {
      window.render.userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  };
  form.addEventListener('submit', submitHandler);

  window.setup = {
    updateWizards: updateWizards,
    onEyesChange: onEyesChange,
    onCoatChange: onCoatChange
  };

})();
