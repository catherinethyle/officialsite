var count = 0;
var nameP;
var subscribed_msg;
var myClientName;
var mainTopicName = "flowerField";
var topic_path;
var label1;
var clientInput;
var submitBtn1;
var message_text;
var mqtt;
var playState = false;
var lox = 0;
var loy = 0;
var rr = 200;
var gg = 200;
var bb = 200;

let myFlower1;
let myRose;
let myFrog;
let mySapling;
let mySunflower;
let myFlower2;
let myFlower3;
let myFlower4;
let myFlower5;
let myFlower6;
let myBee;
let myMushroom;
let myButterfly;
let myFrog2;
let myWorm;
let myFish;
let myLily;
let myPlant;

var img1;
var img2;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var img12;
var img13;
var img14;
var img15;
var img16;
var img17;
var img18;
var img19;
var img20;

let mouseState = 1;

function preload() {
  img1 = loadImage("https://catisartist.com/images/bee-01.png");
  img2 = loadImage("https://catisartist.com/images/butterfly-01.png");
  img4 = loadImage("https://catisartist.com/images/eraser-01.png");
  img5 = loadImage("https://catisartist.com/images/fish-01.png");
  img7 = loadImage("https://catisartist.com/images/flower1-01.png");
  img8 = loadImage("https://catisartist.com/images/flower3-01.png");
  img9 = loadImage("https://catisartist.com/images/frog-01.png");
  img10 = loadImage("https://catisartist.com/images/lilypad-01.png");
  img11 = loadImage("https://catisartist.com/images/mushroom-01.png");
  img12 = loadImage("https://catisartist.com/images/pondplant-01.png");
  img13 = loadImage("https://catisartist.com/images/sunflower-01.png");
  img14 = loadImage("https://catisartist.com/images/worm-01.png");
  img16 = loadImage("https://catisartist.com/images/background-01.png");
  img17 = loadImage("https://catisartist.com/images/background2-01.png");
  img18 = loadImage("https://catisartist.com/images/eraser2-01.png");
}

function setup() {
  createCanvas (1599,1000);
//background(0, 255, 0);
  fill(0);
  // initialize object
  myFlower1 = new Stamp (img1, color(10, 150, 0), width/2, height/2, false);
  myRose = new Stamp (img2, color(10, 250, 0), width/2, height/2, false);
  myFrog = new Stamp (img4, color(10, 250, 0), width/2, height/2, false);
  mySapling = new Stamp (img5, color(10, 250, 0), width/2, height/2, false);
  mySunflower = new Stamp (img6, color(10, 250, 0), width/2, height/2, false);
  myFlower2 = new Stamp (img7, color(10, 150, 0), width/2, height/2, false);
  myFlower3 = new Stamp (img8, color(10, 150, 0), width/2, height/2, false);
  myFlower4 = new Stamp (img9, color(10, 150, 0), width/2, height/2, false);
  myFlower5 = new Stamp (img10, color(10, 150, 0), width/2, height/2, false);
  myFlower6 = new Stamp (img11, color(10, 150, 0), width/2, height/2, false);
  myBee = new Stamp (img12, color(10, 150, 0), width/2, height/2, false);
  myMushroom = new Stamp (img13, color(10, 150, 0), width/2, height/2, false);
  myButterfly = new Stamp (img14, color(10, 150, 0), width/2, height/2, false);
  myFrog2 = new Stamp (img15, color(10, 150, 0), width/2, height/2, false);

  //image should be background
  background(img17);

  startDialogForClient();
}

function startDialogForClient() {
  // label1 = createP("Welcome Gardener!");
  // label1.size(200,30);
  // label1.style('color', '#FFF');
  // label1.style('font-size', '18px');
  // label1.position(100 + width/2-85,300);
  //
  // clientInput = createInput("Your name");
  // clientInput.style('font-size', '15px');
  // clientInput.size(200,30);
  // clientInput.position(100 + width/2-85,350);
  //
  // submitBtn1 = createButton("Let's start planting ->");
  // submitBtn1.style('font-size', '18px');
  // submitBtn1.style('background-color', '#888');
  // submitBtn1.size(200,30);
  // submitBtn1.position(100 + width/2-85,400);
  // submitBtn1.mousePressed(startMQTT);
}

