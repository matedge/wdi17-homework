def get_user_choice
  # Show user the available operations
  puts "(+) - Addition"
  puts "(-) - Subtraction"
  puts "(*) - Multiplication"
  puts "(/) - division"
  puts "(ex) - Exponents"
  puts "(sq) - Square Roots"
  puts "(bmi) - BMI check"
  puts "(mort) - Mortgage check"
  puts "(trip) - Trip cost"
  puts "(q) - Quit"


  print "Enter your selection: "
  gets.downcase.chomp # Implicit return
end

## BASIC calculator /////////////////////////////////////////////////
def addition
  print "First number: "
  first_num = gets.to_i
  print "Second number to add: "
  second_num = gets.to_i

  puts "\nYour result is #{ first_num + second_num }\n\n"
end

def subtraction
  print "First number: "
  first_num = gets.to_i
  print "Second number to add: "
  second_num = gets.to_i

  puts "\nYour result is #{ first_num - second_num }\n\n"
end

def multiplication
  print "First number: "
  first_num = gets.to_i
  print "Second number to add: "
  second_num = gets.to_i

  puts "\nYour result is #{ first_num * second_num }\n\n"
end

def division
  print "First number: "
  first_num = gets.to_i
  print "Second number to add: "
  second_num = gets.to_i

  puts "\nYour result is #{ first_num / second_num }\n\n"
end

## ADVANCE CALCULATOR //////////////////////////////////////

def exponents
  print "First number: "
  first_num = gets.to_i
  print "Exponent: "
  second_num = gets.to_i

  puts "\nYour result is #{ first_num ** second_num }\n\n"
end

def square_root
  print "What number do you want the square root of: "
  sqrt_num = gets.to_i

  puts "\nYour result is #{ Math.sqrt(sqrt_num) }\n\n"
end

def bmi
  print "What is your weight in kilograms: "
  weight = gets.to_i
  print "What is your height in meters: "
  height = gets.to_f

  puts "\nYour result is #{ (( weight / height ) / height).round(1) }\n\n"
end

def mortgage
  print "What is the initial amount borrowed: "
  principal = gets.to_i
  print "What is your interest rate (as a percent): "
  interest_as_percent = gets.to_f
  print "What are the number of payments: "
  n = gets.to_i

  i = ((interest_as_percent * 0.01) /12)

  puts "\nYour monthly required payment is $#{ (principal * (i * ( 1 + i )**(n) ) / ((1 + i) ** (n) - 1)).round(2) }\n\n"
  # ORIGINAL FORMULA: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
end

def trip_cost
  print 'What is the total distance travelled in miles: '
  distance = gets.to_f
  print 'How many miles per gallon: '
  mpg = gets.to_f
  print 'What is the price per gallon: '
  ppg = gets.to_f
  print 'What is your average speed per mile: '
  spm = gets.to_f

  puts "\nYour trip time is approximately #{ (distance/spm)* 10 } minutes."
  puts "Your trip will cost about $#{((distance / mpg) * ppg).round(2)}\n\n"

end


menu_choice = get_user_choice

until menu_choice == 'q'
  # Perform the user's desired action
  case menu_choice
  when '+'
    addition
  when '-'
    subtraction
  when '*'
    multiplication
  when '/'
    division
  when 'adv'
    advanced_operation
  when 'ex'
    exponents
  when 'sq'
    square_root
  when 'bmi'
    bmi
  when 'mort'
    mortgage
  when 'trip'
    trip_cost

  end
  #Get the next operation
  menu_choice = get_user_choice
end

# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour
