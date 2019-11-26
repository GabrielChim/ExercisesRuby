def calculate(number_one, number_two)
  yield(number_one, number_two) if block_given?
end

p calculate(15, 10) {|number_one, number_two| number_one - number_two}
p calculate(15, 10) {|number_one, number_two| number_one + number_two}
p calculate(15, 10) {|number_one, number_two| number_one * number_two}
p calculate(15, 10) {|number_one, number_two| number_one / number_two}