function AfterDialogClient() {
  label1.style('visibility', 'hidden');
  clientInput.style('visibility', 'hidden');
  submitBtn1.style('visibility', 'hidden');
}

function startMQTT() {
   console.log('Answer is -- ', clientInput.value());
   myClientName = clientInput.value();
   topic_pathD = mainTopicName + '/' + myClientName + '/' + "posd";
   topic_pathG = mainTopicName + '/' + myClientName + '/' + "posg";
   topic_pathH = mainTopicName + '/' + myClientName + '/' + "posh";
   console.log(topic_path);
   MQTTconnect(myClientName);
}

function makeRandomColor(){
  rr = int(random(255));
  gg = int(random(255));
  bb = int(random(255));
}

function mouseReleased() {
  console.log("released");
  mouseState = 1;
}

function draw() {
	// background(120);
  if (mouseState) {
      count++;
      var sizex = 10;
      var sizey = 10;
        if (mouseIsPressed) {
          var lox = (mouseX += random(10));
          var loy = (mouseY += random(10));

          if (keyCode == SHIFT) {
          console.log("Shift");
          //client.publish("testgrp3/group6/posg", xr + "," + yr, 0, true );
            publishMouseMessageG(lox,loy,rr,gg,bb);
            // do minus of height and width to center of cropped image
            image(img1,lox-25,loy-25,50,50)
            mouseState = 0;
          } else if (keyCode == UP_ARROW) {
          console.log("Up");
          //client.publish("testgrp3/group6/posh", xr + "," + yr, 0, true);
            publishMouseMessageH(lox,loy,rr,gg,bb);
            image(img2,lox-25,loy-25,50,50)
            mouseState = 0;
          } else if (keyCode == DOWN_ARROW) {
          console.log("Down");
          //client.publish("testgrp3/group6/posh", xr + "," + yr, 0, true);
            publishMouseMessageH(lox,loy,rr,gg,bb);
            image(img10,lox-50,loy-50,100,100)
            mouseState = 0;
          } else if (keyCode == LEFT_ARROW) {
          console.log("Left");
          //client.publish("testgrp3/group6/posh", xr + "," + yr, 0, true);
            publishMouseMessageH(lox,loy,rr,gg,bb);
            image(img5,lox-25,loy-25,50,50)
            mouseState = 0;
          } else if (keyCode == RIGHT_ARROW) {
          console.log("Right");
          //client.publish("testgrp3/group6/posh", xr + "," + yr, 0, true);
            publishMouseMessageH(lox,loy,rr,gg,bb);
            image(img14,lox-25,loy-25,50,50)
            mouseState = 0;
          } else if (keyCode == ESCAPE) {
          console.log("Escape");
          //client.publish("testgrp3/group6/posh", xr + "," + yr, 0, true);
            publishMouseMessageH(lox,loy,rr,gg,bb);
            image(img8,lox-50,loy-50,100,100)
            mouseState = 0;
          } else if (keyCode == ENTER) {
          console.log("Enter");
          //client.publish("testgrp3/group6/posh", xr + "," + yr, 0, true);
            publishMouseMessageH(lox,loy,rr,gg,bb);
            image(img9,lox-35,loy-35,75,75)
            mouseState = 0;
          } else if (keyCode == BACKSPACE) {
          console.log("Backspace");
          //client.publish("testgrp3/group6/posh", xr + "," + yr, 0, true);
            publishMouseMessageH(lox,loy,rr,gg,bb);
            image(img4,lox-50,loy-50,100,100)
            mouseState = 0;
          } else if (keyCode == ALT) {
          console.log("Alt");
          //client.publish("testgrp3/group6/posh", xr + "," + yr, 0, true);
            publishMouseMessageH(lox,loy,rr,gg,bb);
            image(img11,lox-25,loy-25,50,50)
            mouseState = 0;
          } else if (keyCode == TAB) {
          console.log("Tab");
          //client.publish("testgrp3/group6/posh", xr + "," + yr, 0, true);
            publishMouseMessageH(lox,loy,rr,gg,bb);
            image(img12,lox-50,loy-50,100,100)
            mouseState = 0;
          } else if (keyCode == 32) {
          console.log("Space");
          //client.publish("testgrp3/group6/posh", xr + "," + yr, 0, true);
            publishMouseMessageH(lox,loy,rr,gg,bb);
            image(img13,lox-50,loy-50,100,100)
            mouseState = 0;
          } else if (keyCode == 46) {
          console.log("Delete");
          //client.publish("testgrp3/group6/posh", xr + "," + yr, 0, true);
            publishMouseMessageH(lox,loy,rr,gg,bb);
            image(img18,lox-50,loy-50,100,100)
            mouseState = 0;
          } else {
            publishMouseMessageD(lox,loy,rr,gg,bb);
            image(img7,lox-50,loy-50,100,100)
            mouseState = 0;
          //client.publish("testgrp3/group6/posd", xr + "," + yr, 0, true );
          }
        }
  }
}

