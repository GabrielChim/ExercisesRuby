def palindrome? (word)
  word_inverter = word.delete(" ").reverse
  word_inverter.eql?(word.delete(" "))
end

palindrome?("anita lava la tina")