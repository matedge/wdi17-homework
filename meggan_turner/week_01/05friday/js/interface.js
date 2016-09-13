(function(){
  var lineStart = document.getElementById('lineStart');
  var stationStart = document.getElementById('stationStart');
  var line6 = {
    firstStop: 'Grand Central',
    secondStop: '33rd',
    thirdStop: '28th',
    fourthStop: '23rd',
    fifthStop: 'Union Square',
    sixthStop: 'Astor Place'
  };
  var lineN = {
    firstStop: 'Times Square',
    secondStop: '34th',
    thirdStop: '28th',
    fourthStop: '23rd',
    fifthStop: 'Union Square',
    sixthStop: '8th'
  };
  var lineL = {
    firstStop: '8th',
    secondStop: '6th',
    thirdStop: 'Union Square',
    fourthStop: '3rd',
    fifthStop: '1st'
  };

  // WHEN THE USER CHANGES THE LINESTART SELECT BOX
  addEvent(lineStart, 'change', function() {
    if (this.value ==='choose') {
      stationStart.innerHTML = '<option>Please choose a line first</option>';
      return;
    }
    var stationStart = getStationStarts(this.value);

    // LOOP THROUGH THE OPTIONS IN THE OBJECT TO CREATE OPTIONS
    var options = '<options>Please choose a station</option>';
    for (var key in stationStarts) {
      options += '<option value="' + key + '">' + stationStarts[key] + '</option>';
    }
    stationStart.innerHTML = options;
  });

  function getStationStarts(lineStart) {
    if (lineStart === 'line6') {
      return line6;
    } else if (lineStart === 'lineN') {
      return lineN;
    } else if (lineStart === 'lineL') {
      return lineL;
    }
  }
}());
