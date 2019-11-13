def plusMinus(arr)
  total_size = arr.size
  positive_numbers = 0
  negative_numbers = 0
  numbers_zero = 0
   
  arr.each do |number|
    case
    when number.positive? then positive_numbers += 1
    when number.negative? then negative_numbers += 1
    else numbers_zero += 1
    end
  end
  
  puts positive_numbers.fdiv(total_size) 
  puts negative_numbers.fdiv(total_size) 
  puts numbers_zero.fdiv(total_size)
end

arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr)