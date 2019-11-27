def max_sum(list)
  list_transpose = list.transpose 
  row = []
  columns = []

  list.each do |number|
    row.push(number.sum)
  end
  
  list_transpose.each do |number|
    columns.push(number.sum)
  end
  
  [row.max, columns.max].max
end

numbers_list = [ 
  [6, 7, 8],
  [1, 4, 29],
  [4, 78, 12]
]

max_sum(numbers_list)