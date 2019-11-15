def product_rigth_array (digits_array)
  sum_numbers = 0

  digits_array.each_index do |item|
    digit = ""
    digits_array[item].to_s.chars.reverse_each do |number|
      break number if number == "0"
      digit += number
    end
    sum_numbers += digit.reverse.to_i
  end

  sum_numbers
end

numbers = [1200000265, 1000002360, 1670000800, 1000006002, 1000000233]

product_rigth_array(numbers)