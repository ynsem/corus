'use strict';

;(function Popups() {
  var alert = document.createElement('div');
  var close = document.createElement('div');

  var setMessage = function setMessage(message) {
    return message;
  };

  // сюда нужна обработка "левых" значений
  var setAlertType = function setAlertType(message) {
    return message;
  };

  var closer = function closer() {
    close.addEventListener('click', function (evt) {
      alert.remove();
    });
  };

  var createAlert = function createAlert(alertType) {
    alert.className = `alert ${setAlertType(alertType)}`;
    alert.innerHTML = setMessage('Важное сообщение');
    document.body.append(alert);

    close.className = 'close';
    alert.append(close);
    closer();
  };

  // заглушки других вариантов, они не стилизуются
  var customConfirm = function customConfirm() {
    var question = window.confirm('Каков твой ответ?');
    alert(question);
  };

  var customPrompt = function customPrompt() {
    var question = window.prompt('Что хочешь вывести?');
    alert(`Держи! ${question}`);
  };

  window.popups = {
    createAlert,
    customConfirm,
    customPrompt,
  };
})();
