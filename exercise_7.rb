def multiplication_list(list)
    number_index = 0
    numbers = []
  
    while number_index < list.length
      multiplication = 1
      list.each do |number|
        multiplication *= number
      end
      numbers.push(multiplication / list[number_index])
      number_index += 1
    end 
    
    numbers_array
  end
  
  multiplication_list([1,  2, 3, 4])