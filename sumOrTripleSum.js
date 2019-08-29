// Function, if two numbers are equal returns the triples of their sum
// Otherwise returns their sum
function tripleTheirSumIfTheyAreSame(number1,number2)
{
  let  sum=number1+number2;
 return    (number1==number2)?sum*3:sum;
}
//Function invoking
console.log(tripleTheirSumIfTheyAreSame(20,20));