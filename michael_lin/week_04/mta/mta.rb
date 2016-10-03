def lines
  {
  'N' => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L' => ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6' => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }
end

def check_stations(t_line, start, stop)
  trip_line = lines[t_line] # Grabs the line for the journey
  start_index = lines[t_line].index start # grab index of start
  stop_index = lines[t_line].index stop # grab index of stop
  if start_index < stop_index
    trip = trip_line[start_index..stop_index]
  else
    trip = trip_line[stop_index..start_index].reverse
  end
  trip
end

def plan_trip(start_line, start_station, stop_line, stop_station)
  if start_line == stop_line
    puts "\nTravel on the #{start_line} line, to stations, "
    puts check_stations(start_line, start_station, stop_station)
  else
    puts "\nTravel on the #{start_line} line, to stations"
    puts check_stations(start_line, start_station, 'Union Square')
    puts "Change at Union Square to the #{stop_line} line. Continue to, "
    puts check_stations(stop_line, 'Union Square', stop_station)
  end
end

plan_trip("N", "Times Square", "N", "8th")
