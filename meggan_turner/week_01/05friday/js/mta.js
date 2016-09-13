
// Declare a variable which is an object of arrays
var trainLinesNY = {
  line6 : ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  lineN : ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  lineL : ['8th', '6th', 'Union Square', '3rd', '1st']
};

var planTrip = function(lineStart, stationStart, lineEnd, stationEnd) {

  var firstIndex;
  var secondIndex;
  var thirdIndex;
  var fourthIndex;
  var distanceTravelledFirstLine;
  var distanceTravelledSecondLine;
  var distanceTravelledTotal;
  var stationsPassedFirst = [];
  var stationsPassedSecond = [];
  var firstLine;
  var secondLine;


  for (var i = 0; i < Object.keys(trainLinesNY).length; i++) {
    if (lineStart === Object.keys(trainLinesNY)[i]) {
      firstLine = Object.keys(trainLinesNY)[i];
    }
    if (lineEnd === Object.keys(trainLinesNY)[i]) {
      secondLine = Object.keys(trainLinesNY)[i];
    }
  }

  var message;

// FINISHED ALL, BUT IT PRINTS OUT STOPS 5 TIMES INSTEAD OF JUST ONCE

  if (lineStart === lineEnd) { // User is travelling on one line only
    if (stationStart === stationEnd) {
      // If the station start is exactly the same as the station end, tells the user they're an idiot
      console.log("hey dumb dumb, you're already here");
    } else { // For all trips on the same line
      // Iterates over the array and checks if there is a match
      for (var i = 0; i < trainLinesNY[firstLine].length; i ++) {
        if (trainLinesNY[firstLine][i] === stationStart) {
          // Returns index of matched stationStart and stores it in firstIndex variable
          firstIndex = trainLinesNY[firstLine].indexOf(stationStart);
        }
        if (trainLinesNY[firstLine][i] === stationEnd) {
          // Returns index of matched stationEnd and stores it in secondIndex variable
          secondIndex = trainLinesNY[firstLine].indexOf(stationEnd);
        }
        if (secondIndex > firstIndex) {
          // Returns a list of the stations passed if the direction is forward
          for (var j = firstIndex + 1; j <= secondIndex; j++) {
            stationsPassedFirst.push(trainLinesNY[firstLine][j]);

          }
        } else if (firstIndex > secondIndex){
          // Returns a list of the stations passed if the direction is backwards
          for (var j = firstIndex -1 ; j >= secondIndex; j--) {
            stationsPassedFirst.push(trainLinesNY[firstLine][j]);
          }
        }
      }
    }
    // Calculates distance travelled based on how many stops have been made. Math.abs
    // turns the number into an absolute number (converts it to pos if it is neg)
    distanceTravelledTotal = Math.abs(secondIndex - firstIndex);

    message = "You must travel through the following stops on " + firstLine + ": " +  stationsPassedFirst.join(', ') + ". " + distanceTravelledTotal + " stops in total.";

  } else { // If there are two seperate lines
    for (var i = 0; i < trainLinesNY[firstLine].length; i++) {
      if (trainLinesNY[firstLine][i] === stationStart) {
        firstIndex = trainLinesNY[firstLine].indexOf(stationStart);
        secondIndex = trainLinesNY[firstLine].indexOf('Union Square');
      }
      if (secondIndex > firstIndex) {
        for (var j = firstIndex + 1; j <= secondIndex; j++) {
          stationsPassedFirst.push(trainLinesNY[firstLine][j]);
        }
      } else if (firstIndex > secondIndex) {
        for (var j = firstIndex -1 ; j >= secondIndex; j--) {
          stationsPassedFirst.push(trainLinesNY[firstLine][j]);
        }
      }
      distanceTravelledFirstLine = Math.abs(secondIndex - firstIndex);
    }
    for (var i = 0; i < trainLinesNY[secondLine].length; i++) {
      if (trainLinesNY[secondLine][i] === stationEnd) {
        thirdIndex = trainLinesNY[secondLine].indexOf('Union Square');
        fourthIndex = trainLinesNY[secondLine].indexOf(stationEnd);
      }
      if (fourthIndex > thirdIndex) {
        for (var j = thirdIndex + 1; j <= fourthIndex; j++) {
          stationsPassedSecond.push(trainLinesNY[secondLine][j]);
        }
      } else if (thirdIndex > fourthIndex) {
        for (var j = thirdIndex -1 ; j >= fourthIndex; j--) {
          stationsPassedSecond.push(trainLinesNY[secondLine][j]);
        }
      }
      distanceTravelledSecondLine = Math.abs(fourthIndex - thirdIndex);
    }

    distanceTravelledTotal = Math.abs(distanceTravelledFirstLine + distanceTravelledSecondLine);

    message = "You must travel through the following stops on " + firstLine + ": " +
    stationsPassedFirst.join(', ') + ". Change at Union Square. Your journey continues through the following stops on " + secondLine + ": "
    + stationsPassedSecond.join(', ') + ". " + distanceTravelledTotal + " stops in total.";

  }

  console.log(message);
}

planTrip();



// planTrip('line6', 'Grand Central', 'line6', 'Astor Place');
// planTrip('lineN', 'Times Square', 'lineL', '8th');
// planTrip('lineL', '1st', 'line6', '33rd');
// planTrip('lineN', 'Times Square', 'lineN', '23rd');
// planTrip('line6', 'Grand Central', 'line6', 'Grand Central');
