'use strict';

(function Table() {
  var addData = function addRow(row, count) {
    var data = document.createElement('td');
    for (var i = 0; i < count; i += 1) {
      row.append(data);
    }
  };

  // незакончена
  var addRow = function addRow(table, dataCount, rowCount) {
    var row = document.createElement('tr');
    addData(row, dataCount);

    // for (var i = 0; i < count; i += 1) {
    //   table.append(row);
    // }
  };

  // var createTable = function createTavle(height, width) {
  //   var table = document.createElement('table');
  //   for (var i = 0; i < height; i += 1) {
  //     addRow(table, height);
  //   }
  // };

  window.table = {};
})();
