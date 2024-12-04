function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(220);
    circle(250,250,150);

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

    textSize(16);
    text("🤝", 150, 290);
    text("⚙️", 210, 175);
    text("✊", 250, 345);
  };