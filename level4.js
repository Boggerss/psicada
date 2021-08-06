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
let incorrect = 3;
let forrest;
let beetle;

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

  setCookie("backUrl", "./menu4.html");

  forrest = createSprite(1127, 245);
  var myAnimation = forrest.addAnimation(
    "squirm",
    "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2Fone-of-garou-mark-of-the-wolves-backgrounds-350722.gif?v=1628207836492"
  );

  beetle = createSprite(1105, 400);
  var myAnimation = beetle.addAnimation("squirm", bugsData.bug7.url);

  //   let c = createCanvas(1440, 1024);
  //   c.position(0,0)
  //   colorMode(RGB, 255);

  noStroke();
  textSize(32);
  textFont("Roboto");
  fill(0);
  text("Lines: ", 1050, 770);

  let div = createDiv("");
  div.addClass("gameDisplay3");
  let div2 = createDiv('');
  div2.addClass('debugger4');

  let div3 = createDiv("Edit the inputs below to fix the bugs in the code.");
  div3.addClass("text3");
  // let div4 = createDiv("");
  // div4.addClass("code3");

  x = 40;
  y = 40;

  button = createA(
    "./insectory.html",
    `You have received a ${bugsData.bug7.species}. Click here to go to insectory`
  );
  button.addClass("win-bug");
  button.position(300, 600);
  button.hide();

  spriteX = 900;
  spriteY = 500;
  inputsY = 750;
  inputsX = 950;
  answers = {
    9: "frogDiameter);",
    18: "let hit3 = collideRectCircle()",
    21: "carWidth,"
  };

  inp1Line = createInput("1");
  inp1Line.position(inputsX, inputsY);
  inp1Line.style("font-size", "20px");
  inp1Line.size(50);

  inp1Cor = createInput("function checkCollisions() {");
  inp1Cor.position(inputsX + 70, inputsY);
  inp1Cor.style("font-size", "20px");
  inp1Cor.size(150);

  inp2Line = createInput("");
  inp2Line.position(inputsX, inputsY + 50);
  inp2Line.style("font-size", "20px");
  inp2Line.size(50);

  inp2Cor = createInput("");
  inp2Cor.position(inputsX + 70, inputsY + 50);
  inp2Cor.style("font-size", "20px");
  inp2Cor.size(150);

  inp3Line = createInput("");
  inp3Line.position(inputsX, inputsY + 100);
  inp3Line.style("font-size", "20px");
  inp3Line.size(50);

  inp3Cor = createInput("");
  inp3Cor.position(inputsX + 70, inputsY + 100);
  inp3Cor.style("font-size", "20px");
  inp3Cor.size(150);

  submit = createButton("submit");
  submit.position(inputsX + 100, inputsY + 150);
  submit.mousePressed(submitChallenge);

  prevLines = [
    "function checkCollisions() {",
    "let hit = collideRectCircle()",
    "car1X,",
    "car1Y,",
    "carWidth,",
    "carHeight,",
    "frogX,",
    "frogY,",
    "frogDiameter;",
    "let hit2 = collideRectCircle()",
    "car2X,",
    "car2Y,",
    "carWidth,",
    "carHeight,",
    "frogX,",
    "frogY,",
    "frogDiameter);",
    "let hit2 = collideRectCircle()",
    "car3X,",
    "car3Y,",
    "carWidth",
    "carHeight,",
    "frogX,",
    "frogY,",
    "frogDiameter);",
    "}"
  ];
  let back = createA("./menu4.html", "Back");
  back.position(1300, 950);
  back.style("font-size", "32px");
  back.style("background", "yellow");
  back.style("z-index", "2000");
}

function draw() {
  // background(250);
  // noStroke();
  // textSize(32);
  // textFont('Roboto');
  // fill(0);

  background("black");

  fill("#EEEEEE");
  rect(700, 512, 740, 512);
  // position: absolute;
  // width: 740px;
  // height: 512px;
  // left: 700px;
  // top: 512px;
  // z-index: 0;
  // background: #EEEEEE;

  lines = [
    "function checkCollisions() {",
    "let hit = collideRectCircle()",
    "car1X,",
    "car1Y,",
    "carWidth,",
    "carHeight,",
    "frogX,",
    "frogY,",
    "frogDiameter;",
    "let hit2 = collideRectCircle()",
    "car2X,",
    "car2Y,",
    "carWidth,",
    "carHeight,",
    "frogX,",
    "frogY,",
    "frogDiameter);",
    "let hit2 = collideRectCircle()",
    "car3X,",
    "car3Y,",
    "carWidth",
    "carHeight,",
    "frogX,",
    "frogY,",
    "frogDiameter);",
    "}"
  ];
  displayText();

  handleInputs();
  screenCode();

  beetle.scale = 0.48;
  forrest.scale = 1.4;
  drawSprites();
  
  fill("#EEEEEE");
  rect(700, 488, 2000, 40);
  // ellipse(450,450,600);
}

