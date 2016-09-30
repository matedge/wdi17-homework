train_lines = {
  :line6 => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  :lineN => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  :lineL => ['8th', '6th', 'Union Square', '3rd', '1st']
}

print "Which line are you starting on: "
line_start = "line" + gets.chomp
line_start = line_start.to_sym

print "Which station are you starting at: "
station_first = gets.chomp.to_s

print "Which line do you need to go to: "
line_end = "line" + gets.chomp
line_end = line_end.to_sym

print "Which station do you need to go to: "
station_end = gets.chomp.to_s


index_station_first = train_lines[line_start].index(station_first)
index_station_second = train_lines[line_start].index("Union Square")
index_station_third = train_lines[line_end].index("Union Square")
index_station_end = train_lines[line_end].index(station_end)

if line_start == line_end
  index_station_end = train_lines[line_start].index(station_end)

  if station_first == station_end
    print "You're already here"
  else
    if index_station_first > index_station_end
      train_lines[line_start].reverse!
      index_station_first = train_lines[line_start].index(station_first)
      index_station_end = train_lines[line_end].index(station_end)
      path = train_lines[line_start][index_station_first...index_station_end].join(', ')
    else
      path = train_lines[line_start][index_station_first...index_station_end].join(', ')
    end

    print "You need to travel through #{path} before you finish up at #{station_end}"
  end

else
  if index_station_first < index_station_second
    path_first = train_lines[line_start][index_station_first...index_station_second].join(', ')
  else
    train_lines[line_start].reverse!
    index_station_first = train_lines[line_start].index(station_first)
    index_station_second = train_lines[line_start].index("Union Square")
    path_first = train_lines[line_start][index_station_first...index_station_second].join(', ')
  end

  if index_station_third < index_station_end
    path_second = train_lines[line_end][index_station_third..index_station_end].join(', ')
  else
    train_lines[line_end].reverse!
    index_station_third = train_lines[line_end].index("Union Square")
    index_station_end = train_lines[line_end].index(station_end)
    path_second = train_lines[line_end][index_station_third..index_station_end].join(', ')
  end

  print "You need to travel through #{path_first} and change at Union Square. Your journey continues through #{path_second}."

end
