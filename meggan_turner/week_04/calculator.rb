def get_user_choice
  ## Show user the available operations
  puts "(+) - Addition"
  puts "(-) - Subtraction"
  puts "(*) - Multiplication"
  puts "(/) - Division"
  puts "(^) - To the Power Of"
  puts "(r) - Root"
  puts "(q) - Quit"

  print "Enter your selection: "
  gets.downcase.chomp ## Implicit Return
end

# def get_values
#   print "First value: "
#   first_value = gets.to_i
#   print "Second value: "
#   second_value = gets.to_i
# end

def addition
  print "First value: "
  first_value = gets.to_f
  print "Second value: "
  second_value = gets.to_f
  result = first_value + second_value
  puts "The result is #{result}"
end

def subtraction
  print "First value: "
  first_value = gets.to_f
  print "Second value: "
  second_value = gets.to_f
  result = first_value - second_value
  puts "The result is #{result}"
end

def multiplication
  print "First value: "
  first_value = gets.to_f
  print "Second value: "
  second_value = gets.to_f
  result = first_value * second_value
  puts "The result is #{result}"
end

def division
  print "First value: "
  first_value = gets.to_f
  print "Second value: "
  second_value = gets.to_f
  result = first_value / second_value
  remainder = first_value % second_value
  puts "The result is #{result}, and the remainder is #{remainder}"
end

def exponent
  print "First value: "
  first_value = gets.to_f
  print "Second value: "
  second_value = gets.to_f
  result = first_value ** second_value
  puts "The result is #{result}"
end

def root
  print "Value n where n√x : "
  first_value = gets.to_f
  print "Value x where n√x : "
  second_value = gets.to_f
  result = second_value ** (1 / first_value)
  puts "The result is #{result}"
end


menu_choice = get_user_choice

until menu_choice == 'q'
  # Perform the user's deisred action
  case menu_choice
  when '+'
    addition
  when '-'
    subtraction
  when '*'
    multiplication
  when '/'
    division
  when '^'
    exponent
  when 'r'
    root
  end

  menu_choice = get_user_choice
end
