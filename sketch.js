var hr, min, seconds;
var picture, room;
function setup() {
  createCanvas(displayWidth, displayHeight-150);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES)
  console.log("seto=up angle");
  picture = loadImage("pic.png");
  room = loadImage('bedroom pic.jpg')
}

function draw() {
  background(room);
  hr = hour();
  min = minute();
  seconds = second();
  translate(600, 100);
  rotate(-90);
  if(hr>12){
    console.log("working");
    hr === hr-12
  }

  secondsAngle = map(seconds, 0, 60, 0, 360);
  hourAngle = map(hr, 0, 12, 0, 360); 
  minutesAngle = map(min, 0, 60, 0, 360); 
  //drawSprites();
  stroke("green");
  strokeWeight(8);
  fill("cyan")
  arc(0, 0, 150, 150, 0, secondsAngle, OPEN);
  stroke("red");
  strokeWeight(8)
  fill("cyan")
  arc(0, 0, 135, 135, 0, minutesAngle, OPEN);
  stroke("blue");
  strokeWeight(8)
  arc(0, 0, 120, 120, 0, hourAngle, OPEN);
  
  push()
  rotate(90)
  image(picture, -55, -55, 110, 110)
  pop()
  
  push();
  //seconds
  console.log("anglemode")
  rotate(secondsAngle);
  stroke("green")
  strokeWeight(7)
  line(0, 0, 80, 0);
  //console.log(line)
  pop();
  push();
  //minutes
  console.log("anglemode")
  rotate(minutesAngle);
  stroke("Red")
  strokeWeight(7)
  line(0, 0, 65, 0);
  //console.log(line)
  pop();
  push();
  //angleMode(DEGREES);
  console.log("anglemode")
  rotate(hourAngle);
  stroke("blue");
  strokeWeight(7)
  console.log("yay")
  line(0, 0, 50, 0);
  //console.log(line)
  pop();

  text(hour, 200, 300)
  //pushPop();
}