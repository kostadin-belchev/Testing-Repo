// const add = (x, y) => x + y
const add = x => y => x + y

let mult5 = value => value * 5

// let mult5AfterAdd10 = y => mult5(add(10, y))

const compose = (f, g) => x => f(g(x))

const mult5AfterAdd10 = compose(mult5, add(10))

console.log(mult5AfterAdd10(2))