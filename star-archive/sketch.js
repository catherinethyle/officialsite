let gameState = 'title';
let font;
let braceletDiscovery = false;
let braceletResultsDisplay;
let cardsDiscovery = false;
let cardsResultsDisplay;
let cootieDiscovery = false;
let cootieResultsDisplay;
let dsiDiscovery = false;
let dsiResultsDisplay;
let glCandyDiscovery = false;
let glCandyResultsDisplay;
let hatDiscovery = false;
let hatResultsDisplay;
let lockedResultsDisplay;
let lpsDiscovery = false;
let lpsResultsDisplay;
let lycheeDiscovery = false;
let lycheeResultsDisplay;
let mouseDiscovery = false;
let mouseResultsDisplay;
let origamiStarDiscovery = false;
let origamiStarResultsDisplay;
let pcDiscovery = false;
let pcResultsDisplay;
let pezDiscovery = false;
let pezResultsDisplay;
let rollerSkatesDiscovery = false;
let rollerSkatesResultsDisplay;
let wiiDiscovery = false;
let wiiResultsDisplay;
let startTime = 0;
let timeInt = 2700; //30sec
let timeFrame;
let song;
let skyTheme = true;
let randomIndexIntro;
let randomIndexOutro;
let intro = [{
  word: "Howdy, "
}, {
  word: "Hi there, "
}, {
  word: "Hello, "
}, {
  word: "Oh my, "
}];

let outroDay = [{
  word: "I have to leave from swim practice "
}, {
  word: "We're going to go visit my grandma "
}, {
  word: "My dad just got home from work "
}, {
  word: "We're getting ready to go to the park "
}, {
  word: "My mom is calling me "
}, {
  word: "I have to go do my homework "
}, {
  word: "We're going to go to the library "
}]

let outroNight = [{
  word: "We're going to watch a Jackie Chan movie "
}, {
  word: "It's way past my bed time "
}, {
  word: "We're getting ready to play hide and go seek "
}, {
  word: "We're going to go eat some ice cream (we have mint chip <3) "
}, {
  word: "I need to go brush my teeth "
}];

