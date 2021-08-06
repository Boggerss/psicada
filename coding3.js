/* global createCanvas, background, noFill, strokeWeight, stroke, ellipse,  createInput
fill, rect, arc, text, bugsData, createSprite, loadImage */

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

let inpX, inpY, inpR;
let x, y, r;
let xPosition, yPosition, circleRadius, spider, grassy;
let spriteX, spriteY;
let inputsY, inputsX;
let arrow;
let netImage, netX, netY;
let changeY;
let button;
let falling;
let positionX;
let looping;
let reset;
let lines;
let response1, response2;

//245 line
let inputPosition

/***********************************
	A game based on exiting a maze.
  If you touch any obstacles, you have to start over.
  Sometimes you have to click on a door to get passed.
************************************/

let doorOpen = 0;
let ready = -1;
let endMsg = "";
let c;

function setup() {
  setCookie("backUrl", "./menu3.html");
  createCanvas(1440, 1024);
  
  //maze
  background(220);
  c = 'blue'
  
  //own code
  spriteX = 680;
  spriteY = 60;
  netX = spriteX + 400;
  netY = 0
  falling = false
  looping = true;
  
  //net cdn: 
  
  // grassy = createSprite(spriteX + 220, spriteY - 200);
  // var myAnimation = grassy.addAnimation("squirm", "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2Ftumblr_9b4f494df8c805028cd0680747e6ef75_07ae6684_500.gif?v=1628139688953");
  
  
  spider = createSprite(spriteX, spriteY);
  var myAnimation = spider.addAnimation("squirm", bugsData.bug6.url);
  
  
  // Code here runs only once
  
  
  inputsY = 850
  inputsX = 600
  
  inpX = createInput('y-of-1st-line');
  inpX.position(inputsX, inputsY);
  inpX.style('font-size', "28px");
  inpX.size(250);
  
  inpY = createInput('x-of-2nd-line');
  inpY.position(inputsX + 300, inputsY);
  inpY.style('font-size', "28px");
  inpY.size(250);
  
  

  
  let back = createA('./menu3.html', "Back")
  back.position(1300, 950)
  back.style("font-size", '32px')
  back.style("background", 'yellow')
  back.style("z-index", '2000')

  let reference = createA('https://editor.p5js.org/kchung/sketches/Bya-96Xz4',"Code for maze taken from kchung", "_blank" )
  reference.position(100, 950)
  reference.style("font-size", '32px')
}

