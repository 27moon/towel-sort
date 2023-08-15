
// You should implement your task here.
function towel (matrix) {

}

  
  

module.exports = function towelSort (matrix) {

  if (matrix === undefined || matrix.length === 0) {
   return [];
  } else {
  let result =  matrix.filter((item, index) => (index % 2)); //отделяем только четные элементы 
  for (let value of result) {
    value.reverse();
  }
}
  let final = matrix.join(); //получили строку

  let arrOfString = final.split(','); //делаем числа вместо строки = [1, 2, 3] вместо ["1, 2, 3"]
  let arrOfNumbers = arrOfString.map(element => {
    return Number(element);
  });

  return arrOfNumbers;
}
