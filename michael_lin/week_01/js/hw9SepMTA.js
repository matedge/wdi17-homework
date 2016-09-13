var stationMap = [
  { name: 'N Line',
  stops: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'] },
  { name: 'L Line',
  stops: ['8th', '6th', 'Union Square', '3rd', '1st'] },
  { name: '6 line',
  stops: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'] }
];

var planTrip = function(departLine, departStop, arriveLine, arriveStop) {

  if ( departLine === 'N' ) {
    var tempDepLine = stationMap[0];
  } else if ( departLine === 'L' ) {
    var tempDepLine = stationMap[1];
  } else if ( departLine === '6' ) {
    var tempDepLine = stationMap[2];
  };

  if ( arriveLine === 'N' ) {
    var tempArrLine = stationMap[0];
  } else if ( arriveLine === 'L' ) {
    var tempArrLine = stationMap[1];
  } else if ( arriveLine === '6' ) {
    var tempArrLine = stationMap[2];
  };

  var departStopIndex = tempDepLine.stops.indexOf( departStop );
  var arriveStopIndex = tempArrLine.stops.indexOf( arriveStop );

  var changeOver = '';
  var consoleArray = [];
  var tempArray = [];
  var unionSquareTransferString = '';
  var transfer = console.log('');

  if ( arriveLine === 'N' ) {
    var unionSquareIndex = stationMap[0].stops.indexOf( 'Union Square' );
  } else if ( arriveLine === 'L' ) {
    var unionSquareIndex = stationMap[1].stops.indexOf( 'Union Square' );
  } else if ( arriveLine === '6' ) {
    var unionSquareIndex = stationMap[2].stops.indexOf( 'Union Square' );
  };

  if ( departLine !== arriveLine ) {
    unionSquareTransferString = 'Your journey continues through the following stops: ';
    changeOver = 'Change at Union Square';
    transfer = changeOver + ' to the ' + tempArrLine.name;

    if ( departStopIndex < unionSquareIndex ) {
      for (var i = departStopIndex + 1; i <= unionSquareIndex; i ++) {
        consoleArray.push( tempDepLine.stops[i] );
      }
    } else if (departStopIndex > unionSquareIndex ) {
      for ( var i = departStopIndex; i >= unionSquareIndex; i -- ) {
        consoleArray.push( tempDepLine.stops[i] );
      }
    }
    if (arriveStopIndex > unionSquareIndex){
      tempArray = tempArrLine.stops.slice((tempArrLine.stops.indexOf( 'Union Square' ) + 1), arriveStopIndex + 1);
      tempArray.reverse();
    } else if (arriveStopIndex < unionSquareIndex)
      tempArray = tempArrLine.stops.slice(arriveStopIndex, (tempArrLine.stops.indexOf( 'Union Square' ) - 1 ));
      tempArray.reverse();
  } else if ( departLine === arriveLine ) {
    if ( departStopIndex < arriveStopIndex ) {
      for ( var i = departStopIndex; i <= arriveStopIndex; i ++ ) {
        consoleArray.push( tempDepLine.stops[i] );
      }
    } else if ( departStopIndex > arriveStopIndex ) {
      for ( var i = departStopIndex; i >= arriveStopIndex; i -- ) {
        consoleArray.push( tempDepLine.stops[i] );
      }
    }
  };

  var stopNumber = consoleArray.concat(tempArray)

  console.log('You must travel through the following stops on the ' + tempDepLine.name + ': ' + consoleArray.toString(', '));
  console.log(transfer);
  console.log(unionSquareTransferString + tempArray.toString(', '));
  console.log(stopNumber.length + ' stops in total.');
};

// Next time over, call a separate function to deliver a single journey if on
// the same line, OR two journeys if on two lines.
// arriveLine === departLine, call journey ONCE
// arriveLine !== departLine, call Journey TWICE.
