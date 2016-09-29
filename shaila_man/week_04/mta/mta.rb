# Title: MTA Lab
#
# Activity:
#
# Students should create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.
#
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# Hints:
#
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

#create hash of mta with lines as keys and corresponding stations as values
mta = {
'line_n' => ['Times Square', '34th', '28th_n', '23rd_n', 'Union Square', '8th_n'],
'line_l' => ['8th_l', '6th', 'Union Square', '3rd', '1st'],
'line_6' => ['Grand Central', '33rd', '28th_6', '23rd_6', 'Union Square', 'Astor Place']
}

# start and end variables
start_line = 'line_n'
start_station = 'Times Square'
end_line = 'line_n'
end_station = '8th_n'

## cannot get the following code to work for input of start and end keys/values on the screen

# puts "Insert your start line  #{mta.keys}"
#   start_line = gets.chomp
# if start_line = 'line_n'
# "Insert your start station  #{mta['line_n']}"
# start_station = gets.chomp
# elsif start_line == 'line_l'
# puts "Insert your start station  #{mta['line_l']}"
# start_station = gets.chomp
# elsif start_line == 'line_6'
# puts "Insert your start station  #{mta['line_6']}"
#   start_station = gets.chomp
# else
#   puts "That station does not exits"
# end
#

#if the start and end stations are on the same line, work out the difference.
if start_line === end_line
  difference = mta[start_line].index(end_station) - mta[end_line].index(start_station)
  journey = difference.abs
  puts "You need to travel #{journey.to_s} stops to your destination."
else
  #work out first leg of journey from start station on start line to Union Square
  difference_first_leg = mta[start_line].index('Union Square') - mta[start_line].index(start_station)
  #work out second leg of journey from Union Square to end station on the end line
  difference_second_leg = mta[end_line].index(end_station) - mta[end_line].index('Union Square')
  #add togther
  total_journey = difference_first_leg.abs + difference_second_leg.abs
  puts "You need to travel #{total_journey.to_s} stops to your destination."
end

##not really sure how the pry thing works. Doesn't seem to come natually to me.
 # require 'pry'
 # binding pry
