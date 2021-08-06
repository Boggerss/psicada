/* global createCanvas, background, noFill, strokeWeight, stroke, ellipse,
* fill, rect, arc, text, textFont, textSize, textAlign, windowWidth, createSprite
* windowHeight, windowWidth, random, createA, width, CENTER, createDiv
* bugsData, millis, drawSprites, height
*/
  
let brushHue,
  backgroundColor,
  frameRate,
  createLoop,
  weedle,  
  butterfree,
  beedrill,
  widow,
  mantis,
  roach,
  beetle,
  ladybug;

var sprite_sheet_image;
var sprite_sheet;

let myBugs;

console.log(bugsData.bug1)

function setup() {
  weedle = createSprite(410, 580);
  var myAnimation = weedle.addAnimation('squirm', bugsData.bug1.url);
    
  butterfree = createSprite(398, 390);
  var myAnimation = butterfree.addAnimation('squirm', bugsData.bug2.url)
  
  beedrill = createSprite(618, 586);
  var myAnimation = beedrill.addAnimation('squirm', bugsData.bug3.url);
  
  widow = createSprite(630, 390);
  var myAnimatin = widow.addAnimation('squirm', bugsData.bug4.url)
 
  mantis = createSprite(840, 580);
  var myAnimatin = mantis.addAnimation('squirm', bugsData.bug5.url)
   
  roach = createSprite(840, 390);
  var myAnimatin = roach.addAnimation('squirm', bugsData.bug6.url)
  
  beetle = createSprite(1060, 590);
  var myAnimatin = beetle.addAnimation('squirm', bugsData.bug7.url);
  
  ladybug = createSprite(1070, 390);
  var myAnimatin = ladybug.addAnimation('squirm', bugsData.bug8.url);
  
  
  myBugs = getCookie('bugs');
//   for (let bug of myBugs){
    
//   }
  console.log(myBugs)
  //colorMode(HSB, 360, 100, 100);
  brushHue = 30;
  backgroundColor = "";
  
  createCanvas(1440, 1024);
  // c.position(10, 10)
  textSize(width / 3);
  textAlign(CENTER, CENTER);
  let div = createDiv('');
  div.id("newDiv")

  
  //let insectoryBox = createA('./game.html', "start");
  //div.addClass('insectorySquare');
  background("#ffb347")
  
  let back = createA(getCookie("backUrl"), "Back")
  back.position(300, 800)
  back.style("font-size", '32px')
  back.style("background", 'yellow')
}

function draw() {
 // chooseColors();
  
  let time = millis();
  // rotateX(time / 1000);
  // rotateZ(time / 1234);
  // textSize(20);
  // text('p5.js', 100, 100);
  
  
  //insectory Rectangle
  fill("#CBC3E3");
  stroke("#b6cec7");
  strokeWeight(5)
  rect(width/6, height/4+31, 996, 400);
  
  //these ellipses are where the insects will be
  fill("#d8e0bb");
  stroke("#b6cec7");
  strokeWeight(4)
  
  ellipse(400,585,190,190);
  
  ellipse(400,390,190,190);
  
  ellipse(620,585,190,190);
  
  ellipse(620,390,190,190);
  
  ellipse(840,585,190,190);
  
  ellipse(840,390,190,190);
  
  ellipse(1060,585,190,190);
  
  ellipse(1060,390,190,190);


  
  weedle.scale = .24;
  butterfree.scale = .7;
  beedrill.scale = .32;
  mantis.scale = .40;
  widow.scale = .87;
  roach.scale = .5;
  beetle.scale = .34;
  ladybug.scale = .4;
  drawSprites();
  
  /////////////////SHADOW BOXES ^^^ SET UP TO DISAPPEAR WITH A BOOLEAN AFTER YOU COMPLETE LEVELS 1 - 4
  stroke(0);          // Setting the outline (stroke) to black
  fill(10, 10, 10, 240)
  bugsData.bug1.inInsectory ? null : ellipse(400,585,190,190);
  
  bugsData.bug2.inInsectory ? null : ellipse(400,390,190,190);
  
  bugsData.bug3.inInsectory ? null : ellipse(620,585,190,190);
  
  bugsData.bug4.inInsectory ? null : ellipse(620,390,190,190);
  
  bugsData.bug5.inInsectory ? null : ellipse(840,585,190,190);
  
  bugsData.bug6.inInsectory ? null : ellipse(840,390,190,190);
  
  bugsData.bug7.inInsectory ? null : ellipse(1060,585,190,190);
  
  bugsData.bug8.inInsectory ? null : ellipse(1060,390,190,190);
}

///////////////

//cookies
function setCookie(cname, cvalue){
  document.cookie = cname + "=" + cvalue + " ,expires=Mon, 20 May 2024 21:23:05 GMT , path/=";
  console.log(document.cookie);
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split('; ');

  for(var i = 0; i <ca.length; i++) {
    
    var c = ca[i];
    
    if (c.indexOf(name) == 0) {
      if (c.length-48-name.length == -1){
        return c.substring(name.length-1, c.length-48);
      }
      return c.substring(name.length, c.length-48);
    }
  }
  return "";
}


//this function slowly changes the background Colors
function chooseColors() {
 brushHue += .4;
  
  // this resets the brush hue so the colors keep changing
  if (brushHue > 360) {
    brushHue = 0;
  }
  
  background(brushHue, 100, 200);
  console.log(brushHue);

}