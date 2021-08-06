/* global createCanvas, background, noFill, strokeWeight, stroke, ellipse,
* fill, rect, arc, text, createSprite, bugsData
* windowHeight, windowWidth, random, createA, getCookie
*/

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

let sprite1, sprite2;

function setup() {
  let c = createCanvas(1440, 1024)
  c.position(10,10)
  background(0);
  
  if(getCookie("bug1")){
    sprite2 = createSprite(775 + 237, 600);
    var myAnimation = sprite2.addAnimation("squirm", bugsData.bug1.url);
    sprite2.scale = 0.22
  }
  
  if(getCookie("bug2")){
    sprite1 = createSprite(190 + 237, 600);
    var myAnimation = sprite1.addAnimation("squirm", bugsData.bug2.url);
    sprite1.scale = 0.7
  
  }

  
  

  let debug = createA('./level1.html', "Challenge 1");
  debug.addClass('level-1');
  
  let coding = createA('./coding1.html', "Challenge 2");
  coding.class('level-2');
  
  let back = createA('./menu.html', "Back")
  back.position(100, 900)
  back.style("font-size", '32px')
  back.style("background", 'yellow')
  back.style("z-index", '2000')

}

function draw() {
  // Code here runs continuously
  background("#d7ecd9")
  
  
  textSize(72)
  text( 'Level 1', 600, 200)
  
  
  drawSprites();
}