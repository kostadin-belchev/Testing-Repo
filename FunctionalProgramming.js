let z = 10
function add(x, y) {
  return x + y
}

const solve = () => {
  let acc = 0
  for (let i = 1; i <= 10; i++) {
    acc += i
  }
  acc
}

solve()

function sumRange(start, end, acc) {
  if (start > end) {
    return acc
  }
  return sumRange(start + 1, end, acc + start)
}

console.log(sumRange(1, 10, 0))