function preload() {
  bg = loadImage('img/bg.png');
  bg2 = loadImage('img/bg2.png');
  blankHolder = loadImage('img/blank.png');
  braceletImg = loadImage('img/bracelet.png');
  braceletHover = loadImage('img/bracelethover.png');
  braceletClick = loadImage('img/braceletclick.png');
  braceletNightImg = loadImage('img/braceletnight.png');
  braceletResults = loadImage('img/braceletresults.png');
  cardsImg = loadImage('img/cards.png');
  cardsHover = loadImage('img/cardshover.png');
  cardsClick = loadImage('img/cardsclick.png');
  cardsNightImg = loadImage('img/cardsnight.png');
  cardsResults = loadImage('img/cardsresults.png');
  clockGreenImg = loadImage('img/clockgreenday.gif');
  cootieImg = loadImage('img/cootie.png');
  cootieHover = loadImage('img/cootiehover.png');
  cootieClick = loadImage('img/cootieclick.png');
  cootieNightImg = loadImage('img/cootienight.png');
  cootieResults = loadImage('img/cootieresults.png');
  cornerImg = loadImage('img/logo.png');
  downImg = loadImage('img/down.png');
  downImg2 = loadImage('img/down2.png');
  dsiImg = loadImage('img/dsi.png');
  dsiClick = loadImage('img/dsiclick.png');
  dsiHover = loadImage('img/dsihover.png');
  dsiNightImg = loadImage('img/dsinight.png');
  dsiResults = loadImage('img/dsiresults.png');
  endResultImg = loadImage('img/results.png');
  exitImg = loadImage('img/x.png');
  exitImg2 = loadImage('img/x2.png');
  font = loadFont('txt/sourceCodeProSB.ttf');
  gameOverScreenImg = loadImage('img/gameoverscreen.png');
  glCandyImg = loadImage('img/glcandy.png');
  glCandyClick = loadImage('img/glcandyclick.png');
  glCandyHover = loadImage('img/glcandyhover.png');
  glCandyNightImg = loadImage('img/glcandynight.png');
  glCandyResults = loadImage('img/glcandyresults.png');
  hatImg = loadImage('img/hat.png');
  hatClick = loadImage('img/hatclick.png');
  hatHover = loadImage('img/hathover.png');
  hatNightImg = loadImage('img/hatnight.png');
  hatResults = loadImage('img/hatresults.png');
  howToPlay = loadImage('img/instruction.png');
  lightingImg = loadImage('img/sunlight.png');
  lightingImg2 = loadImage('img/sunlight2.png');
  lockedResults = loadImage('img/lockitem.png');
  lpsImg = loadImage('img/lps.png');
  lpsHover = loadImage('img/lpshover.png');
  lpsClick = loadImage('img/lpsclick.png');
  lpsNightImg = loadImage('img/lpsnight.png');
  lpsResults = loadImage('img/lpsresults.png');
  lycheeImg = loadImage('img/lychee.png');
  lycheeHover = loadImage('img/lycheehover.png');
  lycheeClick = loadImage('img/lycheeclick.png');
  lycheeNightImg = loadImage('img/lycheenight.png');
  lycheeResults = loadImage('img/lycheeresults.png');
  mouseImg = loadImage('img/mouse.png');
  mouseHover = loadImage('img/mousehover.png');
  mouseClick = loadImage('img/mouseclick.png');
  mouseNightImg = loadImage('img/mousenight.png');
  mouseResults = loadImage('img/mouseresults.png');
  nextImg = loadImage('img/next.png');
  nextImg2 = loadImage('img/next2.png');
  origamiStarImg = loadImage('img/luckystar.png');
  origamiStarHover = loadImage('img/luckystarhover.png');
  origamiStarClick = loadImage('img/luckystarclick.png');
  origamiStarNightImg = loadImage('img/luckystarnight.png');
  origamiStarResults = loadImage('img/luckystarresults.png')
  pcImg = loadImage('img/pc.png');
  pcHover = loadImage('img/pchover.png');
  pcClick = loadImage('img/pcclick.png');
  pcNightImg = loadImage('img/pcnight.png');
  pcResults = loadImage('img/pcresults.png');
  pezImg = loadImage('img/pez.png');
  pezHover = loadImage('img/pezhover.png');
  pezClick = loadImage('img/pezclick.png');
  pezNightImg = loadImage('img/peznight.png');
  pezResults = loadImage('img/pezresults.png');
  rollerSkatesImg = loadImage('img/skates.png');
  rollerSkatesHover = loadImage('img/skateshover.png');
  rollerSkatesClick = loadImage('img/skatesclick.png');
  rollerSkatesNightImg = loadImage('img/skatesnight.png');
  rollerSkatesResults = loadImage('img/skatesresults.png');
  shrubsImg = loadImage('img/shrubs.png');
  shrubsNightImg = loadImage('img/shrubsnight.png');
  wiiImg = loadImage('img/wii.png');
  wiiHover = loadImage('img/wiihover.png');
  wiiClick = loadImage('img/wiiclick.png');
  wiiNightImg = loadImage('img/wiinight.png');
  wiiResults = loadImage('img/wiiresults.png');
  playAgainImg = loadImage('img/playagain.png');
  playAgainImg2 = loadImage('img/playagain2.png');
  skyDayImg = loadImage('img/skyday.png');
  skyDayCloud = loadImage('img/skydaycloud.png');
  skyDayLightImg = loadImage('img/skydaylight.png');
  skyDayLight2Img = loadImage('img/skydaylight2.png');
  skyDaySun = loadImage('img/skydaysun.png');
  skySunImg = loadImage('img/skydaysun.gif');
  skyNightDesk1Img = loadImage('img/skynightupper.png');
  skyNightDesk2Img = loadImage('img/skynightlower.png');
  skyNightImg = loadImage('img/skynight.png');
  skyNightLightImg = loadImage('img/skynightlight.png');
  skyNightLight2Img = loadImage('img/skynightlight2.png');
  skyNightMoon = loadImage('img/skynightmoonstar.gif');
  skyNightMoonThumbnail = loadImage('img/skynightmoon.png');
  skySelectionImg = loadImage('img/skyscreen.png');
  startImg = loadImage('img/start.png');
  startImg2 = loadImage('img/start2.png');
  titleImg = loadImage('img/title.gif');
  upImg = loadImage('img/up.png');
  upImg2 = loadImage('img/up2.png');
  viewResultsImg = loadImage('img/viewresults.png');
  viewResultsImg2 = loadImage('img/viewresults2.png');
}

