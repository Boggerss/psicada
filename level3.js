/* global createCanvas, background, noFill, strokeWeight, stroke, ellipse,
* fill, rect, arc, text 
* windowHeight, windowWidth, random, createA, noStroke, createDiv, textFont
* createInput, createButton, createElement, textAlign, CENTER, textSize, loadImage
* colorMode, RGB, width, height
*/

let button, input1, input2, input3, greeting;
let bg;
let x, y;



let string;
let incorrect = 3
let forrest;
let mantis;

let weedle;
let spriteX, spriteY;
let inputsY, inputsX;
let lines, prevLines;
let inp1Line, inp1Cor, inp2Line, inp2Cor, inp3Line, inp3Cor;
let answers;
let submit;
let inputPosition;


function setup() {
  createCanvas(1440, 1024);
  
  setCookie("backUrl", "./menu3.html");
  
  forrest = createSprite(1050, 180);
  var myAnimation = forrest.addAnimation(
    "squirm",
    "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2Ftek16u3wkhqx.gif?v=1628142855731");

  mantis = createSprite(1100, 268);
  var myAnimation = mantis.addAnimation(
    "squirm",
    bugsData.bug5.url
  );

//   let c = createCanvas(1440, 1024);
//   c.position(0,0)
//   colorMode(RGB, 255);

  noStroke();
  textSize(32);
  textFont('Roboto');
  fill(0);
  text("Lines: ", 1050, 770);
  
  let div = createDiv('');
  div.addClass('gameDisplay3');
  // let div2 = createDiv('');
  // div2.addClass('debugger3');
  
  let div3 = createDiv('Edit the inputs below to fix the bugs in the code.');
  div3.addClass('text3');
  let div4 = createDiv('');
  div4.addClass('code3');  
  
  x = 40;
  y = 40;

  
  button = createA('./insectory.html', `You have received a ${bugsData.bug5.species}. Click here to go to insectory`);
  button.addClass('win-bug')
  button.position(300, 600)
  button.hide()
  
  
  
  spriteX = 900;
  spriteY = 500;
  inputsY = 750;
  inputsX = 950;
  answers = {
    1: "let yTop, yBottom;",
    7: "function draw() {",
    10: "strokeWeight();"
  }


  inp1Line = createInput("1");
  inp1Line.position(inputsX, inputsY);
  inp1Line.style('font-size', '20px');
  inp1Line.size(50);

  inp1Cor = createInput("let yTop;");
  inp1Cor.position(inputsX+70, inputsY);
  inp1Cor.style('font-size', '20px');
  inp1Cor.size(150);

  inp2Line = createInput("");
  inp2Line.position(inputsX, inputsY+50);
  inp2Line.style('font-size', '20px');
  inp2Line.size(50);
  
  inp2Cor = createInput("");
  inp2Cor.position(inputsX+70, inputsY+50);
  inp2Cor.style('font-size', '20px');
  inp2Cor.size(150);
  
  inp3Line = createInput("");
  inp3Line.position(inputsX, inputsY+100);
  inp3Line.style('font-size', '20px');
  inp3Line.size(50);
  
  inp3Cor = createInput("");
  inp3Cor.position(inputsX+70, inputsY+100);
  inp3Cor.style('font-size', '20px');
  inp3Cor.size(150);
  
  submit = createButton('submit');
  submit.position(inputsX + 100, inputsY + 150);
  submit.mousePressed(submitChallenge);
  
  prevLines = [
    "let yTop;",
    "function setup(){",
    "createCanvas(1440, 1024);",
    "yTop=120;",
    "yBottom = 10;",
    "}",
    "function draw {",
    "background('white');",
    "noFill();",
    "strokeWeight()",
    "arc(150, yBottom, 100, 100, 4.82, PI);",
    "}",
  ];
  let back = createA('./menu3.html', "Back")
  back.position(1300, 950)
  back.style("font-size", '32px')
  back.style("background", 'yellow')
  back.style("z-index", '2000')
}

