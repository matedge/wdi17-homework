def get_user_choice
  puts "(+) - Addition"
  puts "(-) - Subtraction"
  puts "(*) - Multiply"
  puts "(/) - Divide"
  puts "(**) - Exponent"
  puts "(s) - Square root"
  puts "(m) - Mortgage calculator"
  puts "(b) - Body Mass Index"
  puts "(t) - Trip calculator"
  puts "(q) - Quit"

  print "Enter your selection: "
  selection = gets.chomp

  # if selection = '+'
  #   calculate =
end

def addition
  print "What is the first number you would like to add: "
  first_num = gets.to_i
  print "What is the second number you would like to add: "
  sec_num = gets.to_i
  puts "The sum of #{first_num} + #{sec_num} = #{first_num + sec_num}"
end


def addition
  print "What is the first number you would like to add: "
  first_num = gets.to_i
  print "What is the second number you would like to add: "
  sec_num = gets.to_i
  puts "The sum of #{first_num} + #{sec_num} = #{first_num + sec_num}"
end

def subtraction
  print "What is the first number you would like to subtract: "
  first_num = gets.to_i
  print "What is the second number you would like to substract: "
  sec_num = gets.to_i
  puts "The total of #{first_num} - #{sec_num} = #{first_num - sec_num}"
end

def multiplication
  print "What is the first number you would like to multiply: "
  first_num = gets.to_i
  print "What is the second number you would like to multiply: "
  sec_num = gets.to_i
  puts "The total of #{first_num} * #{sec_num} = #{first_num * sec_num}"
end

def division
  print "What is the first number you would like to divide: "
  first_num = gets.to_i
  print "What is the second number you would like to divide: "
  sec_num = gets.to_i
  puts "The total of #{first_num} / #{sec_num} = #{first_num / sec_num}"
end

def exponent
  print "What is the base number: "
  first_num = gets.to_i
  print "To what number should the base be to the power of: "
  sec_num = gets.to_i
  puts "The total of #{first_num} ** #{sec_num} = #{first_num ** sec_num}"
end

def square_root
  print "What number would you like to find the square root of: "
  first_num = gets.to_i
  puts "The square root of #{first_num} = #{Math.sqrt(first_num)}"
end

def mortgage_calc
  print "What is the principal: "
  principal = gets.to_i
  print "What percent is the annual interest rate: "
  rate = ((gets.to_f) / 100) /12
  print "How many years is the repayments over: "
  numPay = (gets.to_i) * 12
  monthly_repayments = principal * ((rate*((1 + rate)**(numPay)))/(((1 + rate)**(numPay))-1))
  puts "The monthly repayments needed for a principal of $#{principal} with a rate of #{rate * 100 * 12} % over #{numPay / 12} years = $#{monthly_repayments.round(2)}"
end

def body_mass_index
  print "What is your height in meters: "
  height = gets.to_f
  print "What is weight: "
  weight = gets.to_i
  bmi = (weight/height)/height
  puts "your BMI = #{bmi.round(2)}"
end

def trip_calculator
  print "What is the distance travelled on the trip: "
  distance = gets.to_i
  print "What is the miles per gallon: "
  miles = gets.to_i
  print "What is the price per gallon: "
  price = gets.to_i
  print "What is the speed in miles per hour: "
  speed = gets.to_i
  puts "the trip cost = $#{(distance / miles) * price} and the time taken = #{distance / speed} hours"
end

menu_choice = get_user_choice

until menu_choice == 'q'

  case menu_choice
  when '+'
    addition
  when '-'
    subtraction
  when '*'
    multiplication
  when '/'
    division
  when '**'
    exponent
  when 's'
    square_root
  when 'm'
    mortgage_calc
  when 'b'
    body_mass_index
  when 't'
    trip_calculator
  end

  # Perform the user's desired action

  # Get the next operation

  menu_choice = get_user_choice
end
