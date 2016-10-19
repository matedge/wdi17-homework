var xhr = new XMLHttpRequest();

$(document).ready(function () {

  $('#movie_search').on('submit', function(e) {
    e.preventDefault();

    var title = $('#title').val()
    var url = 'http://omdbapi.com/?t=' + title;

    xhr.open( 'GET', url );

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) { return; }
      var info = JSON.parse( xhr.responseText);
      $('#output').text( info.Title );
      $('#plotput').text( info.Plot);
    };

    xhr.send();
  });
});
