
/*
The program takes the line and stop that a user is getting on at and the line
and stop that user is getting off at and prints the journey and the total number
of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd');
// This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
*/

// prints journey & total number of stops
// planTrip('N', 'Times Square', '6', '33rd');
// have to find # of stops between point A and point B
// have to first find the line
// then find the stop
// then the end stop

// var planTrip = function('N', 'Times Square', '6', '33rd');
// need to make arrays of all of the lines
// and where they intersect?

// have to push the next stop on the subway after the current stop
// then you have to add them together


// first have to convert stopNumberOn to a number on the route
// then have to convert stopNumberOff to a number on the route
// iterate stopNumberOn through array lineN to find a match,
// then get that number.
// then take those two numbers and put them in route function
// this will print out the stops between those two places

var subway = {
	N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
	L: ['8th', '6th', 'Union Square', '3rd', '1st'],
	6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}


var routeOf = function(line, start, end) {
	var currentLine = subway[line];
	var stopNumOn = currentLine.indexOf(start);
	var stopNumOff = currentLine.indexOf(end);
	if (stopNumOn < stopNumOff) {
		for (var i = stopNumOn; i <= stopNumOff; i++) {
			console.log(currentLine[i]);
	  }
	} else {
		for (var i = stopNumOn; i >= stopNumOff; i--) {
			console.log(currentLine[i]);
		}
	}
};

var planTrip = function(startLine, startStation, endLine, endStation) {
	if (startLine === endLine) {
		console.log(routeof(startLine, startStation, endStation));
	} else {
		console.log(routeOf(startLine, startStation, 'Union Square')) + routeOf(endLine, 'Union Square', endStation);
	}
	}

planTrip('N', '34th', 'L', '1st');
