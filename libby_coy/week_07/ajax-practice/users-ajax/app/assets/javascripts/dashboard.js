$(document).ready(function () {

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  $.ajax({
  url: 'http://api.randomuser.me/?format=json',
  dataType: 'json',

  success: function(data) {
    string = data.results[0];

    name = string['name'].first.capitalize();
    $('#username').text(string['name'].first.capitalize() + ' ' + string['name'].last.capitalize());
    $('#cellphone').text(string['cell']);
    $('#location').text(string['location'].city.capitalize());
    $('#picture').attr({src: string['picture'].large});
    $('#gender').text(string['gender'].capitalize());
    console.log(name);
  }
  });
})
