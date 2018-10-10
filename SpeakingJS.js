function createIncrement(startValue) {
    return function (counter) {
        return startValue += counter
    }
}

let inc = createIncrement(10)
console.log(inc(2));


for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}