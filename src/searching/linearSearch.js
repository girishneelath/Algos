function linearSearch(array, numberToFind) {
    for (var i = 0; i < arrayLength; i++){
        if (array[i] === numberToFind)
            return "The number was found at the array index: "+ i; //This returns the poistion at which the number is found in the array
    }
    return "The number was not found in the array"; //This executes if we were not able to find the number in the array
}

var arrayOfNumbers = [1, 4, 6, 12, 18, 22, 27, 33, 35, 38, 40, 44, 49, 50, 52];
var numberToSearch = 1;
var arrayLength = arrayOfNumbers.length;

console.log(linearSearch(arrayOfNumbers, numberToSearch));
