function setup() {
  createCanvas(1500, 800);
}

function draw() {
  background(231, 109, 103);

  // triangle(200,520,250,400,300,500);
  // line(230,515,230,550);
  // line(270,485,270,);
  textSize(56);
  fill(81, 78, 128);
  stroke(81, 78, 128);
  strokeWeight(1);
 
  // strokeWeight(2);
  text("Tattle Blog", 320, 380);
  fill("black");
  textStyle("Roboto-Regular");
  fill("white");
  strokeWeight(0);
  textSize(26);
  text("Process, Updates and Notes", 200, 450);
  text("From the team", 200, 500);

  //circle logo of tattle
  fill(81, 78, 128);
  circle(250, 350, 100);
  
  //ellipse
  stroke(231, 109, 103);
  strokeWeight(5);
  ellipse(251, 350, 70, 35);
  
  //line
  stroke(231, 109, 103);
  line(251, 400, 251, 370);
  
  stroke(231,109,103);
  // stroke("white");
  // arc(252, 250, 20, 80, 180, QUARTER_PI);
  arc(251, 366, 40, 100, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
  line(245,345,250,352);
  line(250,352,262,340);

}

