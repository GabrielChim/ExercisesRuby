def letter_binas(list_letters)
  alphabet = ('A'..'Z').to_a
  binas = []
  alphabet.each_cons(2) { |bina| binas.push(bina.join) }
  
  list_letters.each do |word|
    unless binas.include?(word)
      return false
    end
  end
  
  true
end

list_letters = ['AB','IH','CD']
letter_binas(list_letters)