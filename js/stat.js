'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 20;
var TEXT_X = CLOUD_X + 20;
var TEXT_Y = CLOUD_Y + 20;
var BAR_X = CLOUD_X + 40;
var BAR_Y = CLOUD_Y + 30;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = BAR_WIDTH + 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomBlueColor = function (colors) {
  return 'hsl(' + colors + ',' + Math.random() * 100 + '%, 50%)';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);
  ctx.fillText('Список результатов:', TEXT_X, TEXT_Y + TEXT_GAP);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], BAR_X + BAR_GAP * i, BAR_Y + TEXT_GAP * 3 + BAR_MAX_HEIGHT + 10);
    var timeY = BAR_Y + TEXT_GAP * 2 + 5 + BAR_MAX_HEIGHT - BAR_MAX_HEIGHT * times[i] / maxTime;
    ctx.fillText(Math.round(times[i]), BAR_X + BAR_GAP * i, timeY);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomBlueColor(250);
    }
    ctx.fillRect(BAR_X + BAR_GAP * i, timeY + 20, BAR_WIDTH, BAR_MAX_HEIGHT * times[i] / maxTime);
  }
};
