const mapNotificationClassNameToType = className => 
  ({
    ...['success', 'info', 'warning', 'error'].reduce((acc, value) => ({ ...acc, [value]: value }), {}),
    danger: 'error',
  }[[...className.split('-')].pop()]) // assume bs-callout-[success|danger|etc] is the last class

console.log(mapNotificationClassNameToType('bs-callout bs-callout-sm bs-callout-danger'))
console.log(mapNotificationClassNameToType('bs-callout bs-callout-sm bs-callout-warning'))

// console.log(...['success', 'info', 'warning', 'error'].reduce())

let obj1 = { success: 'success', info: 'info' }
let obj2 = {...obj1, danger: 'error'}

obj2
let obj3 = obj2

console.log(obj3 === obj2)
console.log(obj1 === obj2)