function setup() {
  let c = createCanvas(650, 400);
  c.parent("p5sketch");
  frameRate(60); //set frameRate
  textFont(font);
  angleMode(DEGREES);
  song = loadSound('snd/mixkit-the-greatest-comeback-1079.mp3');
  randomIndexIntro = int(random(intro.length));
  randomIndexOutroDay = int(random(outroDay.length));
  randomIndexOutroNight = int(random(outroNight.length));

  start = new Clickable();
  start.locate(525, 250);
  start.color = '#d9d1a000';
  start.text = "";
  start.strokeWeight = 0;
  start.image = startImg;
  start.fitImage = true;
  start.width = 75;
  start.height = 30;
  start.onHover = function() {
    start.imageScale = 1.2;
    start.image = startImg2;
  }
  start.onPress = function() {
    gameState = 'skySelection';
    //timer functionality
    startTime = frameCount;
    timeFrame = startTime+timeInt;
    console.log(startTime);
    console.log(timeFrame);
  }
  start.onOutside = function() {
    start.imageScale = 1.0;
    start.image = startImg;
  }

  backgroundTrack = new Clickable();
  backgroundTrack.locate(50, 550);
  backgroundTrack.color = '#ffab3d';
  backgroundTrack.textFont = "font";
  backgroundTrack.text = "BGM";
  backgroundTrack.strokeWeight = 0;
  backgroundTrack.width = 30;
  backgroundTrack.height = 25;
  backgroundTrack.onHover = function() {
    backgroundTrack.width = 35;
    backgroundTrack.height = 30;
  }
  backgroundTrack.onPress = function() {
    if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
  }
  backgroundTrack.onOutside = function() {
    backgroundTrack.width = 30;
    backgroundTrack.height = 25;
  }

  daySelection = new Clickable();
  daySelection.locate(175, 125);
  daySelection.color = '#afdfff';
  daySelection.text = "";
  daySelection.strokeWeight = 0;
  daySelection.image = skyDaySun;
  daySelection.fitImage = true;
  daySelection.width = 150;
  daySelection.height = 150;
  daySelection.onHover = function() {
    daySelection.imageScale = 1.2;
  }
  daySelection.onPress = function() {
    skyTheme = true;
  }
  daySelection.onOutside = function() {
    daySelection.imageScale = 1.0;
  }

  nightSelection = new Clickable();
  nightSelection.locate(350, 125);
  nightSelection.color = '#5b58a0';
  nightSelection.text = "";
  nightSelection.strokeWeight = 0;
  nightSelection.image = skyNightMoonThumbnail;
  nightSelection.fitImage = true;
  nightSelection.width = 150;
  nightSelection.height = 150;
  nightSelection.onHover = function() {
    nightSelection.imageScale = 1.2;
  }
  nightSelection.onPress = function() {
    skyTheme = false;
  }
  nightSelection.onOutside = function() {
    nightSelection.imageScale = 1.0;
  }


  nextSky = new Clickable();
  nextSky.locate(300, 300);
  nextSky.color = '#d9d1a000';
  nextSky.text = "";
  nextSky.strokeWeight = 0;
  nextSky.image = nextImg;
  nextSky.fitImage = true;
  nextSky.width = 70;
  nextSky.height = 30;
  nextSky.onHover = function() {
    nextSky.imageScale = 1.2;
    nextSky.image = nextImg2;
  }
  nextSky.onPress = function() {
    gameState = 'instruction';
  }
  nextSky.onOutside = function() {
    nextSky.imageScale = 1.0;
    nextSky.image = nextImg;
  }

  next = new Clickable();
  next.locate(300, 300);
  next.color = '#d9d1a000';
  next.text = "";
  next.strokeWeight = 0;
  next.image = nextImg;
  next.fitImage = true;
  next.width = 70;
  next.height = 30;
  next.onHover = function() {
    next.imageScale = 1.2;
    next.image = nextImg2;
  }
  next.onPress = function() {
    gameState = 'mainGame';
    frameCount = 0;
  }
  next.onOutside = function() {
    next.imageScale = 1.0;
    next.image = nextImg;
  }

  exit = new Clickable();
  exit.locate(600, 25);
  exit.color = '#d9d1a000';
  exit.text = "";
  exit.strokeWeight = 0;
  exit.image = exitImg;
  exit.fitImage = true;
  exit.width = 25;
  exit.height = 25;
  exit.onHover = function() {
    exit.imageScale = 1.2;
    exit.image = exitImg2;
  }
  exit.onPress = function() {
    gameState = 'mainGame';
    frameCount = 0;
  }
  exit.onOutside = function() {
    exit.imageScale = 1.0;
    exit.image = exitImg;
  }

  up = new Clickable();
  up.locate(325, 25);
  up.color = '#dddddd00';
  up.text = "";
  up.strokeWeight = 0;
  up.image = upImg;
  up.fitImage = true;
  up.width = 37;
  up.height = 30;
  up.onHover = function() {
    up.imageScale = 1.2;
    up.image = upImg2;
  }
  up.onPress = function() {
    gameState = 'mainGame';
  }
  up.onOutside = function() {
    up.imageScale = 1.0;
    up.image = upImg;
  }

  down = new Clickable();
  down.locate(325, 350);
  down.color = '#dddddd00';
  down.text = "";
  down.strokeWeight = 0;
  down.image = downImg;
  down.fitImage = true;
  down.width = 37;
  down.height = 30;
  down.onHover = function() {
    down.imageScale = 1.2;
    down.image = downImg2;
  }
  down.onPress = function() {
    gameState = 'mainGameExpand';
  }
  down.onOutside = function() {
    down.imageScale = 1.0;
    down.image = downImg;
  }

  bracelet = new Clickable();
  bracelet.locate(150, 305);
  bracelet.color = '#d9d1a000';
  bracelet.textSize = 3;
  bracelet.textFont = font;
  bracelet.text = "";
  bracelet.strokeWeight = 0;
  bracelet.image = braceletImg;
  bracelet.fitImage = true;
  bracelet.width = 100;
  bracelet.height = 100;
  let braceletPopUp = braceletHover;
  bracelet.onHover = function() {
    bracelet.imageScale = 1.2;
    image(braceletPopUp, 0, 0); //125, 30
  }
  bracelet.onPress = function() {
    braceletPopUp = braceletClick;
    braceletDiscovery = true;
  }
  bracelet.onOutside = function() {
    bracelet.imageScale = 1.0;
    braceletPopUp = braceletHover;
  }

  cards = new Clickable();
  cards.locate(200, 250);
  cards.color = '#d9d1a000';
  cards.textSize = 3;
  cards.textFont = font;
  cards.text = "";
  cards.strokeWeight = 0;
  cards.image = cardsImg;
  cards.fitImage = true;
  cards.width = 40;
  cards.height = 40;
  let cardsPopUp = cardsHover;
  cards.onHover = function() {
    cards.imageScale = 1.2;
    image(cardsPopUp, 0, 0); //125, 30
  }
  cards.onPress = function() {
    cardsPopUp = cardsClick;
    cardsDiscovery = true;
  }
  cards.onOutside = function() {
    cards.imageScale = 1.0;
    cardsPopUp = cardsHover;
  }

  cootieCatcher = new Clickable();
  cootieCatcher.locate(300, 255);
  cootieCatcher.color = '#d9d1a000';
  cootieCatcher.text = "";
  cootieCatcher.strokeWeight = 0;
  cootieCatcher.image = cootieImg;
  cootieCatcher.fitImage = true;
  cootieCatcher.width = 50;
  cootieCatcher.hight = 50;
  let cootiePopUp = cootieHover;
  cootieCatcher.onHover = function() {
    cootieCatcher.imageScale = 1.2;
    image(cootiePopUp, 0, 0);
  }
  cootieCatcher.onPress = function() {
    cootiePopUp = cootieClick;
    cootieDiscovery = true;
  }
  cootieCatcher.onOutside = function() {
    cootieCatcher.imageScale = 1.0;
    cootiePopUp = cootieHover;
  }

  dsi = new Clickable();
  dsi.locate(380, 220);
  dsi.color = '#d9d1a000';
  dsi.text = "";
  dsi.strokeWeight = 0;
  dsi.image = dsiImg;
  dsi.width = 80;
  dsi.height = 80;
  let dsiPopUp = dsiHover;
  dsi.onHover = function() {
    dsi.imageScale = 1.2;
    image(dsiPopUp, 0, 0);
  }
  dsi.onPress = function() {
    dsiPopUp = dsiClick;
    dsiDiscovery = true;
  }
  dsi.onOutside = function() {
    dsi.imageScale = 1.0;
    dsiPopUp = dsiHover;
  }

  hat = new Clickable();
  hat.locate(335, 55);
  hat.color = '#d9d1a000';
  hat.text = "";
  hat.strokeWeight = 0;
  hat.image = hatImg;
  hat.width = 165;
  hat.height = 165;
  let hatPopUp = hatHover;
  hat.onHover = function() {
    hat.imageScale = 1.2;
    image(hatPopUp, 0, 0);
  }
  hat.onPress = function() {
    hatPopUp = hatClick;
    hatDiscovery = true;
  }
  hat.onOutside = function() {
    hat.imageScale = 1.0;
    hatPopUp = hatHover;
  }

  goodLuckCandy = new Clickable();
  goodLuckCandy.locate(245, 240);
  goodLuckCandy.color = '#d9d1a000';
  goodLuckCandy.text = "";
  goodLuckCandy.strokeWeight = 0;
  goodLuckCandy.image = glCandyImg;
  goodLuckCandy.fitImage = true;
  goodLuckCandy.width = 30;
  goodLuckCandy.height = 30;
  let glCandyPopUp = glCandyHover;
  goodLuckCandy.onHover = function() {
    goodLuckCandy.imageScale = 1.2;
    image(glCandyPopUp, 0, 0);
  }
  goodLuckCandy.onPress = function() {
    glCandyPopUp = glCandyClick;
    glCandyDiscovery = true;
  }
  goodLuckCandy.onOutside = function() {
    goodLuckCandy.imageScale = 1.0;
    glCandyPopUp = glCandyHover;
  }

  lps = new Clickable();
  lps.locate(275, 200);
  lps.color = '#d9d1a000';
  lps.text = "";
  lps.strokeWeight = 0;
  lps.image = lpsImg;
  lps.fitImage = true;
  lps.width = 50;
  lps.height = 50;
  let lpsPopUp = lpsHover;
  lps.onHover = function() {
    lps.imageScale = 1.2;
    image(lpsPopUp, 0, 0);
  }
  lps.onPress = function() {
    lpsPopUp = lpsClick;
    lpsDiscovery = true;
  }
  lps.onOutside = function() {
    lpsPopUp = lpsHover;
    lps.imageScale = 1.0;
  }

  lycheeJelly = new Clickable();
  lycheeJelly.locate(145, 265);
  lycheeJelly.color = '#d9d1a000';
  lycheeJelly.text = "";
  lycheeJelly.strokeWeight = 0;
  lycheeJelly.image = lycheeImg;
  lycheeJelly.fitImage = true;
  lycheeJelly.width = 40;
  lycheeJelly.height = 40;
  let lycheePopUp = lycheeHover;
  lycheeJelly.onHover = function() { //when on hover
    lycheeJelly.imageScale = 1.2;
    image(lycheePopUp, 0, 0);
  }
  lycheeJelly.onPress = function() { //when button pressed
    lycheePopUp = lycheeClick;
    lycheeDiscovery = true;
  }
  lycheeJelly.onOutside = function() { //when outside button
    lycheeJelly.imageScale = 1.0;
    lycheePopUp = lycheeHover;
  }

  mouse = new Clickable();
  mouse.locate(225, 175);
  mouse.color = '#d9d1a000';
  mouse.text = "";
  mouse.strokeWeight = 0;
  mouse.image = mouseImg;
  mouse.fitImage = true;
  mouse.width = 200;
  mouse.height = 200;
  mousePopUp = mouseHover;
  mouse.onHover = function() {
    mouse.imageScale = 1.2;
    image(mousePopUp, 0, 0);
  }
  mouse.onPress = function() {
    mousePopUp = mouseClick;
    mouseDiscovery = true;
  }
  mouse.onOutside = function(){
    mouse.imageScale = 1.0;
    mousePopUp = mouseHover;
  }

  pc = new Clickable();
  pc.locate(475, 100);
  pc.color = '#d9d1a000';
  pc.text = "";
  pc.strokeWeight = 0;
  pc.image = pcImg;
  pc.fitImage = true;
  pc.width = 200;
  pc.height = 200;
  pcPopUp = pcHover;
  pc.onHover = function() {
    pc.imageScale = 1.2;
    image(pcPopUp, 0, 0);
  }
  pc.onPress = function() {
    pcPopUp = pcClick;
    pcDiscovery = true;
  }
  pc.onOutside = function(){
    pc.imageScale = 1.0;
    pcPopUp = pcHover;
  }

  pez = new Clickable();
  pez.locate(575, 200);
  pez.color = '#d9d1a000';
  pez.text = "";
  pez.strokeWeight = 0;
  pez.image = pezImg;
  pez.fitImage = true;
  pez.width = 90;
  pez.height = 90;
  pezPopUp = pezHover;
  pez.onHover = function() {
    pez.imageScale = 1.2;
    image(pezPopUp, 0, 0);
  }
  pez.onPress = function() {
    pezPopUp = pezClick;
    pezDiscovery = true;
  }
  pez.onOutside = function(){
    pez.imageScale = 1.0;
    pezPopUp = pezHover;
  }

  rollerSkates = new Clickable();
  rollerSkates.locate(375, 200);
  rollerSkates.color = '#d9d1a000';
  rollerSkates.text = "";
  rollerSkates.strokeWeight = 0;
  rollerSkates.image = rollerSkatesImg;
  rollerSkates.fitImage = true;
  rollerSkates.width = 150;
  rollerSkates.height = 150;
  rollerSkatesPopUp = rollerSkatesHover;
  rollerSkates.onHover = function() {
    rollerSkates.imageScale = 1.2;
    image(rollerSkatesPopUp, 0, 0);
  }
  rollerSkates.onPress = function() {
    rollerSkatesPopUp = rollerSkatesClick;
    rollerSkatesDiscovery = true;
  }
  rollerSkates.onOutside = function(){
    rollerSkates.imageScale = 1.0;
    rollerSkatesPopUp = rollerSkatesHover;
  }

  origamiStar = new Clickable();
  origamiStar.locate(350, 200);
  origamiStar.color = '#d9d1a000';
  origamiStar.text = "";
  origamiStar.strokeWeight = 0;
  origamiStar.image = origamiStarImg;
  origamiStar.fitImage = true;
  origamiStar.width = 50;
  origamiStar.height = 50;
  origamiStarPopUp = origamiStarHover;
  origamiStar.onHover = function() {
    origamiStar.imageScale = 1.2;
    image(origamiStarPopUp, 0, 0);
  }
  origamiStar.onPress = function() {
    origamiStarPopUp = origamiStarClick;
    origamiStarDiscovery = true;
  }
  origamiStar.onOutside = function() {
    origamiStar.imageScale = 1.0;
    origamiStarPopUp = origamiStarHover;
  }

  wii = new Clickable();
  wii.locate(525, 275);
  wii.color = '#d9d1a000';
  wii.text = "";
  wii.strokeWeight = 0;
  wii.image = wiiImg;
  wii.fitImage = true;
  wii.width = 110;
  wii.height = 110;
  wiiPopUp = wiiHover;
  wii.onHover = function() {
    wii.imageScale = 1.2;
    image(wiiPopUp, 0, 0);
  }
  wii.onPress = function() {
    wiiPopUp = wiiClick;
    wiiDiscovery = true;
  }
  wii.onOutside = function() {
    wii.imageScale = 1.0;
    wiiPopUp = wiiHover;
  }

  gameOver = new Clickable();
  gameOver.locate(230, 300);
  gameOver.color = '#d9d1a000';
  gameOver.text = "";
  gameOver.strokeWeight = 0;
  gameOver.image = viewResultsImg;
  gameOver.fitImage = true;
  gameOver.width = 235;
  gameOver.height = 30;
  gameOver.onHover = function() {
    gameOver.image = viewResultsImg2;
    gameOver.imageScale = 1.2;
  }
  gameOver.onPress = function() {
    gameState = 'endScreen';
  }
  gameOver.onOutside = function() {
    gameOver.image = viewResultsImg;
    gameOver.imageScale = 1.0;
  }

  playAgain = new Clickable();
  playAgain.locate(180, 340);
  playAgain.locate(250, 340);
  playAgain.color = '#d9d1a000';
  playAgain.text = "";
  playAgain.strokeWeight = 0;
  playAgain.image = playAgainImg;
  playAgain.fitImage = true;
  playAgain.width = 140;
  playAgain.height = 30;
  playAgain.onHover = function() {
    playAgain.image = playAgainImg2;
    playAgain.imageScale = 1.2;
  }
  playAgain.onPress = function() {
    gameState = 'title';
    cardsDiscovery = false;
    cootieDiscovery = false;
    dsiDiscovery = false;
    glCandyDiscovery = false;
    lpsDiscovery = false;
    lycheeDiscovery = false;
    origamiStarDiscovery = false;
    pcDiscovery = false;
  }
  playAgain.onOutside = function() {
    playAgain.image = playAgainImg;
    playAgain.imageScale = 1.0;
  }
}

