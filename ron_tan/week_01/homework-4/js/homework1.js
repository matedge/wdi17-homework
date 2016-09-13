/* MTA Lab

Objectives:

Apply your knowledge of Javascript to solve a real world problem.
Get really good at array manipulation.
Activity

-Create a program that models a simple subway system.

-The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at
and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

There are 3 subway lines:
-The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
-The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
-The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
-All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this
means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to
differentiate this when you name your stops in the arrays.)
-Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

Hints:

-Work out how you would do it on paper first! Then start to explain that process in Javascript.
-Get the program to work for a single line before trying to tackle multiple lines.
-Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt()
later to make it more interactive.
-Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
-The key to the lab is finding the index positions of each stop. (hint: indexOf())
-Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6
need to be differentiated) */


var station = [
  { name: 'N', station: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'] },
  { name: 'L', station: ['8th', '6th', 'Union Square', '3rd', '1st'] },
  { name: '6', station: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'] }
];

var tripOne = "";
var tripTwo = "";
var tripOneArray = [];
var tripTwoArray = [];

var planTrip = function (startLine, startStation, endLine, endStation) {

  directions(startLine, startStation, endLine, endStation);

  console.log("You must travel through the following stops on the " + startLine + " line: " + tripOne + ".")
  if (startLine !== endLine) {
    console.log("Change at Union Square.")
    console.log("Your journey continues through the following stops on the " + endLine + " line: " + tripTwo + ".")
  }
  console.log((tripOneArray.length + tripTwoArray.length) + " stops in total.")
};

var getLine = function (line) { // gets index of Line
  for (var i = 0; i < station.length; i++) {
    if (station[i].name === line) {
      return i;
    }
  }
};

var getLineStation = function (line, stat) { // gets index of station
  var lineIndex = getLine(line);
  return station[lineIndex].station.indexOf(stat);
};

var directions = function (startLine, startStation, endLine, endStation) { // saves direction to station to variables

  var sStation = getLineStation(startLine, startStation);
  var eStation = getLineStation(endLine, endStation);
  var sLine = getLine(startLine);
  var eLine = getLine(endLine);
  var startUS = getLineStation(startLine, 'Union Square');
  var endUS = getLineStation(endLine, 'Union Square');

  if (sLine === eLine) { // stations are on same line
    if (sStation < eStation) {
      tripOneArray = station[sLine].station.slice(sStation + 1, eStation + 1); //+1 because calculating with indexes
      tripOne = tripOneArray.join(", ");
      tripTwoArray = [];
    } else {
      tripOneArray = station[sLine].station.slice(eStation, sStation); //reverse the tripOneArray instead of the stationArray
      tripOneArray.reverse();
      tripOne = tripOneArray.join(", ");
      tripTwoArray = [];
    }
  } else { // stations on different line. startStation to Union Square
    if (sStation < startUS) {
      tripOneArray = station[sLine].station.slice(sStation + 1, startUS + 1);
      tripOne =  tripOneArray.join(", ");
    } else {
      tripOneArray = station[sLine].station.slice(startUS, sStation);
      tripOneArray.reverse();
      tripOne = tripOneArray.join(", ");
    }

    if (eStation > endUS) { // from Union Square to endStation
      tripTwoArray = station[eLine].station.slice(endUS + 1, eStation + 1);
      tripTwo =  tripTwoArray.join(", ");
    } else {
      tripTwoArray = station[eLine].station.slice(eStation, endUS);
      tripTwoArray.reverse();
      tripTwo = tripTwoArray.join(", ");
    }
  }
};
