
  console.log('hello');

  var img = document.getElementsByTagName('img')[0];

      img.style.position = 'absolute';
      img.style.left = '0px';

      var watchRight = function() {
        var oldRight = parseInt(img.style.left);
        var newRight = oldRight + 60;

        img.style.left = newRight + 'px';

          if (newRight > 500) {
            window.clearInterval(timer);
            timer = window.setInterval(watchLeft, 600);
          }
      };

    var timer = window.setInterval(watchRight, 600);


    var watchLeft = function() {
        var oldLeft = parseInt(img.style.left);
        var newLeft = oldLeft - 60;

        img.style.left = newLeft + 'px';

          if (newLeft < 0) {
            window.clearInterval(timer);
            timer = window.setInterval(watchRight, 500);
          }
      };
