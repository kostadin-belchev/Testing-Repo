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


// const generateIdSequence = ({ isDeclining = false, id = 0 } = {}) => (isDeclining ? () => --id : () => id++)

// const getNextIdForTradeInstructions = generateIdSequence()
// getNextIdForTradeInstructions
// let result1 = getNextIdForTradeInstructions()
// let result11 = getNextIdForTradeInstructions()
// let result111 = getNextIdForTradeInstructions()

// console.log(result1) // 0
// console.log(result11) // 1
// console.log(result111) // 2


// const getNextNegativeIdForNewSessionTabs = generateIdSequence({ isDeclining: true })
// getNextNegativeIdForNewSessionTabs
// let result2 = getNextNegativeIdForNewSessionTabs()
// let result22 = getNextNegativeIdForNewSessionTabs()

// console.log(result2) // -1
// console.log(result22) // -2

