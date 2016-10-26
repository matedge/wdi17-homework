$(document).ready(function () {
  setInterval(function () {
    $('#city_search').on('submit', function (e){ //when you do this
      e.preventDefault(); //dont submit form to server
    var city = $('#city_search').val() //get the input element with the id of city- from formfield tag
    var url = ('http://api.openweathermap.org/data/2.5/forecast/city?id=' + city + '&APPID=71c75884ebbcefe572d57b5a61794a5e');
    $.ajax(url).done(function (result){

      console.log(result);

      //FIXME - lots of arrays to sift through, and

  }, 60);
});
});
});

//api key 71c75884ebbcefe572d57b5a61794a5e
// city id sydney 2147714
