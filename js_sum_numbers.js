function numbersSum(list){
  let sum = 0; 
  let position = 0;
  list.forEach((number) => {
    const digit = number.split('.')[position];
    if (!isNaN(digit)) sum += parseInt(digit), position++;
  });
  return sum;
}

const list = ["13.09.2017", "13.09.2018", "44.09.2018", "13.09.7"];
console.log(numbersSum(list));