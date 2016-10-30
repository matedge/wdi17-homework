var page = 1, pages, pageCount;

var searchFlickr = function(query) {
  var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  console.log('start: ', page);

    // $.getJSON for converts received data to JSON
    $.getJSON(flickrURL,{
      method: 'flickr.photos.search',//function needed for flickr photo search
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: query,
      safe_search: 1,
      per_page: 100,
      format: 'json',
      page: page
    }).done(function(results){
      pages = results.photos.pages;
      pageCount = results.photos.page;

      console.log(pages);
      console.log(results.photos);
      _(results.photos.photo).each(function(p){
        var url = generateURL(p);
        var owner = p.owner;
        var id = p.id;
        var linkURL = 'https://www.flickr.com/photos/'+owner+'/'+id;
        var $a = $('<a>', {href: linkURL, target: 'blank'});
        var $img = $('<img>', {src: url, class: "img-thumb", alt: p.title});

        var imageCaption = $img.attr("alt");
        if (imageCaption != '') {
          var imgWidth = $img.width();
          var imgHeight = $img.height();
          var position = $img.position();
          var positionTop = (position.top + imgHeight - 26);
          $("<span class='img-caption'><em>" + imageCaption +
              "</em></span>").css({
              "position": "absolute",
              "top": positionTop + "px",
              "left": "0",
              "z-index": "2",
              "width": imgWidth + "px"
          }).insertAfter($img);
        }




        $img.appendTo($a);
        $a.appendTo('#images');
      });
    });

  page++;
  console.log('end: ', page);

};

var generateURL = function (photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg' // Change this for different sizes
    ].join('');
  };

var throttle_search = _.throttle(searchFlickr, 5000, true);

$(document).ready(function(){
  $('#search').on('submit', function(e){
    e.preventDefault(); //This form is going nowhere
    $('#images').html('');
    page = 1;

    var query = $('#query').val();
    searchFlickr(query);
  });

  $(window).on('scroll', function(){
    var query = $('#query').val();
     var scrollBottom = $(document).height() - $(window).height()-$(window).scrollTop();
     if(scrollBottom <= 800){
       if(pageCount < pages) {
         throttle_search(query);
       }
     }
  });
});
