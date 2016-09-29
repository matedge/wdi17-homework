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


def subway
{
    "n" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "l" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "six" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    }
end

def single_line_trip(line, start_station, end_station)


  first = subway[line].index start_station.to_s
  last = subway[line].index end_station.to_s

  if first < last
    answer = subway[line][ first..last ]
  else
    answer = subway[line][ last..first ].reverse
  end


end



  print "Please enter line you are getting on at (n, l or six): "
  line_on = gets.chomp

  print "Please enter the stop name you are getting on at: "
  stop_on = gets.chomp

  print "Please enter line you are getting off at (n, l or six): "
  line_off = gets.chomp

  print "Please enter the stop name you are getting of at: "
  stop_off = gets.chomp



  if line_on == line_off

    answer = single_line_trip( line_on, stop_on, stop_off )

    print "You will stop at: "
    answer.each { |stop| puts stop }

  elsif line_on != line_off

    answer = single_line_trip( line_on, stop_on, "Union Square" )
    answer_two = single_line_trip( line_off, "Union Square", stop_off )

    puts "You will stop at: "
    answer.each do |stop|
      puts stop
    end

    puts "Then you will stop at: "
    answer_two.each do |stop|
      puts stop
    end

    # first = subway[line_on].index stop_on.to_s
    # middle = subway[line_on].index "Union Square"
    # second_middle = subway[line_off].index "Union Square"
    # last = subway[line_off].index stop_off.to_s
    #
    # if first < middle
    #   answer_one = subway[line_on].values_at( first..middle )
    # else
    #   answer_one = subway[line_on].values_at( middle..first ).reverse
    # end
    #
    # print "You will take the following stops at #{line_on}: #{answer_one}"
    #
    # if second_middle < last
    #   answer_two = subway[line_off].values_at( second_middle..last )
    # else
    #   answer_two = subway[line_off].values_at( last..second.middle ).reverse
    # end
    #
    # puts "Then switch to line #{line_off} and take #{answer_two}."

  end
