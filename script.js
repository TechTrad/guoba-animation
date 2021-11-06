var timer;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function leftArrowPressed() {
    console.log('left down');
    var lefteye = document.getElementById("lefteye");
    lefteye.classList.add("look-left-le");
    var righteye = document.getElementById("righteye");
    righteye.classList.add("look-left-re");
}

function leftArrowRelease() {
    console.log('left up');
    var lefteye = document.getElementById("lefteye");
    lefteye.classList.remove("look-left-le");
    var righteye = document.getElementById("righteye");
    righteye.classList.remove("look-left-re");
}

function rightArrowPressed() {
    console.log('right down');
    var lefteye = document.getElementById("lefteye");
    lefteye.classList.add("look-right-le");
    var righteye = document.getElementById("righteye");
    righteye.classList.add("look-right-re");
}

function rightArrowRelease() {
    console.log('right up');
    var lefteye = document.getElementById("lefteye");
    lefteye.classList.remove("look-right-le");
    var righteye = document.getElementById("righteye");
    righteye.classList.remove("look-right-re");
}

function upArrowPressed() {
    console.log('up down');
    var lefteye = document.getElementById("lefteye");
    lefteye.classList.add("look-up");
    var righteye = document.getElementById("righteye");
    righteye.classList.add("look-up");
}

function upArrowRelease() {
    console.log('up down');
    var lefteye = document.getElementById("lefteye");
    lefteye.classList.remove("look-up");
    var righteye = document.getElementById("righteye");
    righteye.classList.remove("look-up");
}

function downArrowPressed() {
    console.log('down down');
    var lefteye = document.getElementById("lefteye");
    lefteye.classList.add("look-down");
    var righteye = document.getElementById("righteye");
    righteye.classList.add("look-down");
}

function downArrowRelease() {
    console.log('down down');
    var lefteye = document.getElementById("lefteye");
    lefteye.classList.remove("look-down");
    var righteye = document.getElementById("righteye");
    righteye.classList.remove("look-down");
}

function shiftKeyPressed() {
    console.log('speak');
    var mouth = document.getElementById("mouth");
    mouth.classList.add("speak");
}

function shiftKeyRelease() {
    console.log('speak');
    var mouth = document.getElementById("mouth");
    mouth.classList.remove("speak");
}

function eKeyPressed() {
  console.log('squint');
  var lefteye = document.getElementById("lefteye");
  lefteye.classList.add("squint");
  var righteye = document.getElementById("righteye");
  righteye.classList.add("squint");
}

function eKeyRelease() {
  console.log('squint');
  var lefteye = document.getElementById("lefteye");
  lefteye.classList.remove("squint");
  var righteye = document.getElementById("righteye");
  righteye.classList.remove("squint");
}

function fKeyPressed() {
  console.log('anger');
  var lefteye = document.getElementById("lefteye");
  lefteye.classList.add("anger");
  var righteye = document.getElementById("righteye");
  righteye.classList.add("anger");
  var angry = document.getElementById("angry");
  angry.classList.remove("none");
}

function fKeyRelease() {
  console.log('anger');
  var lefteye = document.getElementById("lefteye");
  lefteye.classList.remove("anger");
  var righteye = document.getElementById("righteye");
  righteye.classList.remove("anger");
  var angry = document.getElementById("angry");
  angry.classList.add("none");
}

function gKeyPressed() {
  console.log('shock');
  var lefteye = document.getElementById("lefteye");
  lefteye.classList.add("blink");
  var righteye = document.getElementById("righteye");
  righteye.classList.add("blink");
  var shock = document.getElementById("shock");
  shock.classList.remove("none");
}

function gKeyRelease() {
  console.log('shock');
  var lefteye = document.getElementById("lefteye");
  lefteye.classList.remove("blink");
  var righteye = document.getElementById("righteye");
  righteye.classList.remove("blink");
  var shock = document.getElementById("shock");
  shock.classList.add("none");
}

function rKeyPressed() {
  console.log('chili');
  var chili = document.getElementById("chili");
  chili.classList.remove("none");
}

function rKeyRelease() {
  console.log('chili');
  var chili = document.getElementById("chili");
  chili.classList.add("none");
}

async function qKeyPressed() {
  console.log('fire');
  var fire1 = document.getElementById("fire1");
  fire1.classList.remove("none");
  await sleep(250);
  fire1 = document.getElementById("fire1");
  fire1.classList.add("none");

  var fire2 = document.getElementById("fire2");
  fire2.classList.remove("none");
  await sleep(250);
  var fire2 = document.getElementById("fire2");
  fire2.classList.add("none");

  var fire3 = document.getElementById("fire3");
  fire3.classList.remove("none");
  await sleep(250);
  var fire3 = document.getElementById("fire3");
  fire3.classList.add("none");
}

function qKeyRelease() {
  clearInterval(timer);
  timer = null;
  console.log('fire stop');
  var fire1 = document.getElementById("fire1");
  fire1.classList.add("none");
  var fire2 = document.getElementById("fire2");
  fire2.classList.add("none");
  var fire3 = document.getElementById("fire3");
  fire3.classList.add("none");
}

function fireLoop() {
  if (timer) return;
  timer = setInterval(qKeyPressed, 750);
}

function keydown(event) {
    switch (event.key) {
      case 'a': // look left
        leftArrowPressed();
        break;
      case 'd': // look right
        rightArrowPressed();
        break;
      case 'w': // look up
        upArrowPressed();
        break;
      case 's': // look down
        downArrowPressed();
        break;
      case 'Shift': // speak
        shiftKeyPressed();
        break;
      case 'q': // fire
        fireLoop();
        break;
      case 'e': // squint
        eKeyPressed();
        break;
      case 'f': // anger
        fKeyPressed();
        break;
      case 'g': // shock
        gKeyPressed();
        break;
      case 'r': //chili
        rKeyPressed();
        break;
      default:
        break;
    }
  }

  function keyup(event) {
    switch (event.key) {
      case 'a': // look left
        leftArrowRelease();
        break;
      case 'd': // look right
        rightArrowRelease();
        break;
      case 'w': // look up
        upArrowRelease();
        break;
      case 's': // look down
        downArrowRelease();
        break;
      case 'Shift': // special
        shiftKeyRelease();
        break;
      case 'q': // special
        qKeyRelease();
        break;
      case 'e': // special
        eKeyRelease();
        break;
      case 'f': // anger
        fKeyRelease();
        break;
      case 'g': // shock
        gKeyRelease();
        break;
      case 'r': //chili
        rKeyRelease();
        break;
    }
  }

  function init() {
    console.log('doc ready');
    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);
  }