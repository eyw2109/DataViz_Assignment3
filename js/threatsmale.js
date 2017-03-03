// ***** Global variables ***** //
var threatsmale;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 550;

// ***** Preload function ***** //
function preload(){
  threatsmale = loadTable('../data/threatsmale.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function 1 ***** //
function setup(){
  createCanvas(800, 3000);
  textSize(17);
  console.log('Setup complete...');
  print(threatsmale.getRowCount() + ' rows loaded...');
  print(threatsmale.getColumnCount() + ' columns loaded...');
  for (var i = 0; i < threatsmale.getRowCount(); i++) {
    maxTotal = max(threatsmale.getNum(i, 'sumtotal'), maxTotal);
    maxLabel = max(threatsmale.getString(i, 'Age').length, maxLabel);
  }
  print('Maximum total is ' + maxTotal);
  print('Maximum label length is ' + maxLabel);
}

// ***** Draw function 1 ***** //
function draw(){
    background(255);
    fill(255, 146, 91);
    noStroke();
    textAlign(LEFT, TOP);
    for (var i = 0; i < threatsmale.getRowCount(); i++) {
        var total = threatsmale.getNum(i, 'sumtotal');
        var length = map(total, 0, maxTotal, 0, maxLength);
        rect(maxLabel * 10, 2 + 20*i, length, 15);
        text(nfc(total, 0), maxLabel * 10 + length + 5, 20*i);
    }
    textAlign(RIGHT, TOP);
    for (var i = 0; i < threatsmale.getRowCount(); i++) {
        text(threatsmale.getString(i, 'Age'), maxLabel * 10 - 5, 20*i);
    }
}