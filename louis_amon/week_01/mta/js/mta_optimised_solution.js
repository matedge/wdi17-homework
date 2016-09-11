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

var checkStations = function(line, stations, station1, station2, stops) {
  if(station1 < station2) {
    for(var i = station1 + 1; i <= station2; i++) {
      stops.push({name: line, stations: stations[i]});
    }
  }
  else {
    for(var i = station1 - 1; i >= station2; i--) {
      stops.push({name: line, stations: stations[i]});
    }
  }

};

var planTrip = function(l1, s1, l2, s2) {
  var remainingStations = [];
  var startLineStops = [];
  var stopLineStops = [];
  for( var n = 0; n < lines.length; n++) {
    var lineName = lines[n].name;
    var stationsArr = lines[n].stations;
    var startStation = stationsArr.indexOf(s1);
    var endStation = stationsArr.indexOf(s2);

    if( lineName === l1 && lineName === l2){
      checkStations(lineName, stationsArr, startStation, endStation, startLineStops);
    }
    else {
      if(lineName === l1) {
        endStation = stationsArr.indexOf('Union Square');
        checkStations(lineName, stationsArr, startStation, endStation, startLineStops);
      }
      if(lineName === l2) {
        startStation = stationsArr.indexOf('Union Square');
        checkStations(lineName, stationsArr, startStation, endStation, stopLineStops);
      }
    }
  }
  remainingStations = startLineStops.concat(stopLineStops);
  return remainingStations;
};

console.log(lines);
console.log(planTrip('6','Grand Central','L','8th'));
