// All below are cat gif moving back and forth until...
var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';

var walkSpeed = 1;
var windowWidth = window.innerWidth;
var halfWidth = (windowWidth/2)

var catWalk = function() {
  var oldLeft = parseInt(img.style.left);
  var lefty = oldLeft + walkSpeed;

  img.style.left = lefty + 'px';

  // Check when the cat reaches the half way mark.
  if (lefty === Math.floor(halfWidth) - 200) {
    console.log("She made it.")
  }

  // cat turn around with CSS and change speed value
  if (lefty >= (windowWidth - 230)) {
    img.className = 'otherway';
    walkSpeed = (-1);
  }
  // cat turn back to original direction and change speed
  if (lefty <= -20) {
    img.className = '';
    walkSpeed = 1;
  }
};
window.setInterval(catWalk, 7);
// ... here.
