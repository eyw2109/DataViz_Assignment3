// ***** Global variables ***** //
var homicidemale;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 550;

// ***** Preload function ***** //
function preload(){
  homicidemale = loadTable('../data/homicidemale.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function 1 ***** //
function setup(){
  createCanvas(800, 3000);
  textSize(17);
  console.log('Setup complete...');
  print(homicidemale.getRowCount() + ' rows loaded...');
  print(homicidemale.getColumnCount() + ' columns loaded...');
  for (var i = 0; i < homicidemale.getRowCount(); i++) {
    maxTotal = max(homicidemale.getNum(i, 'sumtotal'), maxTotal);
    maxLabel = max(homicidemale.getString(i, 'Age').length, maxLabel);
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
    for (var i = 0; i < homicidemale.getRowCount(); i++) {
        var total = homicidemale.getNum(i, 'sumtotal');
        var length = map(total, 0, maxTotal, 0, maxLength);
        rect(maxLabel * 10, 2 + 20*i, length, 15);
        text(nfc(total, 0), maxLabel * 10 + length + 5, 20*i);
    }
    textAlign(RIGHT, TOP);
    for (var i = 0; i < homicidemale.getRowCount(); i++) {
        text(homicidemale.getString(i, 'Age'), maxLabel * 10 - 5, 20*i);
    }
}