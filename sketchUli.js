function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(231, 109, 103);
  // textAlign(CENTER, CENTER);

  fill(81, 78, 128);
  stroke(81, 78, 128);
  strokeWeight(1);
  textSize(15);
  text("Uli: Advancing Multilingual Safety Tools Against Gendered Abuse",10,40);


  // text("Uli builds a multilingual slur list to combat gendered abuse,", 10, 40);
  // text(" addressing the lack of linguistic diversity in online safety", 10, 60);
  // text("tools for Indian languages.", 10, 80);

  stroke(81, 78, 128);
  circle(240, 260, 150);//center circle
  
  
  textSize(56);
  text("🤝", 245, 255);
  text("⚙️", 180, 264);
  text("💻", 220, 315);

  textSize(14);//textsize
  strokeWeight(0);

  text("Hindi:", 200, 100);//hindi harm word list
  text("अभद्र शब्द", 200, 120);
  text("----------", 200, 140);

  text("Malayalam:", 10, 250);//malayalam harm word list
  text("അപമാനിക്കുന്ന പദങ്ങൾ", 10, 270);
  text("-----------------", 10, 290);

  text("English:", 200, 380);//english harm word list
  text("offensive words", 200, 400);
  text("---------------", 200, 420);

  text("Tamil:", 350, 250);//tamil harm word list
  text("கெட்ட வார்த்தைகள்", 350, 270);
  text("-------------", 350, 290);
    
  textSize(56);
  text("🧠", 20,100); // Mind emoji
  text("⚙️", 400, 400); // Settings emoji
  text("👁️", 400,100); // Eye emoji

  text("🧠", 100,360); // Brain emoji
  text("⚙️",100,150); // Gear emoji
  text("👀",20,450); // Eyes emoji

  text("📋",350,480);
  text("🗣️",320,200);

  // text("💬", 100, height / 2); // Message emoji
  // text("📱", 170, height / 2); // Phone emoji
  // text("📸", 240, height / 2); // Instagram emoji
  // text("🐦", 310, height / 2); // Twitter emoji
  // text("👍", 380, height / 2); // Facebook emoji
  // text("▶️", 450, height / 2); // YouTube emoji
};