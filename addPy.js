//This function takes a string argument return a string if it starts with "Py" 
//Else it returns added "Py" string 

function addPy(inputString)
{
return (inputString[0]=="P" && inputString[1]=="y")?inputString:"Py"+inputString;
}
//invoking function
console.log(addPy("yalike"));