require 'set'

def intersect(list)
  intersection = 0
  list_combination = list.combination(2).to_a

  list_combination.each_with_index do |number, index|
    range = (number[0][0]..number[0][1]).to_a 
    intersection += 1 if (range.to_set.intersect? number[1].to_set)
  end

  intersection
end

numbers_list = [
  [1,20],
  [5,40],
  [6, 50],
  [51, 60],
  [6, 11]
]
intersect(numbers_list)