function draw() {
  if (skyTheme) {
    image(skyDayImg, 0, 0);
    image(skySunImg, 450, 5);
    image(shrubsImg, 0, 0);
    background(bg);
    image(skyDayLightImg, 0, 0);
  } else {
    image(skyNightImg, 0, 0);
    image(skyNightMoon, 0, 0);
    image(shrubsNightImg, 0, 0);
    background(skyNightDesk1Img);
    image(skyNightLightImg, 0, 0);
  }

  //program wireframe
  switch (gameState) {
    case 'title':
      titleScreen();
      break;
    case 'skySelection':
      skySelectionScreen();
      break;
    case 'instruction':
      instructionScreen(); //function
      break;
    case 'mainGame':
      mainScreen();
      break;
    case 'mainGameExpand':
      mainGameExpand();
      break;
    case 'gameOver':
      gameOverScreen();
      break;
    case 'endScreen':
      endScreen();
      break;
  }
}


function titleScreen() {
  image(titleImg, 0, 0);
  image(lightingImg, 0, 0);
  start.draw();
  backgroundTrack.draw();
}

function skySelectionScreen() {
  image(cornerImg, 0, 0);
  image(lightingImg, 0, 0);
  image(skySelectionImg, 0, 0);
  daySelection.draw();
  nightSelection.draw();
  nextSky.draw();
}

