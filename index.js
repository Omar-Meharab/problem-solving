// function to get largest number from an array factorial divided by an integer
let getLargestNumber = (givenArray, number) => {
    let array = givenArray;
    let divider = number;
    let newArray = [];
    // function to divide the array. a will take the array and b will take the number that will that the array
    let getArrayAfterDividing = (array, divider) => {
        for (let i = 0; i < array.length; i++) {
            newArray.push(Math.ceil(array[i] / divider));
        }
    }

    // call the function to get the new array
    let result = getArrayAfterDividing(givenArray, number);
    // console.log(newArray);      // for checking answers


    // function to get the factorials of the elements of the newArray
    const getFactorialOfElement = (num, fact = 1) => {
        if (num) {
            return getFactorialOfElement(num - 1, fact * num);
        };
        return fact;
    };

    // mapping the newArray to send elements to the factorial function
    const factorialOfArray = array => array.map(element => getFactorialOfElement(element));
    const arrayAfterFactorial = (factorialOfArray(newArray));
    return Math.max(...arrayAfterFactorial);
}

let a = [1, 4, 7, 16];
let b = [4]

console.log(getLargestNumber(a, b));