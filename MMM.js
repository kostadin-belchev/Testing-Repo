// const mapNotificationClassNameToType = className => 
//   ({
//     ...['success', 'info', 'warning', 'error'].reduce((acc, value) => ({ ...acc, [value]: value }), {}),
//     danger: 'error',
//   }[[...className.split('-')].pop()]) // assume bs-callout-[success|danger|etc] is the last class

// console.log(mapNotificationClassNameToType('bs-callout bs-callout-sm bs-callout-danger'))
// console.log(mapNotificationClassNameToType('bs-callout bs-callout-sm bs-callout-warning'))

// // console.log(...['success', 'info', 'warning', 'error'].reduce())

// let obj1 = { success: 'success', info: 'info' }
// let obj2 = {...obj1, danger: 'error'}

// obj2
// let obj3 = obj2

// console.log(obj3 === obj2)
// console.log(obj1 === obj2)

///////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////
const roundValue = ({ value, roundTo = 6 }) => {
  if (value != null) {
    const isNumeric = val => !Number.isNaN(Number.parseFloat(val)) && isFinite(val)
    
    const floatingNumber = value.toString().split('.')[1]

    return floatingNumber && floatingNumber.length > roundTo && isNumeric(value)
      ? Math.round(value * 10 ** roundTo) / 10 ** roundTo
      : value
    }   
}


console.log(roundValue({value: 3.333, roundTo: 2}))