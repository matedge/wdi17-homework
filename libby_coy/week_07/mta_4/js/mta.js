
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
			$('#output').append('<p>' + currentLine[i] + '</p>');
	  }
	} else {
		for (var i = stopNumOn; i >= stopNumOff; i--) {
			$('#output').append('<p>' + currentLine[i] + '</p>');
		}
	}
};

var planTrip = function(startLine, startStation, endLine, endStation) {
	if (startLine === endLine) {
		console.log(routeOf(startLine, startStation, endStation));
	} else {
		console.log(routeOf(startLine, startStation, 'Union Square')) + routeOf(endLine, 'Union Square', endStation);
	}
};


$(document).ready(function () {

$('#findroute').on('click', function () {

  var x = $('.first select').val();
  var y = $('.second select').val();

  var startLine = x.substring(0, 1);
  var startStation = x.substring(3);
  var endLine = y.substring(0, 1);
  var endStation = y.substring(3);

  planTrip(startLine, startStation, endLine, endStation);

});

$('#restart').on('click', function () {
  $('#output').empty();
});

});
