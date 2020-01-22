def find_words_in_phrase(list_words, phrase)
  new_list = []
  list_words.map do |word|
    new_list.insert(phrase.index(word), word)  
  end
  new_list.compact
end

list_words = ['hola', 'de', 'nuevo', 'gabo']
phrase = 'mundogabodenuevogatohola'

find_words_in_phrase(list_words, phrase)