def get_user_choice
  puts "(+) - Addition"
  puts "(-) - Subtraction"
  puts "(*) - Multiply"
  puts "(/) - Divide"
  puts "(**) - Exponent"
  puts "(sr) - Square root"
  puts "(q) - Quit"

  print "Enter your selection: "
  selection = gets.chomp

  # if selection = '+'
  #   calculate =
end

def addition
  print "What is the first number you would like to add: "
  firstNum = gets.to_i
  print "What is the second number you would like to add: "
  secNum = gets.to_i
  puts "The sum of #{firstNum} + #{secNum} = #{firstNum + secNum}"
end


def addition
  print "What is the first number you would like to add: "
  firstNum = gets.to_i
  print "What is the second number you would like to add: "
  secNum = gets.to_i
  puts "The sum of #{firstNum} + #{secNum} = #{firstNum + secNum}"
end

def subtraction
  print "What is the first number you would like to subtract: "
  firstNum = gets.to_i
  print "What is the second number you would like to substract: "
  secNum = gets.to_i
  puts "The total of #{firstNum} - #{secNum} = #{firstNum - secNum}"
end

def multiplication
  print "What is the first number you would like to multiply: "
  firstNum = gets.to_i
  print "What is the second number you would like to multiply: "
  secNum = gets.to_i
  puts "The total of #{firstNum} * #{secNum} = #{firstNum * secNum}"
end

def division
  print "What is the first number you would like to divide: "
  firstNum = gets.to_i
  print "What is the second number you would like to divide: "
  secNum = gets.to_i
  puts "The total of #{firstNum} / #{secNum} = #{firstNum / secNum}"
end

def exponent
  print "What is the base number: "
  firstNum = gets.to_i
  print "To what number should the base be to the power of: "
  secNum = gets.to_i
  puts "The total of #{firstNum} ** #{secNum} = #{firstNum ** secNum}"
end

def square_root
  print "What number would you like to find the square root of: "
  firstNum = gets.to_i
  puts "The square root of #{firstNum} = #{Math.sqrt(firstNum)}"
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
  when 'sr'
    square_root
  end

  # Perform the user's desired action

  # Get the next operation

  menu_choice = get_user_choice
end
