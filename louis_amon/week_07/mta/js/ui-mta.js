//Function to create the two select boxes, takes an object and default Option as parameters

var addSelect = function(obj, defaultOpt){
  var $select = $('<select>', {class: 'form-control'});
  var $def = $('<option>',{value: defaultOpt});
  $def.text(defaultOpt);
  $def.appendTo($select);
  _(obj).each(function(l){
    var $optGroup = $('<optgroup>',{label: l.name, id: l.name});
    _(l.stations).each(function(s){
      var $opt = $('<option>', {value: s});
      $opt.text(s);
      $opt.appendTo($optGroup);
    });
    $optGroup.appendTo($select);
  });
  return $select;
}

///// End Function ////////////

//// Personal Pluralize function using the number of stops /////
var pluralize = function(word, number){
  return number > 1 || number === 0 ? word+'s' : word;
}


$(document).ready(function(){
  $('.errors').hide();
  var select_start = addSelect(lines, "Choose Source");
  var select_end = addSelect(lines, "Choose Destination");

  $('.search-start').append(select_start);
  $('.search-end').append(select_end);

//// Ths function runs when the button gets clicked ////
  $('button').on('click', function(){
    $('.results').empty(); // Clear the results div for new data

    //// Getting the text for the start and end line and stations
    startLine = $('.search-start select :selected').parent().attr("label");
    console.log(startLine);
    startStation = $('.search-start select').val();

    endLine = $('.search-end select :selected').parent().attr('label');
    endStation = $('.search-end select').val();

    // This code returns early and shows error message
    if(startLine === undefined || endLine === undefined) {
      $('.errors').text("Source and Destination must be provided");
      $('.errors').fadeIn(1500);
      return;
    }

    $('.errors').hide(); // If the statiosn are finally chosen then hide errors DIV

    //running the planTrip function from MTA file
    var stops = planTrip(startLine, startStation, endLine,endStation);

    var $h3 = $('<h3>');
    $('.results').append($h3);

    //// Calling the Pluralize function to get the plural based on number of stops
    var pluralizedWord = pluralize('stop',stops.length);

    $h3.text('There are ' + stops.length + ' ' + pluralizedWord + ' to your destination: '); //Adding text to the H3 tag created earlier

    var message = '';
    // This loop goes through the results of the planTrip Function
    _(stops).each(function(stop){
      var line = stop.name;
      var station = stop.stations;
      // var $d = $('<div>', {class: 'station'});

      var $d;
      if(startLine !== endLine && station === 'Union Square') {
         $d = $('<div>', {class: 'station-union'});
         message += "Line: " + line + ", Station: " + station + "<br>";
         message += "<p>Please change at this station to get to <strong>" + endLine + " " + endStation +"</strong></p>";
      }
      else {
        $d = $('<div>', {class: 'station'});
        message = "Line: " + line + ", Station: " + station;
      }



      $d.html(message);
      $('.results').append($d);
    });

  });

});
