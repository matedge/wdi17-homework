var stationMap = [
  { name: 'N Line',
  stops: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'] },
  { name: 'L Line',
  stops: ['8th', '6th', 'Union Square', '3rd', '1st'] },
  { name: '6 line',
  stops: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'] }
];

// var LLineStops = stationMap[2].stops;

var stops;

for (var i = 0; i < stationMap.length) {
  if (stationMap[ i ].name === 'L Line') {
    stops = stationMap[ i ].stops;
    break;
  }
}

var stations = {
  'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L': ['8th', '6th', 'Union Square', '3rd', '1st'] ,
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

var LLineStops = ['L']; // identical to the other LLineStops variable. 
