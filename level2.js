/* global createCanvas, background, noFill, strokeWeight, stroke, ellipse,
 * fill, rect, arc, text
 * windowHeight, windowWidth, random, createA, noStroke, createDiv, textFont
 * createInput, createButton, createElement, textAlign, CENTER, textSize, loadImage
 * colorMode, RGB, width, height
 */

let button, input1, input2, input3, greeting;
let bg;
let x, y;
let bee;
let grassField;
let winButton;

let answers = [12, 22, 28];
let string;
let incorrect = 3;

function setup() {
  setCookie("backUrl", "./menu2.html");
  grassField = createSprite(1248, 230);
  var myAnimation = grassField.addAnimation(
    "squirm",
    "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2Fb61c2abdd2e1abd354e6b0692cce6e37.gif?v=1628142290686"
  );

  bee = createSprite(1100, 268);
  var myAnimation = bee.addAnimation(
    "squirm",
    bugsData.bug3.url
  );

  let c = createCanvas(1440, 1024);
  c.position(0, 0);
  colorMode(RGB, 255);

  input1 = createInput();
  input1.position(1050, 800);
  input2 = createInput();
  input2.position(1050, 830);
  input3 = createInput();
  input3.position(1050, 860);
  button = createButton("submit");
  button.position(1095, 890);
  button.mousePressed(answer);

  // background(240);
  // bg = loadImage('https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2Flvl1-done.png?v=1628029844803');
  noStroke();
  textSize(32);
  textFont("Roboto");
  fill(0);
  text("Lines: ", 1050, 770);

  let div = createDiv("");
  div.addClass("gameDisplay");
  let div2 = createDiv("");
  div2.addClass("debugger");
  let div3 = createDiv("Where are the bugs in the code?");
  div3.addClass("text");
  let div4 = createDiv("");
  div4.addClass("code2");

  x = 40;
  y = 40;

  winButton = createA(
    "./insectory.html",
    `${bugsData.bug3.species}: You caught me! Click here to go to insectory`
  );
  winButton.class("win-bug");
  winButton.position(360, 300);
  winButton.hide();
  
  let back = createA('./menu2.html', "Back")
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

  // const name = input.value();
  rect(800, 0, 800, 400);
  bee.scale = 0.68;
  grassField.scale = 1.4;
  drawSprites();
}

function answer() {
  const name = {};
  name[input1.value()] = 1;
  name[input2.value()] = 2;
  name[input3.value()] = 3;

  console.log(name);

  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i];
    console.log("answer: " + answer);
    console.log(name[answer]);
    if (name[answer]) {
      console.log("called");
      stroke("green");
      strokeWeight(5);
      noFill();
      if (i === 0) ellipse(200, 280, x, y);
      if (i === 1) ellipse(210, 520, x, y);
      if (i === 2) ellipse(620, 665, x, y);

      incorrect--;
    }
  }
  if (incorrect === 0) {
    fill("green");
    string = "Correct!";
    challengeCompleted();
  } else {
    fill("red");
    string =
      "You have " +
      (3 - incorrect) +
      " correct and " +
      incorrect +
      " incorrect answers.";
  }
  textSize(24);
  noStroke();
  text(string, 900, 950);

  input1.value("");
  input2.value("");
  input3.value("");
}

function challengeCompleted() {
  setCookie("bug3", true);
  winButton.show();
}

//cookies
function setCookie(cname, cvalue) {
  document.cookie =
    cname + "=" + cvalue + " ,expires=Mon, 20 May 2024 21:23:05 GMT , path/=";
  console.log(document.cookie);
}