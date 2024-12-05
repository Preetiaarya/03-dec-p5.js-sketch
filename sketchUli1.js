function setup() {
    createCanvas(800, 500);
  }
  
  function draw() {
    background(255, 250, 200);
 
    text("Uli Project",380,250);

    textAlign(CENTER,CENTER);
    stroke("black");
    circle(380,250,100);
     // Bottom-right.
  arc(400, 255, 100, 100, 0, HALF_PI);

  noFill();

  // Bottom-left.
  arc(400, 255, 100, 100, HALF_PI, PI);

  // Top-left.
  arc(400, 255, 100, 100, PI, PI + QUARTER_PI);

  // Top-right.
  arc(400, 255, 100, 100, PI + QUARTER_PI, TWO_PI);
    textSize(40);
    text("Uli",382,250);

    // text("अभद्र शब्द", 200, 120);
    // text("offensive words", 200, 400);
    // text("അപമാനിക്കുന്ന പദങ്ങൾ", 10, 270);
    // text("கெட்ட வார்த்தைகள்", 350, 270);
    text("🧠", 50,450); // Mind emoji
    text("⚙️", 400, 400); // Settings emoji
    text("👁️", 400,100); // Eye emoji
    text("📋",520,450);
    text("🗣️",320,200);
    text("💬", 100, 100); // Message emoji
    text("📱", 170, 250); // Phone emoji
    text("📸", 640, 380); // Instagram emoji
    text("🐦", 210, 400); // Twitter emoji
    text("👍", 700, 150); // Facebook emoji
    text("▶️", 480, 200); // YouTube emoji

}