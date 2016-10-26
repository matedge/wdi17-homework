$(document).ready(function () {

// array of arrays for lines and corresponding stations
var mta = [
  line_n = ['Times_Square', '34th', '28th_n', '23rd_n', 'Union_Square', '8th_n'],
  line_l = ['8th_l', '6th', 'Union_Square', '3rd', '1st'],
  line_6 = ['Grand_Central', '33rd', '28th_6', '23rd_6', 'Union_Square', 'Astor_Place']
  ]
// click go button - FIXME
  var showResults = $( "#submit" ).on( "click", function() {
    console.log( $( this ).text($.'output'));
  });

// display results in browser - FIXME


// from the browser - FIXME - not set correct buttons
var startLine = $("button").click(function() {
    return $(this).attr('class');
  });
var startStation = $("button").click(function() {
    return this.id;
  });
var endLine = $("button").click(function() {
    return this.class;
  });
var endStation = $("button").click(function() {
    return this.id;
  });

// start and end points
// var startLine = line_6;
// var startStation = '33rd';
// var endLine = line_l;
// var endStation = '3rd';
//
// works out number of stops to go through when travelling on same line as a positive integer
var sameLine = Math.abs(_.indexOf(startLine, startStation) - _.indexOf(endLine, endStation));
// works out number of stops to go through from starting point to Union Sq. when 2 lines are involved
var differentLineFirstLeg = Math.abs(_.indexOf(startLine, startStation) - _.indexOf(startLine, 'Union Square'));
// works out number of stops to go through from Union Sq. to end point when 2 lines are involved
var differentLineSecondLeg = Math.abs(_.indexOf(endLine, 'Union Square') - _.indexOf(endLine, endStation))

// function works out the number of stops depending on if the stops are on the sameline or different lines
var sameLine = function() {
  if (_.isEqual(startLine, endLine ) === true) {
  return sameLine;
  } else {
  var = differentLineFirstLeg + differentLineSecondLeg;
  };
 };


});
 //create error message
