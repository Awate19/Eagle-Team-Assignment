// A function that returns True if one of the numbers is 50 or sum of the numbers is 50
//Otherwise returns False
function checkNumber(number1,number2)
{
    let sum=number1+number2;
    return  ((number1==50) || (number2==50)||(sum==50))?true:false;
}
//Function calling
console.log(checkNumber(25,25));