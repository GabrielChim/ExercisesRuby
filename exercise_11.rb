#!/bin/ruby

require 'json'
require 'stringio'

# Complete the birthday function below.
def birthday(arr, expected_sum, length)
  new_list = arr.each_cons(length).to_a
  sum_result = 0
  new_list.each do |item|
    if item.reduce(:+).eql?(expected_sum)
      sum_result += 1
    end
  end
  sum_result
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

n = gets.strip.to_i

s = gets.rstrip.split.map(&:to_i)

dm = gets.rstrip.split

d = dm[0].to_i

m = dm[1].to_i

result = birthday s, d, m

fptr.write result
fptr.write "\n"

fptr.close()
