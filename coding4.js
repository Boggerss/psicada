/* global createCanvas, background, noFill, strokeWeight, stroke, ellipse,  createInput
fill, rect, arc, text, bugsData, createSprite, loadImage, drawSprites, soundFormats, mySound, loadSound,
keyCode, createDiv*/

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

//next todo: requirements of the X value inputted to win
let inp;
let x, y, r;
let xPosition, yPosition, circleRadius, ladybug, giygasBg;
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
let char1, char2;
let lines;
let bossMusic;
let keyValue;
let recordedKeys;
let timer = 300;
let amplitude;

let inputPosition;

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound(
    "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2F147-%20Earthbound%20-%20Giygas%20is%20Wounded!.mp3?v=1628284138543"
  );
}

function setup() {
  bossMusic = createAudio(
    "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2F147-%20Earthbound%20-%20Giygas%20is%20Wounded!.mp3?v=1628284138543"
  );
  mySound.volume = 0.2;
  spriteX = 500;
  spriteY = 700;
  netX = spriteX + 400;
  netY = 0;
  recordedKeys = [];

  keyValue = {
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z"
  };

  //net cdn:
  giygasBg = createSprite(690, 310);
  var myAnimation = giygasBg.addAnimation(
    "squirm",
    "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2Fddwtyrp-8dfc6ce7-0d67-4e16-9b53-54f2c42a5461.gif?v=1628209051154"
  );

  ladybug = createSprite(1000, 800);
  var myAnimation = ladybug.addAnimation("squirm", bugsData.bug8.url);

  portal = createSprite(270, 860);
  var myAnimation = portal.addAnimation(
    "squirm",
    "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2F200w.gif?v=1628210496822"
  );

  netImage = loadImage(
    "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2F95c86c60-81d7-418a-a454-469a410fabab.image.png?v=1628138921643"
  );
  ladybug.scale = 1.72;
  giygasBg.scale = 6;
  portal.scale = 1.5;
  //net.scale = 0.6;

  // Code here runs only once
  let c = createCanvas(1840, 1024);
  c.mousePressed(canvasPressed);
  c.position(0, 0);

  inputsY = 600;

  let back = createDiv("No escape..");
  back.position(1250, 950);
  back.style("font-size", "32px");
  back.style("background", "#8B0000");
  back.style("border-radius", "10px");
  back.style("text-decoration", "underline");

  back.style("z-index", "2000");

  lines = [
    "function setup() {",
    "createCanvas(600, 580);",
    "}",
    "function draw {",
    "background('black');",
    "textSize(32)",
    "let tempKeys = recordedKeys.join('')",
    "text(tempKeys, 800, 400)",
    "if(tempKeys == 'ladybug'){",
    "challengeCompleted();",
    "}",
    "if(keyCode){",
    "if(keyCode + 7 <=90){",
    "text(`${keyValue[keyCode]} typed, code for ${keyCode + 7 <=90}!`, 800, 300)",
    "}",
    "else{",
    "text(`${keyValue[keyCode]} typed, code for ${keyValue[keyCode - 26 + 7 ]}!`, 800, 300)",
    "}",
    "}",
    "function keyPressed(){",
    "if(keyCode + 7 <=90){",
    "recordedKeys.push(keyValue[keyCode + 7]);",
    "}",
    "else{",
    "recordedKeys.push(keyValue[keyCode - 26 + 7 ]);",
    "}"
  ];
  //player code
  //   inp = createInput('This is an input');
  //   inp.position(750, 300);
  //   inp.style('font-size', '24px');
  //   inp.size(500);

  button = createButton("Backspace");
  button.position(1250, 370);
  button.mousePressed(goBack);
  button.style("font-size", "24px");
  button.size(150);
}

