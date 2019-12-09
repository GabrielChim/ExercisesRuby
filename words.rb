def limit_words(words, number)
  list = words.join
  word = ""
  limit_word = []
  
  list.chars.each do |character|
    word.concat(character)
    word = "" if word.length.eql?(number)
    limit_word.push(word)
  end

  limit_word.uniq
end

words = ['hola', 'este', 'es', 'un', 'nuevo', 'mensaje']
limit_words(words, 10)