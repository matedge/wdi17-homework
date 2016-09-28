# create methods for all the things you want the user to do

def get_user_choice
  # Show user the available operations
  puts "(+) - Addition"
  puts "(-) - Subtractionn"
  puts "(*) - Multiplication"
  puts "(/) - Division"
  puts "(**) - Squaring"
  puts "(<3) - BMI Calculator"
  puts "(<>) - Trip Calculator"
  puts "(m) - Mortgage Calculator"
  puts "(q) - Quits"

  print "Enter your selection: "
  gets.downcase.chomp # Implicit return
end

def addition
  print "Enter first number: "
  first_num = gets.to_i

  print "Enter second number: "
  second_num = gets.to_i

  print "The answer is #{first_num + second_num} \n"
end

def subtraction
  print "Enter first number: "
  first_num = gets.to_i

  print "Enter second number: "
  second_num = gets.to_i

  print "The answer is #{first_num - second_num} \n"
end

def division
  print "Enter first number: "
  first_num = gets.to_i

  print "Enter second number: "
  second_num = gets.to_i

  print "The answer is #{first_num / second_num} \n"
end

def multiplication
  print "Enter first number: "
  first_num = gets.to_i

  print "Enter second number: "
  second_num = gets.to_i

  print "The answer is #{first_num * second_num} \n"
end

def squaring
  print "Enter your number: "
  first_num = gets.to_i

  print "Enter the number to square it by: "
  second_num = gets.to_i

  print "The answer is #{first_num ** second_num} \n"
end

def body_mass_index
  print "Enter your weight in kg: "
  weight = gets.to_f

  print "Enter your height in cm: "
  height = (gets.to_f)/100

  print "The answer is #{weight / (height * height)} \n"
end

def trip_calculator
  print "Enter your total trip distance in miles: "
  distance = gets.to_f

  print "Enter your car's miles per gallon: "
  mpg = gets.to_f

  print "Enter the price per gallon in dollars: "
  price = gets.to_f

  print "Enter how many miles you will drive per hour: "
  per_hour = gets.to_f

  print "The trip will take you #{ distance / per_hour } hours\nand it will cost you $#{ distance / mpg * price }.\n "

end

def mortgage_calculator
  print "Please enter your principal: "
  principal = gets.to_f

  print "Enter your annual interest rate: "
  interest_rate = gets.to_f

  print "Enter the amount of months you will pay off the loan: "
  months = gets.to_f

  monthly_rate = interest_rate / 12
  x = (1 + monthly_rate) ** months

  monthly_payment = (principal * monthly_rate * x) / ( x - 1 )

  print "Your monthly payment will be $#{ monthly_payment }.\n"

end

menu_choice = get_user_choice

# puts "Thank you for selecting: #{ menu_choice }"
# here you call the division function

until menu_choice == 'q'

  case menu_choice
  when '+'
    addition # will print out "Pretending to do addition"

  when '-'
    subtraction

  when '/'
    division

  when '*'
    multiplication

  when '**'
    squaring

  when '<3'
    body_mass_index

  when '<>'
    trip_calculator

  when 'm'
    mortgage_calculator

  end

  #get the next operation
  puts "You can perform another operation."
  menu_choice = get_user_choice
end
# has the user entered q yet? Until he has, Quits
