const numberArray = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

const odds = numberArray.filter(number => {
    if( typeof(number)=== "number"){
        return number
    } 
})
console.log(odds)