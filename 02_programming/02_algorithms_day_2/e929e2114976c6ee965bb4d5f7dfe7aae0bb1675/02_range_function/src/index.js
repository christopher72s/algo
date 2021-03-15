function range(valueA,valueB) {
  const array = [];
  let depart = valueA;
  if (valueA < valueB){
    for (let i = 0;  i <= (valueB-valueA); i++){
      array[i] =depart;
      depart++;
    }
  } 
  else if (valueA > valueB ){
    for (let i = 0; i <= (valueA -valueB); i++){
      array[i] =depart;
      depart--;
    }
  }
  else {
    array.push(depart); 
  }
  return array;

} 
// Code the function here.


// Do not remove last lines, it is for tests
module.exports = range;