function challengeCompleted() {
  setCookie("bug7", true);
  button.show();
}

//cookies
function setCookie(cname, cvalue) {
  document.cookie =
    cname + "=" + cvalue + " ,expires=Mon, 20 May 2024 21:23:05 GMT , path/=";
  console.log(document.cookie);
}

function displayText() {
  fill("black");
  textSize(20);
  text("Correction 1:", inputsX - 120, inputsY + 10);
  text("Correction 2:", inputsX - 120, inputsY + 60);
  text("Correction 3:", inputsX - 120, inputsY + 110);

  text("Line #", inputsX, inputsY - 30);
  text("Correction", inputsX + 110, inputsY - 30);
  text("Previously", inputsX + 240, inputsY - 30);
  fill("white");
}

/* global createCanvas, background, noFill, strokeWeight, stroke, ellipse,  createInput
fill, rect, arc, createButton, text, createSprite, drawSprites, 
abs, textSize, createA, textFont, noLoop, bugsData */

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

//new code

function handleInputs() {
  textSize(24);
  fill("black");
  textFont("consolas");

  //input values
  if (
    isInteger(inp1Line.value()) &&
    inp1Line.value() <= 12 &&
    inp1Line.value() > 0
  ) {
    lines[inp1Line.value() - 1] = inp1Cor.value();
    text(prevLines[inp1Line.value() - 1], inputsX + 240, inputsY + 10);
  }
  if (isInteger(inp2Line.value())) {
    text(prevLines[inp2Line.value() - 1], inputsX + 240, inputsY + 60);
    lines[inp2Line.value() - 1] = inp2Cor.value();
  }
  if (isInteger(inp3Line.value())) {
    text(prevLines[inp3Line.value() - 1], inputsX + 240, inputsY + 110);
    lines[inp3Line.value() - 1] = inp3Cor.value();
  }
  fill("white");
}

function screenCode() {
  text(
    `${lines[0]}\n  ${
      lines[1]
    } \n    ${
      lines[2]
    } \n    ${
      lines[3]
    } \n    ${
      lines[4]
    } \n    ${
      lines[5]
    } \n    ${
      lines[6]
    } \n    ${
      lines[7]
    } \n    ${
      lines[8]
    }`,
    100,
    50
  );
  text(
    `\n  ${lines[9]}\n    ${
      lines[10]
    } \n    ${
      lines[11]
    } \n    ${
      lines[12]
    } \n    ${
      lines[13]
    } \n    ${
      lines[14]
    } \n    ${
      lines[15]
    } \n    ${
      lines[16]
    }`,
    100,
    325
  );
  
  text(
    `\n  ${lines[17]}\n    ${
      lines[18]
    } \n    ${
      lines[19]
    } \n    ${
      lines[20]
    } \n    ${
      lines[21]
    } \n    ${
      lines[22]
    } \n    ${
      lines[23]
    } \n    ${
      lines[24]
    }\n${
      lines[25]
    }`,
    100,
    600
  );
//   text(
//     `${lines[7]} \n    ${
//       lines[8]
//     }    \n    ${
//       lines[9]
//     } \n    ${
//       lines[10]
//     }  \n    ${
//       lines[11]
//     } 
// ${lines[12]}`,
//     100,
//     230
//   );
}

function submitChallenge() {
  let submittedNumbers = [inp1Line.value(), inp2Line.value(), inp3Line.value()];
  let submittedValues = [inp1Cor.value(), inp2Cor.value(), inp3Cor.value()];
  for (let i = 0; i < submittedNumbers.length; i++) {
    console.log(answers[submittedNumbers[i]].replace(/ /g, ""));
    console.log(submittedValues[i].replace(/ /g, ""));
    if (
      answers[submittedNumbers[i]].replace(/ /g, "") !==
      submittedValues[i].replace(/ /g, "")
    ) {
      break;
    }
    if (i === 2) {
      challengeCompleted();
    }
  }
}

function isInteger(value) {
  return /^\d+$/.test(value);
}
