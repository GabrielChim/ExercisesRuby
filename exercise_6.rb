require 'json'
require 'stringio'

# Complete the staircase function below.
def staircase(quantity)
  quantity.times do |number|
    number_symbol = number + 1
    puts " " * (quantity - number_symbol) + ("#" * number_symbol)
  end
end

n = gets.to_i

staircase n
