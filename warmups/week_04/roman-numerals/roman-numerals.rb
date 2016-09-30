def roman_map
  {
    1000 => 'M',
    900 => 'CM',
    500 => 'D',
    400 => 'CD',
    100 => 'C',
    90 => 'XC',
    50 => 'L',
    40 => 'XL',
    10 => 'X',
    9 => 'IX',
    5 => 'V',
    4 => 'IV',
    1 => 'I'
  }
end

def to_roman( number )

  result = ""

  roman_map.each do |key, value|

    p "EACH: key is #{key}, value is #{value}"

    while number >= key
      p "WHILE: number is #{number}"
      result += value
      p "#{number} >= #{key}, so add #{value} to result: new value #{result}"
      p "result is #{result}"
      p "number -= key: #{number} - #{key} = #{number - key}"
      number -= key
    end

  end  #each

end  # to_roman()


to_roman 17
