function maxSum(list) {
  const row = [];
  const columns = [];
  let sum = 0;
  for (let indexRow = 0; indexRow < list.length; indexRow++) {
    row.push(list[indexRow].reduce( (numberOne, numberTwo) => numberOne + numberTwo ));
  
    for (let indexColumn = 0; indexColumn < list.length; indexColumn++) {
      sum += list[indexColumn][indexRow];
    }
    columns.push(sum);
    sum = 0;
  }
  return Math.max(...row, ...columns);
}
  
const numbersList = [ 
  [6, 7, 8],
  [1, 4, 29],
  [4, 78, 12]
];
console.log(maxSum(numbersList));