// Create a new Javascript file and link to it with a script tag at the bottom.
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.



$('#mode-toggle').on('click', function() {
  if ($('#animal').hasClass('cat')) {
    $('#animal').attr({
      src: 'https://media.giphy.com/media/LYvOrvkuJjxPG/giphy.gif',
      class: 'dog'
    });
    $('#mode-toggle').html('<p>Cat Mode 🐱</p>');
  } else if ($('#animal').hasClass('dog')) {
    $('#animal').attr({
      src: 'http://www.anniemation.com/clip_art/images/cat-walk.gif',
      class: 'cat'
    });
    $('#mode-toggle').html('<p>Doggo Mode 🐶</p>');
  }
});


var cat = document.getElementById('animal');
cat.style.position = 'absolute';
cat.style.left = '-200px';
cat.style.bottom = '10px';



var catWalkRight = function() {
  var originalPosition = parseInt(cat.style.left);
  var newPosition = originalPosition + 3;
  cat.style.left = newPosition + 'px';


  if (originalPosition > window.innerWidth){
    cat.style.left = '-400px';
    // cat.style.webkitTransform = 'scaleX(-1)';
  }

}
window.setInterval(catWalkRight, 50);




var rocket = document.getElementById('rocket');
rocket.style.position = 'absolute';
rocket.style.top = '30vh';
rocket.style.left = '10vw';


var rocketLaunch = window.setInterval(function() {
  var originalPositionRocket = parseInt(rocket.style.top);
  var newPositionRocket = originalPositionRocket - 1;
  rocket.style.top = newPositionRocket + 'vw';
}, 50);
