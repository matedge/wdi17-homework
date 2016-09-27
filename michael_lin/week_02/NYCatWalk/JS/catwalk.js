var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';

var walkSpeed = 1;

var catWalk = function() {
  var oldLeft = parseInt(img.style.left);
  var lefty = oldLeft + walkSpeed;
  img.style.left = lefty + 'px';

  if (lefty >= (windowWidth - 230)) {
    img.className = 'otherway';
    walkSpeed = (-1);
  }
  if (lefty <= -40) {
    img.className = '';
    walkSpeed = 1;
  }
};
window.setInterval(catWalk, 7);

var windowWidth = window.innerWidth;
