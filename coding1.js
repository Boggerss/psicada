/* global createCanvas, background, noFill, strokeWeight, stroke, ellipse,  createInput
fill, rect, arc, text */

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

let inpX, inpY, inpR;
let x, y, r;
let xPosition, yPosition, circleRadius, weedle, grassy;
let spriteX, spriteY;
let inputsY;
let arrow;

let inputPosition
function setup() {
  spriteX = 700;
  spriteY = 800;

  
  grassy = createSprite(spriteX + 20, spriteY - 100);
  var myAnimation = grassy.addAnimation("squirm", "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2FnewGrassy.jpg?v=1628136878326");
  
  
  weedle = createSprite(spriteX, spriteY);
  var myAnimation = weedle.addAnimation("squirm", "https://cdn.glitch.com/4eacf0a0-43c5-420b-8e9f-79f9920a7e43%2Fweedle.gif?v=1627951643559");
  
  // Code here runs only once
  let c = createCanvas(1440, 1024);
  c.position(0,0)
  
  inputsY = 340
  inpX = createInput('xPosition');
  inpX.position(100, inputsY);
  inpX.size(100);
  
  inpY = createInput('yPosition');
  inpY.position(220, inputsY);
  inpY.size(100);
  
  inpR = createInput('circleRadius');
  inpR.position(340, inputsY);
  inpR.size(100);
  
  let back = createA("./menu1.html", "Back");
  back.style("font-size", "32px");
  back.style("background", "yellow");
  back.style("z-index", "2000");
  back.position(1300, 950);
}

function draw() {
  background("white");
  rectMode(CENTER);
  textSize(14)
  weedle.scale = 0.4;
  grassy.scale = 1.02;
  drawSprites();
  // Code here runs continuously
  // background(237)
  // stroke("black")
  // noFill()
  if(isInteger(xPosition) && isInteger(yPosition) && isInteger(circleRadius)) {
    x = xPosition;
    y = yPosition;
    r = circleRadius;
    
    strokeWeight(4);
    stroke("red");
    noFill();
    stroke('black')
    ellipse(x,y,r);
    fill("black")
    
    if (r >= 170 && abs(x - spriteX) < (r * 0.4) && abs(y - spriteY) < (r * 0.4)){
      console.log("x:"+ abs(x - spriteX))
      console.log("y:"+ abs(y - spriteY))
      challengeCompleted();
      
      //WRITE DOWN A RECCOMENDED RADIUS
    }
  }
  // ellipse( x, 10, 10)

  noStroke()
  text("Type here:", 20, inputsY+15)
  
  //Capture the caterpillar! 
  textSize(24);
  stroke("black");
  textFont("consolas");
  xPosition = inpX.value();
  yPosition = inpY.value();
  circleRadius = inpR.value();
  
  noStroke();
  text('Catch the wild weedle by creating an ellipse!', 50, 500);
  text(`function setup(){   //Whatever is inside this setup function will only run once!  \n    createCanvas(1440, 1024);   //creates a canvas, (width, height)! \n}`, 50, 50)
  text(`function draw() { \n    background('blue');    //makes the background blue (does not add an image though)\n    stroke('black');    //makes the circle border black\n    noFill();    //makes the circle transparent on the inside\n    ellipse( ${xPosition}, ${yPosition}, ${circleRadius});  //change the inputs below to alter these variables!\n}`, 50, 150)
}
  
//WEEDLES POSITION IN OUR REAL GAMWE
//  weedle = createSprite(1130, 320);

function isInteger(value) {
  return /^\d+$/.test(value);
}

function challengeCompleted(){
    let a = createA('./menu1.html', "You caught me! Click here for next challenge")
    setCookie("bug1", true);
    textSize(32);
    a.position(300, 400)
    a.style("font-size", '32px')
    a.style("background", 'yellow')
    textSize(14)
    noLoop();
}

function setCookie(cname, cvalue) {
  document.cookie =
    cname + "=" + cvalue + " ,expires=Mon, 20 May 2024 21:23:05 GMT , path/=";
  console.log(document.cookie);
}
  
  
//   ellipse(playerX, playerY, playerR);
//   input1 = createInput()
  
//   playerX = input1.value
//   playerY = input2.value
//   playerR = input3.value

  



// Type in X: text box
// Type in Y: text box
// Type in radius: text box