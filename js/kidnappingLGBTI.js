// ***** Global variables ***** //
var kidnappingLGBTI;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 550;

// ***** Preload function ***** //
function preload(){
  kidnappingLGBTI = loadTable('../data/kidnappingLGBTI.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function 1 ***** //
function setup(){
  createCanvas(800, 3000);
  textSize(17);
  console.log('Setup complete...');
  print(kidnappingLGBTI.getRowCount() + ' rows loaded...');
  print(kidnappingLGBTI.getColumnCount() + ' columns loaded...');
  for (var i = 0; i < kidnappingLGBTI.getRowCount(); i++) {
    maxTotal = max(kidnappingLGBTI.getNum(i, 'sumtotal'), maxTotal);
    maxLabel = max(kidnappingLGBTI.getString(i, 'Age').length, maxLabel);
  }
  print('Maximum total is ' + maxTotal);
  print('Maximum label length is ' + maxLabel);
}

// ***** Draw function 1 ***** //
function draw(){
    background(255);
    fill(218, 255, 124);
    noStroke();
    textAlign(LEFT, TOP);
    for (var i = 0; i < kidnappingLGBTI.getRowCount(); i++) {
        var total = kidnappingLGBTI.getNum(i, 'sumtotal');
        var length = map(total, 0, maxTotal, 0, maxLength);
        rect(maxLabel * 10, 2 + 20*i, length, 15);
        text(nfc(total, 0), maxLabel * 10 + length + 5, 20*i);
    }
    textAlign(RIGHT, TOP);
    for (var i = 0; i < kidnappingLGBTI.getRowCount(); i++) {
        text(kidnappingLGBTI.getString(i, 'Age'), maxLabel * 10 - 5, 20*i);
    }
}