function draw() {
  // background(250);
  // noStroke();
  // textSize(32);
  // textFont('Roboto');
  // fill(0);
  
  background("black");
  
  fill('#EEEEEE')
  rect(700, 512, 740, 512)
  // position: absolute;
  // width: 740px;
  // height: 512px;
  // left: 700px;
  // top: 512px;
  // z-index: 0;
  // background: #EEEEEE;
  
  lines = [
    "let yTop;",
    "function setup() {",
    "createCanvas(1440, 1024);",
    "yTop=120;",
    "yBottom = 10;",
    "}",
    "function draw {",
    "background('white');",
    "noFill();",
    "strokeWeight()",
    "arc(150, yBottom, 100, 100, 4.82, PI);",
    "}",
  ];
  displayText()
  
  handleInputs();
  screenCode();
  

  mantis.scale = 0.458
  forrest.scale = 1.4;
  drawSprites();
}

function challengeCompleted(){
  setCookie("bug5", true);
  button.show()
}

//cookies
function setCookie(cname, cvalue){
  document.cookie = cname + "=" + cvalue + " ,expires=Mon, 20 May 2024 21:23:05 GMT , path/=";
  console.log(document.cookie);
}

function displayText(){
  fill('black')
  textSize(20)
  text("Correction 1:", inputsX - 120, inputsY + 10);
  text("Correction 2:", inputsX - 120, inputsY + 60);
  text("Correction 3:", inputsX - 120, inputsY + 110);
  
  text("Line #", inputsX, inputsY - 30);
  text("Correction", inputsX + 110, inputsY - 30);
  text("Previously", inputsX + 240, inputsY - 30);
  fill('white');
}


/* global createCanvas, background, noFill, strokeWeight, stroke, ellipse,  createInput
fill, rect, arc, createButton, text, createSprite, drawSprites, 
abs, textSize, createA, textFont, noLoop, bugsData */

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.


//new code

function handleInputs(){
  
  textSize(24);
  fill("black");
  textFont("consolas");
  
  
  //input values
  if(isInteger(inp1Line.value()) && inp1Line.value() <=12 && inp1Line.value() > 0){
    lines[inp1Line.value() - 1] = inp1Cor.value();
    text(prevLines[inp1Line.value() - 1], inputsX + 240, inputsY + 10); 
  }
  if(isInteger(inp2Line.value())){
    text(prevLines[inp2Line.value() - 1], inputsX + 240, inputsY+60);
    lines[inp2Line.value() - 1] = inp2Cor.value();
  }
  if(isInteger(inp3Line.value())){
    text(prevLines[inp3Line.value() - 1], inputsX + 240, inputsY+110);
    lines[inp3Line.value() - 1] = inp3Cor.value();
  }
  fill("white")
}

function screenCode(){
  text(
    `${lines[0]}\n${
      lines[1]
    }  \n    ${
      lines[2]
    } \n    ${
      lines[3]
    } \n    ${
      lines[4]
    }    \n${
      lines[5]
    }`,
    100,
    50
  );
  text(
    `${lines[6]} \n    ${
      lines[7]
    }    \n    ${
      lines[8]
    } \n    ${
      lines[9]
    }  \n    ${
      lines[10]
    } 
${lines[11]}`,
    100,
    230
  );
}


function submitChallenge(){
  let submittedNumbers = [inp1Line.value(), inp2Line.value(), inp3Line.value()]
  let submittedValues = [inp1Cor.value(), inp2Cor.value(), inp3Cor.value()]
  for(let i = 0; i < submittedNumbers.length; i++){
    console.log(answers[submittedNumbers[i]].replace(/ /g,''))
    console.log(submittedValues[i].replace(/ /g,''))
    if(answers[submittedNumbers[i]].replace(/ /g,'') !== submittedValues[i].replace(/ /g,'')){
      break;
    }
    if (i === 2){
      challengeCompleted();
    }
  }
}

function isInteger(value) {
  return /^\d+$/.test(value);
}