def mta
  {
  'N' => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L' => ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6' => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }
end

def get_stations(line, start_station, end_station)
  trip_line = mta[line]
  s_station = mta[line].index start_station
  e_station = mta[line].index end_station
  if s_station < e_station
    trip = trip_line[s_station..e_station]
  else
    trip = trip_line[e_station..s_station].reverse
  end
  trip
end

def plan_trip(start_line, start_station, end_line, end_station)
  if start_line == end_line
    print "You must go through the following stops on the #{start_line} line: "
    trip_one = get_stations(start_line, start_station, end_station)
    puts trip_one
    puts "#{trip_one.flatten.length} stops in total."
  else
    print "You must go through the following stops on the #{start_line} line: "
    trip_one = get_stations(start_line, start_station, 'Union Square')
    puts trip_one
    puts "Change at Union Square."
    puts "Your journey continues through the following stops on the #{end_line} line: "
    trip_two = get_stations(end_line, 'Union Square', end_station)
    puts trip_two
    puts "#{trip_one.flatten.length + trip_two.flatten.length} stops in total."
  end
end


require 'pry'
binding.pry
