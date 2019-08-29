//function to remove a character residing at the given index number of the given string
function removeCharacter(inputString, index)
{
let afterremoved="";
for(i=0;i<inputString.length;i++)
{
if(i==index)
{
    continue
}
afterremoved+=inputString[i];
}
return afterremoved;
}
//invoking the function
console.log(removeCharacter("awet",2))