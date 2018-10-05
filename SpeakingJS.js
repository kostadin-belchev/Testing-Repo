function createIncrement(startValue) {
    return function (counter) {
        return startValue += counter
    }
}

let inc = createIncrement(10)
console.log(inc(2));
