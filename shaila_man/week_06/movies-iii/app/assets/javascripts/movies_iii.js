$(document).ready(function(){
 $('#movie_search').on('submit', function (e){ //when you do this
   e.preventDefault(); //dont submit form to server

   var title = $('#title').val() //get the input element with the id of title- from formfield tag

   // request data on that title from ombd
   var url = 'http://omdbapi.com/?t=' + title;

   $.ajax(url).done(function (info){
     var $img = $("<img>", {src: info['Poster'], title: info['Title']}); //can change name to alt
    $img.prependTo('#poster').addClass( "movie_poster");
   });
  

   });
});
