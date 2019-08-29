//This program checks whether the input number is multiple of five or seven and returns boolean value 
function isMultipleOfFiveOrSeven(num)
{
return ((num%7==0)||(num%3==0))?true:false;
}
//Calling the function
console.log(isMultipleOfFiveOrSeven(12));