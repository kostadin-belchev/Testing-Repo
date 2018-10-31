function createIncrement(startValue) {
    return function (counter) {
        return startValue += counter
    }
}

let inc = createIncrement(10)
console.log(inc(2));


const array = [1, 2, 3]

array.forEach((element, index) => {
    array[index] = element * 2
});

array