function draw() {
  background("white");
  textSize(14);
  drawSprites();
  fill("white");

  stroke("white");
  line(800, 400, 1200, 400);

  //word shift is 7 since ladybug has 7 letters

  // if(keyCode + 7 <=90){
  //   recordedKeys.push(keyValue[keyCode + 7]);
  // }else{
  //   recordedKeys.push(keyValue[keyCode - 26 + 7 ]);
  // }

  textSize(32);
  let tempKeys = recordedKeys.join("");
  text(tempKeys, 800, 400);
  if (tempKeys == "ladybug") {
    challengeCompleted();
  }

  keyCode
    ? text(
        `${keyValue[keyCode]} typed, code for ${
          keyCode + 7 <= 90 ? keyValue[keyCode + 7] : keyValue[keyCode - 26 + 7]
        }!`,
        800,
        300
      )
    : null;

  inputText();
  screenCode();

  fill("red");
  ///TIMER CODE
  textSize(40);
  text(timer, width / 2, height / 2 - 30);
  if (frameCount % 60 == 0 && timer > 0) {
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer--;
  }
  if (timer == 0) {
    textSize(135);
    text("PERISH FOR ETERNITY", 10, height * 0.7);
    noLoop();
  }
  fill("black");
  textSize(20);
  text(
    "//this goes in setup\nkeyValue = {\n65: 'a',\n66: 'b',\n67:" +
    "'c',\n68: 'd',\n69: 'e',\n70: 'f',\n71: 'g',\n72: 'h',\n73: 'i',\n74: 'j',\n75: 'k',\n76: 'l',\n77: 'm',\n78:"+
    "'n',\n79: 'o',\n80: 'p',\n81: 'q',\n82: 'r',\n83: 's',\n84: 't',\n85: 'u',\n86: 'v',\n87: 'w',\n88: 'x',\n89: 'y',\n90: 'z'\n}",
    1500,
    50
  );
  fill("white");
  textSize(32);
}

function keyPressed() {
  fill("white");
  text(`${keyCode} typed, find ${keyCode + 7}!`, 800, 200);

  if (keyCode + 7 <= 90) {
    recordedKeys.push(keyValue[keyCode + 7]);
  } else {
    recordedKeys.push(keyValue[keyCode - 26 + 7]);
  }
}

function inputText() {
  fill("white");
  noStroke();
}

function screenCode() {
  textFont("consolas");
  noStroke();
  textSize(32);
  fill("white");
  textStyle(BOLD);
  text("//Crack the code by creating a cipher!", 600, 100);
  textSize(24);

  textSize(18);
  text(
    "//He is always watching. He never blinks.\nYour only hope of escaping is through\nthat temporial anomaly",
    1000,
    700
  );

  textStyle(NORMAL);
  text(
    "//Make the word ladybug appear on the line below \nto open the portal!",
    600,
    150
  );
  textSize(18);
  // text("psst, only trailing mice can play the maze", 50, 780);
  textSize(24);

  text(
    `${lines[0]}\n    ${lines[1]}  \n${lines[2]} \n${lines[3]} \n    ${
      lines[4]
    } \n    ${lines[5]} \n    ${lines[6]} \n    ${lines[7]} \n    ${
      lines[8]
    } \n    ${lines[9]} \n    ${lines[10]} \n    ${lines[11]} \n    ${
      lines[12]
    } \n    ${lines[13]} \n    ${lines[14]} \n    ${lines[15]} \n    ${
      lines[16]
    } \n    ${lines[17]} \n${lines[18]} \n${lines[19]} \n    ${
      lines[20]
    } \n    ${lines[21]} \n    ${lines[22]} \n    ${lines[23]} \n    ${
      lines[24]
    } \n    ${lines[25]}   
}`,
    20,
    50
  );
}

function goBack() {
  recordedKeys.pop();
}

function isValid(value) {
  return /^[ 0-9\=\+\-]*$/.test(value);
}
function isNumber(value) {
  return /^[ 0-9\.]*$/.test(value);
}

function submitChallenge() {
  if (looping === true) {
    falling = true;
  }
}

function challengeCompleted() {
  let a = createA("./insectory.html", "You caught the ladybug!");
  setCookie("bug8", true);
  a.position(300, 400);
  a.style("font-size", "32px");
  a.style("background", "yellow");
  console.log("game over");
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

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}
