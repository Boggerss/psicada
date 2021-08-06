/* global createCanvas, background, noFill, strokeWeight, stroke, ellipse,
* fill, rect, arc, text, loadImage
* windowHeight, windowWidth, random, createA
*/

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.
let logo;
function preload() {
  logo = loadImage('https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2Fd77173e3-5308-416b-b5a9-7165a078f9f6.image.png?v=1628033334288');
}    

let backgroundImage; 
let butterfly;

function setup() {
  let c = createCanvas(1440, 1024)
  c.position(10,10)                  
  background(0);

    
 backgroundImage = createSprite(690, 310);
 var myAnimation = backgroundImage.addAnimation(
    "squirm",
  "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2FCustom_box_background_i_believe_in_pink_by_king_lulu_deer-dce971x.gif?v=1628283569143"
  );
  
 butterfly = createSprite(690, 310);
 var myAnimation = butterfly.addAnimation(
    "squirm",
  "https://cdn.glitch.com/07786385-3bbe-4cb3-afd6-93daf3a410b0%2Fbutterfree.gif?v=1628096035348"
  );

  
  let insectoryLink = createA('./insectory.html', 'Insectory');
  insectoryLink.position(1100, 900);
  insectoryLink.style('font-size', '32px')
  insectoryLink.style('background', 'yellow')
  
  // let start = createA('./game.html', "start");
  let start = createA('./menu.html','START');
  start.addClass('myClass');
  
  setCookie("backUrl", "./index.html");
  
}

function draw() {
  // Code here runs continuously
  background(237)
  drawSprites();
  backgroundImage.scale = 1.8;
  textSize(64)
  text( 'Welcome to Psicada, a game all about Bugs!', 70, 450)
  textSize(32)
  text( 'Please adjust your screen so that it fits the canvas', 400, 500)
  //logo
  image(logo, 1158, 6.2);

}

function setCookie(cname, cvalue){
  document.cookie = cname + "=" + cvalue + " ,expires=Mon, 20 May 2024 21:23:05 GMT , path/=";
  console.log(document.cookie);
}