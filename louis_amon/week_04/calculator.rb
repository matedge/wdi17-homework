def get_user_choice
  # Show user the available operations
  puts "(+) - Addition"
  puts "(-) - Subtraction"
  puts "(*) - Multiplication"
  puts "(/) - Division"
  puts "(**) - exponent"
  puts "(sqrt) - Square Root"
  puts "(m) - Mortgage Calculator"
  puts "(b) - BMI Calculator"
  puts "(t) - Trip time and Cost"
  puts "(q) - Quit"
  puts ""

  print "Enter your selection: "
  selection = gets.downcase.chomp
  return selection
end

def addition
  # prompt first number
  print "First Number: "
  a = gets.to_i
  # prompt second number
  print "Second Number: "
  b = gets.to_i
  # add them together
  puts "#{a} + #{b} = #{a + b}"
end

def subtraction
  # prompt first number
  print "First Number: "
  a = gets.to_i
  # prompt second number
  print "Second Number: "
  b = gets.to_i

  puts "#{a} - #{b} = #{a - b}"
end

def multiplication
  # prompt first number
  print "First Number: "
  a = gets.to_i
  # prompt second number
  print "Second Number: "
  b = gets.to_i

  puts "#{a} x #{b} = #{a * b}"
end

def division
  # prompt first number
  print "First Number: "
  a = gets.to_i
  # prompt second number
  print "Second Number: "
  b = gets.to_i

  puts "#{a} / #{b} = #{a / b}" unless b == 0
end

def exponent
  # prompt first number
  print "First Number: "
  a = gets.to_i
  # prompt second number
  print "Second Number: "
  b = gets.to_i

  puts "#{a} power #{b} = #{a ** b}"
end

def sqrt
  # prompt first number
  print "Get Number: "
  a = gets.to_i

  puts "Sqrt(#{a}) = #{Math.sqrt(a)}"
end

def mortgage
  # prompt first number
  print "Mortgage Amount: "
  p = gets.to_i

  print "Interest Rate: "
  i = gets.to_f

  print "Mortgage Period: "
  t = gets.to_i

  r = i / 12 # interest
  n = t * 12 # total time in months
  # temp_calc = (1 + r) ** n
  top_result = r * ((1 + r)**n)
  bottom_result = ((1 + r)**n) - 1
  m = p * (top_result/bottom_result)

  puts "Mortgage repayments pr month will be: $#{m.round(2)}"
end

def bmi
  print "Weight in (kg): "
  w = gets.to_f

  print "height is (m): "
  h = gets.to_f

  puts "Your BMI is #{(w / (h**2)).round(2)}"
end

def trip_cost
  print "Distance in (miles): "
  d = gets.to_f

  print "Speed in (miles/hr): "
  s = gets.to_i

  print "Miles per gallon: "
  mg = gets.to_i

  print "Price per gallon: "
  pg = gets.to_i

  t = (d / s) * 60

  tc = (d / mg) * pg

  puts "The trip took #{t.round(2)} minutes and it cost $#{tc.round(2)}"

end

menu_choice = get_user_choice

until menu_choice == "q"
  # Perform the user's desired action
  case menu_choice
  when "+"
    addition
    puts ""
  when "-"
    subtraction
    puts ""
  when "*"
    multiplication
    puts ""
  when "/"
    division
    puts ""
  when "**"
    exponent
    puts ""
  when "sqrt"
    sqrt
    puts ""
  when "m"
    mortgage
    puts ""
  when "b"
    bmi
    puts ""
  when "t"
    trip_cost
    puts ""
  else
    puts "Operation not available"
  end
  menu_choice = get_user_choice
end
