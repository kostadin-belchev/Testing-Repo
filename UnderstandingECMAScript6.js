let node = {
  type: "Identifier",
  name: "foo",
  loc: {
      start: {
          line: 1,
          column: 1
      },
      end: {
          line: 1,
          column: 4
      }
  }
};

let { type, loc: { end: localEnd }, value: localValue = 'default local value' } = node
console.log(localEnd.column)
console.log(localValue)

// let node = {
//   type: 'Indentifier',
//   name: 'foo'
// }
// let type = 'Literal'
// let name = 5;

// function outputInfo({ type: localType, name: localName, value: localValue = 'default local value' }) {
//   console.log(localType)
//   console.log(localName)
//   console.log(localValue)
// }

// outputInfo(node)

// console.log(type)
// console.log(name)

let colors = [ "red", [ "green", "lightgreen" ], "blue" ];

// later

let [ firstColor, [ secondColor, thirdColor, fourthColor = 'purple' ], sixthColor ] = colors;

console.log(firstColor);        // "red"
console.log(secondColor);       // "green"
console.log(thirdColor)
console.log(fourthColor)
console.log(sixthColor)
