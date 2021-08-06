/* global createCanvas, background, noFill, strokeWeight, stroke, ellipse,
* fill, rect, arc, text 
* windowHeight, windowWidth, random, createA
*/

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

function setup() {
  setCookie("backUrl", "./menu.html");
  
  let c = createCanvas(1440, 1024)
  c.position(10,10)
  background(0);

  let level1 = createA('./menu1.html', "Level 1");
  level1.addClass('level-1');
  
  let level2 = createA('./menu2.html', "Level 2");
  level2.class('level-2');
  
  let level3 = createA('./menu3.html', "Level 3");
  level3.class('level-3');
  
  let level4 = createA('./menu4.html', "Level 4");
  level4.class('level-4');
  
  let insectoryLink = createA('./insectory.html', 'Insectory');
  insectoryLink.position(50, 125);
  insectoryLink.style('background', 'yellow');
  insectoryLink.style('font-size', '32px');
}

function draw() {
  // Code here runs continuously
  background("#d5d6ea")
  // text( 'menu page here', 20, 20);
}
function setCookie(cname, cvalue){
  document.cookie = cname + "=" + cvalue + " ,expires=Mon, 20 May 2024 21:23:05 GMT , path/=";
  console.log(document.cookie);
}