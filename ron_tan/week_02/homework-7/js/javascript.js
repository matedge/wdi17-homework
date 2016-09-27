var catWalking = document.getElementById('catWalk');
var nyanCat = document.getElementById('nyanCatOne');
// var danceCat = document.getElementById('danceCat');


// catWalking.style.transform = "rotateY(180deg)";   //turns around

catWalking.style.position = 'absolute';
catWalking.style.left = '0px';
catWalking.style.top = '200px';
catWalking.style.transform = "rotate(355deg)";

nyanCat.style.position = 'absolute';
nyanCat.style.left = '-800px';
nyanCat.style.top = '-325px';
nyanCat.style.transform = "scale(.15)";




var moveRight = true;
var moveUp = true;

var nyanCatOne = function () {
  var left = parseInt(nyanCat.style.left) + 20;
  nyanCat.style.left = left + 'px';
  if (nyanCat.style.left === 40 + 'px') {
    nyanCat.style.left = -800 + 'px'
  }
}


// var danceCatSpin = function () {
//   var left = parseInt(danceCat.style.transform) + 20;
//   danceCat.style.transform = "rotate(180deg)";
//   }
// }


var watchKittyFall = function() {
  var left = parseInt(catWalking.style.left);
  var top = parseInt(catWalking.style.top);
  if (moveRight) {
    left += 10;
  } else {
    left -= 10;
  }
  if (moveUp) {
    top -= 5;
  } else {
    top += 5;
  }

  catWalking.style.top = top + 'px';
  catWalking.style.left = left + 'px';
  console.log(catWalking.style.top);
  if (catWalking.style.top === 100 + 'px' && moveUp) {
    moveUp = false;
    if (moveRight) {
      catWalking.style.transform = "rotate(5deg)";
    }
  } else if (catWalking.style.top === 240 + 'px' && !moveUp) {
    moveUp = true;
    if (moveRight) {
        catWalking.style.transform = "rotate(355deg)";
    }
  }
  if (catWalking.style.left === 1000 + 'px' && moveRight) {
    moveRight = false;
    catWalking.style.transform = "rotateY(180deg)";
  } else if (catWalking.style.left === 0 + 'px' && !moveRight) {
    moveRight = true;
    catWalking.style.transform = "rotateY(0deg)";
  }
};

var fadeTimer = window.setInterval(watchKittyFall, 50);
var fadeTimerNya = window.setInterval(nyanCatOne, 50);
var fadeTimerNyaTwo = window.setInterval(nyanCatTwo, 50);
var fadeTimerNyaThree = window.setInterval(nyanCatThree, 50);
var fadeTimerNyaFour = window.setInterval(nyanCatFour, 50);
