/*
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
eg: planTrip('N', 'Times Square', '6', '33rd');
*/

var lines = [
  {name: 'N', stations: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']},
  {name: 'L', stations: ['8th', '6th', 'Union Square', '3rd', '1st']},
  {name: '6', stations: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']}
];

var planTrip = function(l1, s1, l2, s2) {
  var remainingStations = [];
  var stops = {};
  for( var n = 0; n < lines.length; n++) {
    var lineName = lines[n].name;
    var stationsArr = lines[n].stations
    if( lineName === l1){
      var startStation = stationsArr.indexOf(s1);
      var endStation = stationsArr.indexOf(s2);

      console.log(startStation);
      console.log(endStation);

      if(startStation < endStation) {
        for(var i = startStation + 1; i <= endStation; i++) {
          remainingStations.push({name: lineName, stations: stationsArr[i]});
        }
        return remainingStations;
      }
      else {
        for(var i = startStation - 1; i >= endStation; i--) {
          remainingStations.push({name: lineName, stations: stationsArr[i]});
        }
        return remainingStations;
      }
    }
  }
};

console.log(planTrip('6','Grand Central','6','23rd'));
