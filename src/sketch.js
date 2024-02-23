// function setup() {
//   // These lines are fitting our canvas
//   // where we want in the DOM
//   // so that we can manipulate its style
//   // easier
//   let myCanvas = createCanvas(400, 400);
//   myCanvas.parent("canvas-parent");
// }

// function draw() {
//   background(220);
// }
function setup() {
  createCanvas(400, 400);
  background(252,188,199); 
  fill("rgb(230,125,201)")
  rect(0,200,200,200);
  rect(200,0,200,200);
  
}

function draw() {
  //---------- Background -------------------------
  push();
    // TODO:
    // Put your background code in here
    // (after the push and before the pop below).
    // Why do you think we put the background code
    // BEFORE the creature code?

  pop();

  //---------- Creature--- -------------------------
  push();
    translate(200, 400);
    //legs
    fill(255);
    arc(-30,-50,-100,-100,100, PI);
    arc(30,-50,100,-100,100, PI);
  //arms
    ellipse(-100,-200,100,50);
    ellipse(100,-200,100,50);
  //body
    ellipse(0,-130,200,230); 
    noStroke();
    fill("rgb(121,121,245)");
    ellipse(0,-116,200,200);
  //ears
    stroke(1);
    fill(255);
    triangle(100,-350,0,-350,50,-400); 
    triangle(-100,-350,0,-350,-50,-400); 
    ellipse(0,-300,200,150); //head
    fill(255,255,0);
    ellipse(0,-275,30,15); //nose
    fill(0);
    ellipse(-50,-300,10,20); //left eye
    ellipse(50,-300,10,20); //right eye
  //bow
    fill(255,0,0);
    ellipse(50,-350,30); //middle bow
    ellipse(20,-350,30,40); //left bow
    ellipse(80,-350,30,40); //right bow
    ellipse(30,-350,8,15);
    ellipse(70,-350,8,15);
  //whiskies
    line(-80,-300,-400,-400);
    line(80,-300,400,-400);
    line(-80,-300,-400,-300);
    line(80,-300,400,-300);
    line(-80,-300,-400,-200);
    line(80,-300,400,-200);
  pop();
}