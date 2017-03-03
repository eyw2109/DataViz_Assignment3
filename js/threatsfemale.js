// ***** Global variables ***** //
var threatsfemale;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 550;

// ***** Preload function ***** //
function preload(){
  threatsfemale = loadTable('../data/threatsfemale.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function 1 ***** //
function setup(){
  createCanvas(800, 3000);
  textSize(17);
  console.log('Setup complete...');
  print(threatsfemale.getRowCount() + ' rows loaded...');
  print(threatsfemale.getColumnCount() + ' columns loaded...');
  for (var i = 0; i < threatsfemale.getRowCount(); i++) {
    maxTotal = max(threatsfemale.getNum(i, 'sumtotal'), maxTotal);
    maxLabel = max(threatsfemale.getString(i, 'Age').length, maxLabel);
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
    for (var i = 0; i < threatsfemale.getRowCount(); i++) {
        var total = threatsfemale.getNum(i, 'sumtotal');
        var length = map(total, 0, maxTotal, 0, maxLength);
        rect(maxLabel * 10, 2 + 20*i, length, 15);
        text(nfc(total, 0), maxLabel * 10 + length + 5, 20*i);
    }
    textAlign(RIGHT, TOP);
    for (var i = 0; i < threatsfemale.getRowCount(); i++) {
        text(threatsfemale.getString(i, 'Age'), maxLabel * 10 - 5, 20*i);
    }
}