function instructionScreen() {
  image(lightingImg, 0, 0);
  image(cornerImg, 0, 0);
  image(howToPlay, 0, 0);
  textSize(18);
  textAlign(LEFT);
  text(intro[randomIndexIntro].word + "welcome to Star Archive! Explore my desk area to take a walk down memory lane of what it is like growing up in the early 2000's in Southern California. Hover over objects to see what they are and click on them to read about their significance. You have 45 seconds to explore the space and most importantly, have fun exploring >o<!", 25, 135, 625, 400);
  next.draw();
  exit.draw();
}

function timerClock() {
  let clockTimerImg = clockGreenImg;
  image(clockTimerImg, 0, 300);
  fill(255);
  textAlign(CENTER);
  console.log(frameCount);
  let numberDisplay = 45-(int(frameCount * 0.0166));
  text(numberDisplay, 47, 365);

  if (numberDisplay < 0) {
    gameState = "gameOver";
  }
}

function mainScreen() {
  if (skyTheme) {
    hat.image = hatImg;
  } else {
    hat.image = hatNightImg;
  }

  hat.draw();

  if (skyTheme) {
    image(bg, 0, 0);
    pc.image = pcImg;
    lycheeJelly.image = lycheeImg;
    cootieCatcher.image = cootieImg;
    cards.image = cardsImg;
    dsi.image = dsiImg;
    goodLuckCandy.image = glCandyImg;
    lps.image = lpsImg;
    origamiStar.image = origamiStarImg;
  } else {
    image(skyNightDesk1Img, 0, 0);
    image(skyNightLightImg, 0, 0);
    pc.image = pcNightImg;
    lycheeJelly.image = lycheeNightImg;
    cootieCatcher.image = cootieNightImg;
    cards.image = cardsNightImg;
    dsi.image = dsiNightImg;
    goodLuckCandy.image = glCandyNightImg;
    lps.image = lpsNightImg;
    origamiStar.image = origamiStarNightImg;
  }

  pc.draw();
  lycheeJelly.draw();
  cootieCatcher.draw();
  cards.draw();
  dsi.draw();
  goodLuckCandy.draw();
  lps.draw();
  origamiStar.draw();
  down.draw();
  image(lightingImg, 0, 0);
  image(cornerImg, 0, 0);
  timerClock();
}

