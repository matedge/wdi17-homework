def subway
  {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
end

print "Start Line: "
start_line = gets.chomp
print "Start Station: "
start_station = gets.chomp

print "End Line: "
stop_line = gets.chomp
print "End Station: "
stop_station = gets.chomp

def direction_check(s_line, s_station, e_line, e_station)
  subway_lines = subway
  start_pos = subway_lines[s_line].index s_station
  stop_pos = subway_lines[e_line].index e_station

  if start_pos < stop_pos
    trip = subway_lines[s_line][start_pos..stop_pos]
  else
    trip = subway_lines[s_line][stop_pos..start_pos].reverse
  end
  return trip

end

def get_route(s_line, s_station, e_line, e_station)
  if s_line == e_line
    # solution for same-line case
    trip = direction_check(s_line, s_station, e_line, e_station)
    trip.each { | station | p station }

  else
    # multi-line case
    i_station = "Union Square"
    # stop_pos = subway_lines[e_line].index i_station
    full_trip = []

    full_trip = direction_check(s_line, s_station, s_line, i_station)
    full_trip += direction_check(e_line, i_station, e_line, e_station)[1..-1]

    full_trip.each { | station | p station }

  end

end

get_route(start_line, start_station, stop_line, stop_station)
