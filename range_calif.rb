def numbers_calif(list, number)
  list.each do |key, text_response| 
    return text_response if number < key.to_s.to_i
  end
  "No se encontro tu resultado"
end

numbers_list = {
  "4": "sin pico",
  "2000": "con poco fico",
  "2000000": "con fico regular",
  "5000000": "con buen fico" 
}

numbers_calif(numbers_list, 4000000)