function publishMouseMessageD(lox,loy,r,g,b) {
  // message = new Paho.MQTT.Message( lox + "_"+ loy + "_" + r +  "_" + g +  "_" + b );
  // //message.destinationName = topic_path;
  // message.destinationName = topic_pathD;
  // message.retained=false;
  // mqtt.send(message);
}

function publishMouseMessageG(lox,loy,r,g,b) {
  // message = new Paho.MQTT.Message( lox + "_"+ loy + "_" + r +  "_" + g +  "_" + b );
  // //message.destinationName = topic_path;
  // message.destinationName = topic_pathG;
  // message.retained=false;
  // mqtt.send(message);
}

function publishMouseMessageH(lox,loy,r,g,b) {
  // message = new Paho.MQTT.Message( lox + "_"+ loy + "_" + r +  "_" + g +  "_" + b );
  // //message.destinationName = topic_path;
  // message.destinationName = topic_pathH;
  // message.retained=false;
  // mqtt.send(message);
}

class Stamp {
  arguements
  constructor (tempP, tempC, tempXpos, tempYpos, tc) {
    this.p = tempP;
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.circ = tc;
  }

  display() {
   image (this.p, this.xpos, this.ypos, 100, 100);
  }

  updateMouse (){
    this.xpos = mouseX;
    this.ypos = mouseY;
  }

  getPos (tx, ty){
    this.xpos = tx;
    this.ypos = ty;
  }
}

function onMessageArrived(msg){
   //console.log("IN");
   out_msg="Arrived Message received: '"+msg.payloadString + "', ";
   out_msg=out_msg+"Received Topic: '"+msg.destinationName+ "'";
   var tempbdArr = split(msg.payloadString,"_");
   var tempTopicArr = split(msg.destinationName,"/");
   //console.log(tempTopicPath);

   tempTopicArr = ['flowerField', 'catLe', 'posd'];
   noStroke();
   // drawing stuff ex
   // fill(tempbdArr[2],tempbdArr[3],tempbdArr[4]);
   // ellipse(tempbdArr[0],tempbdArr[1], 20,20);
   // image(img1,tempbdArr[0],tempbdArr[1],300,300)

   if (tempTopicArr[1] == "player1") {
     if (tempTopicArr[2] == "posd") {
     // image(img1, tempArr[0], tempArr[1],20,20)
     }
   }

   if (tempTopicArr[1] == "player1") {
     if (tempTopicArr[2] == "posg") {
     // image(img1, tempArr[0], tempArr[1],20,20)
     }
   }

   if (tempTopicArr[1] == "player1") {
     if (tempTopicArr[2] == "posh") {
     // image(img1, tempArr[0], tempArr[1],20,20)
     }
   }

   if (tempTopicArr[1] == "player2") {
     // image(img2, tempArr[0], tempArr[1],20,20)
   }

   console.log(tempTopicArr[1]);
}
