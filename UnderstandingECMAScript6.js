// let node = {
//   type: "Identifier",
//   name: "foo",
//   loc: {
//       start: {
//           line: 1,
//           column: 1
//       },
//       end: {
//           line: 1,
//           column: 4
//       }
//   }
// };

// let { type, loc: { end: localEnd }, value: localValue = 'default local value' } = node
// console.log(localEnd.column)
// console.log(localValue)

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

// let colors = [ "red", [ "green", "lightgreen" ], "blue" ];

// let [...clonedColors] = colors
// console.log(clonedColors)

// // later

// let [ firstColor, [ secondColor, thirdColor, fourthColor = 'purple' ], sixthColor ] = colors;

// console.log(firstColor);        // "red"
// console.log(secondColor);       // "green"
// console.log(thirdColor)
// console.log(fourthColor)
// console.log(sixthColor)

// let o = {
//     *createIteratorFunrtion(items) {
//         for (let i = 0; i < items.length; i++) {
//             yield items[i]
//         }
//     }
// }
// let array = ['a', 'b', () => console.log('hey'), 3]
// let itemsIterator = o.createIteratorFunrtion(array)

// console.log(itemsIterator.next().value)
// console.log(itemsIterator.next().value)
// console.log(itemsIterator.next().value)
// console.log(itemsIterator.next().value)
// console.log(itemsIterator.next().value)
// console.log(itemsIterator.next().value)
// let arrayIterator = array.entries()
// let arrayIterator2 = array.values()
// let arrayIterator3 = array.keys()

// for (const key in array) {
    
//         const element = array[key];
//         console.log(element)
    
// }

// for (const iterator of array) {
//     console.log(iterator)
// }

// for (const elem of arrayIterator) {
//     console.log(elem)
// }

// for (const elem of arrayIterator2) {
//     console.log(elem)
// }

// for (const elem of arrayIterator3) {
//     console.log(elem)
// }

// class PersonClass {

//     // equivalent of the PersonType constructor
//     constructor(name) {
//         this.name = name;
//     }

//     // equivalent of PersonType.prototype.sayName
//     sayName() {
//         console.log(this.name);
//     }

//     // equivalent of PersonType.create
//     static create(name) {
//         return new PersonClass(name);
//     }
// }

// let person = PersonClass.create("Nicholas");
// console.log(person.name)
// person.sayName()

let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p2 = new Promise(function(resolve, reject) {
    resolve(43);
});

let p3 = new Promise(function(resolve, reject) {
    resolve(44);
});

let p4 = Promise.all([p1, p2, p3]);

p4.then(function(value) {
    console.log(Array.isArray(value))   // false
    console.log(value);                 // 43
});