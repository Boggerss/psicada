/* global createCanvas, background, noFill, strokeWeight, stroke, ellipse,  createInput
fill, rect, arc, text, bugsData, createSprite, loadImage */

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.


//next todo: requirements of the X value inputted to win
let inpX, inpY, inpR;
let x, y, r;
let xPosition, yPosition, circleRadius, spider, grassy;
let spriteX, spriteY;
let inputsY;
let arrow;
let netImage, netX, netY;
let changeY;
let button;
let falling;
let positionX;
let looping;
let reset;


let inputPosition
function setup() {
  setCookie("backUrl", "./menu2.html");
  spriteX = 500;
  spriteY = 700;
  netX = spriteX + 400;
  netY = 0
  falling = false
  looping = true;
  
  //net cdn: 
  
  grassy = createSprite(spriteX + 220, spriteY - 200);
  var myAnimation = grassy.addAnimation("squirm", "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2Ftumblr_9b4f494df8c805028cd0680747e6ef75_07ae6684_500.gif?v=1628139688953");
  
  
  spider = createSprite(spriteX + 400, spriteY + 100);
  var myAnimation = spider.addAnimation("squirm", bugsData.bug4.url);
  
  netImage = loadImage("https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2F95c86c60-81d7-418a-a454-469a410fabab.image.png?v=1628138921643");
  
  // Code here runs only once
  let c = createCanvas(1440, 1024);
  c.position(0,0)
  
  inputsY = 600
  
  inpX = createInput('xPosition');
  inpX.position(100, inputsY);
  inpX.size(100);
  
  inpY = createInput('writeCodeHere');
  inpY.position(220, inputsY);
  inpY.size(100);
  
  button = createButton('submit');
  button.position(inpY.x + inpY.width + 5, inputsY);
  button.mousePressed(submitChallenge);
  
  let back = createA('./menu2.html', "Back")
  back.position(1300, 950)
  back.style("font-size", '32px')
  back.style("background", 'yellow')
  back.style("z-index", '2000')
  
}

function draw() {
  background("white");
  textSize(14);
  spider.scale = 1;
  grassy.scale = 3;
  //net.scale = 0.6;
  drawSprites();
  
  netImage.resize(200, 0);
  image(netImage, positionX, netY);
  //800 is target X
  
  
  changeY = inpY.value();
  xPosition = inpX.value();
  isNumber(xPosition) ? positionX = xPosition : null
  // positionX === 'xPosition' ? positionX = 0 : null
  
  if(falling){
    if (isValid(changeY)){
        console.log("valid");
        let strYpos = "netY +"
        let code = strYpos.concat(changeY);
        console.log(code)
        eval(code) ? eval(code) : null
        console.log(netY)
        if(netY > spriteY+30){
          if(abs(positionX - 800) <= 50){
            challengeCompleted1()
        }else{
          
          let reset = createA('./coding2.html', "You missed :(. Click here to try again")
          reset.position(300, 400);
          reset.style("font-size", '32px')
          reset.style("background", 'yellow')
          
        }
        noLoop();
        }
    }
  }
  
  fill('white')
  noStroke()
  text("Type here:", 20, inputsY+15)
  
  //Capture the caterpillar! 
  textSize(24);
  stroke("black");
  textFont("consolas");

  
  console.log("xposition: "+ xPosition)
  
  noStroke();
  fill("white");
  textStyle(BOLD);
  text('//Catch the wild spider by making the net fall on it!', 50, 500);
  textStyle(NORMAL);
  text(`let netImg, yPosition, xPosition;\nfunction setup(){   //Whatever is inside this setup function will only run once!  \n    createCanvas(1440, 1024);   //creates a canvas, (width, height)!\n    netImage = loadImage("net image url here");     //loads an image\n    yPosition = 0;    //sets the yPosition of the net to be 0px from the top of the canvas\n}`, 50, 50)
  text(`function draw() { \n    background('black');    //makes the background black (does not add an image though)\n    image(netImage, ${xPosition}, yPosition);  //change the first input below to alter the positionX!\n    moveNet();\n}`, 50, 230)
  text(`function moveNet() { \n    yPosition +${changeY};  //change the inputs below to alter these variables!\n}`, 50, 380)

}
  
//WEEDLES POSITION IN OUR REAL GAMWE
//  weedle = createSprite(1130, 320);

function isValid(value) {
  return /^[ 0-9\=\+\-]*$/.test(value);
}
function isNumber(value) {
  return /^[ 0-9\.]*$/.test(value);
}

function submitChallenge(){
  if(looping === true){
    falling = true
  }
}

function challengeCompleted1(){
  let a = createA('./menu2.html', "You caught the spider! Click here for next challenge")
  setCookie("bug4", true);
  a.position(300, 400)
  a.style("font-size", '32px')
  a.style("background", 'yellow')
  console.log("game over")
  looping = false
  
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