function mainGameExpand() {
if (skyTheme) {
  wii.image = wiiImg;
  bracelet.image = braceletImg;
  rollerSkates.image = rollerSkatesImg;
  mouse.image = mouseImg;
  pez.image = pezImg;
  clockTimerImg = clockGreenImg;
  background(bg2);
} else {
  wii.image = wiiNightImg;
  bracelet.image = braceletNightImg;
  rollerSkates.image = rollerSkatesNightImg;
  mouse.image = mouseNightImg;
  pez.image = pezNightImg;
  background(skyNightDesk2Img);
}

  up.draw();
  image(cornerImg, 0, 0);
  wii.draw();
  mouse.draw();
  pez.draw();
  rollerSkates.draw();
  bracelet.draw();
  image(lightingImg2, 0, 0);
  timerClock();
}

function gameOverScreen() {
  image(lightingImg, 0, 0);
  image(cornerImg, 0, 0);
  image(gameOverScreenImg, 0, 0);
  textAlign(LEFT);
  fill(0);
  if (skyTheme) {
    text(outroDay[randomIndexOutroDay].word + "so you're going to have to leave! Come back some other time to explore again! I hope you had fun, please proceed to the next screen to see your personalized results. :D P.S. you better have not left the room as a mess when you were looking around because my mom will scold me :/.", 25, 135, 625, 400);
  } else {
    text(outroNight[randomIndexOutroNight].word + "so you're going to have to leave! Come back some other time to explore again! I hope you had fun, please proceed to the next screen to see your personalized results. :D P.S. you better have not left the room as a mess when you were looking around because my mom will scold me :/.", 25, 135, 625, 400);
  }
  gameOver.draw();
}