function draw() {
  textSize(14);
  spider.scale = 0.5;
  // grassy.scale = 3;
  //net.scale = 0.6;
  drawSprites();
  //800 is target X
  
  response1 = inpX.value();
  response2 = inpY.value();
  lines = [
    "function setup() {",
    "createCanvas(600, 580);",
    "}",
    "function draw {",
    "background('gray');",
    "paint();",
    "}",
    "function paint(){",
    "stroke('orange');",
    `line(mouseX, ${response1}, ${response2}, pmouseY);`,
    "}",
  ];
  // xPosition = inpX.value();
  isNumber(xPosition) ? positionX = xPosition : null
  // positionX === 'xPosition' ? positionX = 0 : null
  screenCode();
  
  fill('black')
  noStroke()
  text("Type here:", inputsX - 200, inputsY+18)
  
  //Capture the caterpillar! 
  textSize(24);
  stroke("black");
  textFont("consolas");

  console.log("xposition: "+ xPosition)
  
  
  //maze
  maze();
  
  if(response1 === 'mouseY' && response2 === 'pmouseX'){
    strokeWeight(2);
    stroke('orange');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
    
}

function isValid(value) {
  return /^[ 0-9\=\+\-]*$/.test(value);
}
function isNumber(value) {
  return /^[ 0-9\.]*$/.test(value);
}

function challengeCompleted(){
  let a = createA('./insectory.html', "You caught the roach! Click here to see in insectory.")
  setCookie("bug6", true);
  a.position(300, 400)
  a.style("font-size", '32px')
  a.style("background", 'yellow')
  console.log("game over")
  looping = false
}

function screenCode(){
  noStroke();
  fill(220);
  rect(650, 250, 900, 450);
  noStroke();
  textSize(32)
  fill("blue");
  textStyle(BOLD);
  text('//Make your mouse leave \nan orange trail as it moves \nthrough the maze!', 800, 100);
  text("//Reach the end of the maze\nto get the Roach!", 50, 700);

  textStyle(NORMAL);
  textSize(18)
  text("psst, only trailing mice can play the maze", 50, 780);
  textSize(32)
  
  text(
    `${lines[0]}\n    ${
      lines[1]
    }  \n${
      lines[2]
    } \n${
      lines[3]
    } \n    ${
      lines[4]
    } \n    ${
      lines[5]
    } \n${
      lines[6]
    } \n${
      lines[7]
    } \n    ${
      lines[8]
    } \n    ${
      lines[9]
    } \n${
      lines[10]
    }`,
    650,
    300
  );
}

//maze
function maze(){
  stroke('black')
  noFill();
  rect(0, 0, 600, 580);
  var d = 220;
  // Reset background
	if(mouseX > 0 && mouseX < 120 && mouseY > 0 && mouseY < 30 && response1 === "mouseY" && response2 === "pmouseX") {
    background(220)
  }
  noStroke();
  // Entrance Box
  textSize(20);
  fill('green');
  rect(0,0, 120, 30);
  fill('yellow');
  text("Entrance", 20, 20);
  
  // Exit Box
  fill('red');
  rect(530,0, 70, 30);
  fill(255);
  text("Exit", 550, 20);
  
  // Obstacles and Walls
  fill(0);
  // Big Walls
  rect(120,0, 100, 460);
  rect(220,360, 260, 100);
  rect(340,130, 260, 110);
  rect(430,0, 100, 110);
  // End Maze
	rect(340,30, 60, 100);
  rect(530,100, 50, 10);
  rect(550,70, 50, 10);
  rect(530,40, 50, 10);
  // Bubble Run
  ellipse(60,100, 80);
  ellipse(0,220, 120);
  ellipse(120,320, 120);
  ellipse(0, 420, 120);
  
  fill(d);
  rect(0,560, 20, 20);
  
  // Play
  if(mouseX > 0 && mouseX < 120 && mouseY > 0 && mouseY < 30 && response1 === "mouseY" && response2 === "pmouseX") {
    ready = 1;
    endMsg = "";
  }
  if(ready == 1) {
    strokeWeight(2);
    stroke('orange');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  // Win Scenario
  if(ready == 1 && mouseX > 530 && mouseX < 600 && mouseY > 0 && mouseY < 30 && response1 === "mouseY" && response2 === "pmouseX") {
    // Speed Cheat Check
  	if(dist(pmouseX,pmouseY, mouseX,mouseY) > 20) {
    	ready = 0;
    	endMsg = "Slow Down!";
    	c = 'red';
  	} else {
      endMsg = "You Win!";
    	c = 'blue';
      challengeCompleted();
    }
  }
  // Opening message
  if(ready == -1) {
    c = 'green';
    endMsg = "G'Luck!";
  }
  	textSize(100);
    fill(c);
    text(endMsg, 600/2-200, 580/2);
  
  // Lose Scenarios
	// // Big Walls
	// rect(120,0, 100, 460);
  if(mouseX > 120 && mouseX < 220 && mouseY > 0 && mouseY < 460 && response1 === "mouseY" && response2 === "pmouseX") {
  	ready = 0;
  	endMsg = "You Lose! Try again.";
    c = 'red'
  }
 	// rect(220,360, 260, 100);
  if(mouseX > 220 && mouseX < 480 && mouseY > 360 && mouseY < 460 && response1 === "mouseY" && response2 === "pmouseX") {
  	ready = 0;
  	endMsg = "You Lose! Try again.";
    c = 'red'
  }
	// rect(340,130, 260, 110);
  if(mouseX > 340 && mouseX < 600 && mouseY > 130 && mouseY < 240 && response1 === "mouseY" && response2 === "pmouseX") {
  	ready = 0;
  	endMsg = "You Lose! Try again.";
    c = 'red'
  }
  // rect(430,0, 100, 110);
  if(mouseX > 430 && mouseX < 530 && mouseY > 0 && mouseY < 110 && response1 === "mouseY" && response2 === "pmouseX") {
  	ready = 0;
  	endMsg = "You Lose! Try again.";
    c = 'red'
  }
  // // End Maze
	// rect(340,30, 60, 100);
  if(mouseX > 340 && mouseX < 400 && mouseY > 30 && mouseY < 130 && response1 === "mouseY" && response2 === "pmouseX") {
  	ready = 0;
  	endMsg = "You Lose! Try again.";
    c = 'red'
  }
  // rect(530,100, 50, 10);
  if(mouseX > 530 && mouseX < 580 && mouseY > 100 && mouseY < 110 && response1 === "mouseY" && response2 === "pmouseX") {
  	ready = 0;
  	endMsg = "You Lose! Try again.";
    c = 'red'
  }
  // rect(550,70, 50, 10);
  if(mouseX > 550 && mouseX < 600 && mouseY > 70 && mouseY < 80 && response1 === "mouseY" && response2 === "pmouseX") {
  	ready = 0;
  	endMsg = "You Lose! Try again.";
    c = 'red'
  }
  // rect(530,40, 50, 10);
  if(mouseX > 530 && mouseX < 580 && mouseY > 40 && mouseY < 50 && response1 === "mouseY" && response2 === "pmouseX") {
  	ready = 0;
  	endMsg = "You Lose! Try again.";
    c = 'red'
  }
  
  // Outside the canvas
  if((mouseX > width || mouseX < 0 || mouseY > height || mouseY < 2) && response1 === "mouseY" && response2 === "pmouseX") {
  	ready = 0;
  	endMsg = "You Lose! Try again.";
    c = 'red'
  }
  if(mouseX == 0 && mouseY == 0 && response1 === "mouseY" && response2 === "pmouseX")
    ready = -1;

 
  // // Bubble Run
	// ellipse(60,100, 80);
  if(dist(60,100, mouseX,mouseY) < 40 && response1 === "mouseY" && response2 === "pmouseX") {
  	ready = 0;
  	endMsg = "You Lose! Try again.";
    c = 'red'
  }
 
  // ellipse(0,220, 120);
  if(dist(0,220, mouseX,mouseY) < 60 && response1 === "mouseY" && response2 === "pmouseX") {
  	ready = 0;
  	endMsg = "You Lose! Try again.";
    c = 'red'
  }

  // ellipse(120,320, 120);
	if(dist(120,320, mouseX,mouseY) < 60 && response1 === "mouseY" && response2 === "pmouseX") {
  	ready = 0;
  	endMsg = "You Lose! Try again.";
    c = 'red'
  }

  // ellipse(0, 420, 120);
  if(dist(0,420, mouseX,mouseY) < 60 && response1 === "mouseY" && response2 === "pmouseX") {
  	ready = 0;
  	endMsg = "You Lose! Try again.";
    c = 'red'
  }
}

//maze end



function setCookie(cname, cvalue) {
  document.cookie =
  cname + "=" + cvalue + " ,expires=Mon, 20 May 2024 21:23:05 GMT , path/=";
  console.log(document.cookie);
} 