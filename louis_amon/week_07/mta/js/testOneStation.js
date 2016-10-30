/*
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
eg: planTrip('N', 'Times Square', '6', '33rd');
*/
var stations = 'Times Square, 34th, 28th, 23rd, Union Square, 8th'.split(', ');
var nLine = {
  name: 'N',
  stations: stations
};

var startStation = nLine.stations.indexOf('8th');
var endStation = nLine.stations.indexOf('34th');

var remainingStations = [];
//var stops = {};
if(startStation < endStation) {
  for(var i = startStation + 1; i <= endStation; i++) {
    remainingStations.push({name: nLine.name, stations: nLine.stations[i]});
  }
}
else {
  for(var i = startStation - 1; i >= endStation; i--) {
    remainingStations.push({name: nLine.name, stations: nLine.stations[i]});
  }
}
console.log(remainingStations);
