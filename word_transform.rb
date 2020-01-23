def word_transform(word, expected_word)
  return replace_char(word, expected_word) if word.size.eql?(expected_word.size)
   
  if word.size > expected_word.size
    delete_char(word, expected_word)
    return replace_char(word, expected_word) if word.size.eql?(expected_word.size)
  end
  
  return add_char(word, expected_word) if word.size < expected_word.size
end
  
def replace_char(word, expected_word)
  new_word = ""
  expected_word.each_char.with_index do |char, index|
    puts "Reemplazar #{word[index]} por #{char}" if char != word[index]
    new_word.insert(index, char)
  end
  return new_word
end
  
def delete_char(word, expected_word)
  word.each_char.with_index do |char, index|
    if word.size != expected_word.size
      word.delete_prefix!(char)
      next puts "Eliminar #{char}"
    end
    return
  end
end
  
def add_char(word, expected_word)
  new_word = ""
  cont = 0
  expected_word.each_char.with_index do |char, index|
    new_word += char
    next cont += 1 if expected_word[index].eql? word[cont]
    puts "Agregar #{char}" 
  end
  return new_word
end
  
word = "dado"
expected_word = "candados"
 
word_transform(word, expected_word)