function endScreen() {
  image(lightingImg, 0, 0);
  image(cornerImg, 0, 0);
  image(endResultImg, 0, 0);
  playAgain.draw();

  braceletResultsDisplay = braceletResults;
  cardsResultsDisplay = cardsResults;
  cootieResultsDisplay = cootieResults;
  dsiResultsDisplay = dsiResults;
  glCandyResultsDisplay = glCandyResults;
  hatResultsDisplay = hatResults;
  lockedResultsDisplay = lockedResults;
  lpsResultsDisplay = lpsResults;
  lycheeResultsDisplay = lycheeResults;
  mouseResultsDisplay = mouseResults;
  origamiStarResultsDisplay = origamiStarResults;
  pcResultsDisplay = pcResults;
  pezResultsDisplay = pezResults;
  rollerSkatesResultsDisplay = rollerSkatesResults;
  wiiResultsDisplay = wiiResults;

  if (braceletDiscovery) {
    image(braceletResultsDisplay, 140, 140);
  } else {
    image(lockedResultsDisplay, 140, 140);
  }

  if (cardsDiscovery) {
    image(cardsResultsDisplay, 200, 140);
  } else {
    image(lockedResultsDisplay, 200, 140);
  }

  if (cootieDiscovery) {
    image(cootieResultsDisplay, 260, 140);
  } else {
    image(lockedResultsDisplay, 260, 140);
  }

  if (dsiDiscovery) {
    image(dsiResultsDisplay, 320, 140);
  } else {
    image(lockedResultsDisplay, 320, 140);
  }

  if (glCandyDiscovery) {
    image(glCandyResultsDisplay, 380, 140);
  } else {
    image(lockedResultsDisplay, 380, 140);
  }

  if (hatDiscovery) {
    image(hatResultsDisplay, 440, 140);
  } else {
    image(lockedResultsDisplay, 440, 140);
  }

  if (lpsDiscovery) {
    image(lpsResultsDisplay, 200, 230);
  } else {
    image(lockedResultsDisplay, 200, 230);
  }

    if (lycheeDiscovery) {
      image(lycheeResultsDisplay, 320, 230);
    } else {
      image(lockedResultsDisplay, 320, 230);
    }

    if (mouseDiscovery) {
      image(mouseResultsDisplay, 440, 230);
    } else {
      image(lockedResultsDisplay, 440, 230);
    }

  if (origamiStarDiscovery) {
    image(origamiStarResultsDisplay, 260, 230);
  } else {
    image(lockedResultsDisplay, 260, 230);
  }

  if (pcDiscovery) {
    image(pcResultsDisplay, 380, 230);
  } else {
    image(lockedResultsDisplay, 380, 230);
  }

  if (pezDiscovery) {
    image(pezResultsDisplay, 500, 230);
  } else {
    image(lockedResultsDisplay, 500, 230);
  }

  if (rollerSkatesDiscovery) {
    image(rollerSkatesResultsDisplay, 140, 230);
  } else {
    image(lockedResultsDisplay, 140, 230);
  }

  if (wiiDiscovery) {
    image(wiiResultsDisplay, 80, 230);
  } else {
    image(lockedResultsDisplay, 80, 230);
  }
}
