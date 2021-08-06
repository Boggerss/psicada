/* global createCanvas, background, noFill, strokeWeight, stroke, ellipse,
 * fill, rect, arc, text
 * windowHeight, windowWidth, random, createA, noStroke, createDiv, textFont
 * createInput, createButton, createElement, textAlign, CENTER, textSize, loadImage
 * colorMode, RGB, width, height, bugsData, createSprite, drawSprites
 */

let button, input1, input2, input3, greeting, butterfree, grassField;
let bg;
let x, y;
let bugs;
let winButton;

let answers = [40, 44, 58];
let string;
let incorrect = 3;

function setup() {
  setCookie("backUrl", "./menu1.html");

  grassField = createSprite(1375, 164);
  var myAnimation = grassField.addAnimation(
    "squirm",
    "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2FgrassField.PNG?v=1628122076156"
  );

  butterfree = createSprite(1110, 340);
  var myAnimation = butterfree.addAnimation(
    "squirm",
    "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2Fbutterfree.gif?v=1628096035348"
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
  let div3 = createDiv(
    "To catch that butterfly, you'll need to catch these bugs first! \nCheck for missing semicolons and brackets!"
  );
  div3.addClass("text");
  let div4 = createDiv("");
  div4.addClass("code");

  x = 40;
  y = 40;

  let back = createA("./menu1.html", "Back");
  back.style("font-size", "32px");
  back.style("background", "yellow");
  back.style("z-index", "2000");
  back.position(1300, 950);

  winButton = createA(
    "./insectory.html",
    `You caught a ${bugsData.bug2.species}! Click here to go to insectory`
  );
  winButton.class("win-bug");
  winButton.position(360, 300);
  winButton.hide();
}

function draw() {
  rect(800, 0, 800, 400);
  butterfree.scale = 1.3;
  drawSprites();
}

function answer() {
  const name = {};
  name[input1.value()] = 1;
  name[input2.value()] = 2;
  name[input3.value()] = 3;

  console.log(name);

  for (let i = 0; i < 3; i++) {
    let answer = answers[i];
    console.log("answer: " + answer);
    console.log(name[answer]);
    if (name[answer]) {
      console.log("called");
      stroke("green");
      strokeWeight(5);
      noFill();
      if (i === 0) ellipse(120, 25, x, y);
      if (i === 1) ellipse(300, 150, x, y);
      if (i === 2) ellipse(60, 570, x, y);

      incorrect--;
    }
  }
  if (incorrect === 0) {
    fill("green");
    string = "Correct!";
    // text('40', 900, 1050);
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
  setCookie("bug2", true);
  winButton.show();
}

//cookies
function setCookie(cname, cvalue) {
  document.cookie =
    cname + "=" + cvalue + " ,expires=Mon, 20 May 2024 21:23:05 GMT , path/=";
  console.log(document.cookie);
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split("; ");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    if (c.indexOf(name) == 0) {
      if (c.length - 48 - name.length == -1) {
        return c.substring(name.length - 1, c.length - 48);
      }
      return c.substring(name.length, c.length - 48);
    }
  }
  return "";
}
