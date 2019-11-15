def sum_list (list_numbers)
  sum_numbers = 0
  
  list_numbers.each_index do |digit|
    digits = ""
    list_numbers[digit].to_s.chars.reverse_each do |number|
      break if number == "0"
      digits += number
    end
    sum_numbers += digits.reverse.to_i
  end
  
  sum_numbers
end

list_numbers = [1200000265, 1000002360, 1670000800, 1000006002, 1000000233]

sum_list(list_numbers)