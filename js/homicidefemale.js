// ***** Global variables ***** //
var homicidefemale;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 550;

// ***** Preload function ***** //
function preload(){
  homicidefemale = loadTable('../data/homicidefemale.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function 1 ***** //
function setup(){
  createCanvas(800, 3000);
  textSize(17);
  console.log('Setup complete...');
  print(homicidefemale.getRowCount() + ' rows loaded...');
  print(homicidefemale.getColumnCount() + ' columns loaded...');
  for (var i = 0; i < homicidefemale.getRowCount(); i++) {
    maxTotal = max(homicidefemale.getNum(i, 'sumtotal'), maxTotal);
    maxLabel = max(homicidefemale.getString(i, 'Age').length, maxLabel);
  }
  print('Maximum total is ' + maxTotal);
  print('Maximum label length is ' + maxLabel);
}

// ***** Draw function 1 ***** //
function draw(){
    background(255);
    fill(30, 70, 255, 225);
    noStroke();
    textAlign(LEFT, TOP);
    for (var i = 0; i < homicidefemale.getRowCount(); i++) {
        var total = homicidefemale.getNum(i, 'sumtotal');
        var length = map(total, 0, maxTotal, 0, maxLength);
        rect(maxLabel * 10, 2 + 20*i, length, 15);
        text(nfc(total, 0), maxLabel * 10 + length + 5, 20*i);
    }
    textAlign(RIGHT, TOP);
    for (var i = 0; i < homicidefemale.getRowCount(); i++) {
        text(homicidefemale.getString(i, 'Age'), maxLabel * 10 - 5, 20*i);
    }
}