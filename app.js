console.log("Hello World!\n==========\n");

// const numbers = [2, 22, 12, 17, 18, 39, 129];
// const numbers = [true, "A,B", "ABC", false, "CCC"];
// let addedNumber = 0


// function arraySum(){
//     numbers.forEach(function( val, i ){
//         addedNumber = addedNumber + val;
//         }
//     )
//     return addedNumber;
// }

// console.log(arraySum(numbers))

// let book = {
//     title: '4 hours working',
//     author: 'Michael Jackson',
//     numOfPage: 365,
//     have_read: 'yes',
//     readCount : 0,
//     info : function(){
//         return (`Book title is ${this.title} with total page of ${this.numOfPage} and I have read ${this.readCount} times`)
//     }
// }

// console.log(book.toString())

// book.title = 'change world'
// book.readCount = 3
// console.log(book.title);
// console.log(book.readCount);
// console.log(book.info());



// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

// // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");


// let withReduce = numbers.reduce( (sum, value)=>{
//     console.log(`sum is ${sum}`)
//     console.log(`value is ${value}`)
//     return sum + value;
// });

// console.log(withReduce);


// let numbers = [1, 2, 3, 4, 5]


// let numbersForEach = numbers.forEach((val)=>{
//     return val * 2
// })

// console.log(numbers.forEach( (val)=>{ return val * 2} ));



// let numbersMap = numbers.map((val)=>{
//     return val * 2
// })

// console.log("map", numbersMap)


const contacts = [
    {
    name: "Matt",
    phone: '123-456-7890',
    email: 'example@gmail.com'
    },
    {
    name: "Marco",
    phone: '098-765-4321',
    email: 'marco@gmail.com'
    },
    {
    name: "DoubleK",
    phone: '111-111-1111',
    email: 'doubleK@gmail.com'
    }
];

// let csv = contacts.map( (value, index, arr)=>{
//     //Make a string out of the name, phone, and email
//     let result = `${value.email}, ${value.phone}, ${value.email}`;
//         if( index == 0 ){
//             result = Object.keys(value) + " \n" + result;
//         }
//     return result
// } );

// console.log(csv.join("\n"))


// let csvConv = contacts.map(csvConverter).join("\n")

// function csvConverter(value, index){
//     let values = `${value.name},${value.phone},${value.email}\n `    
    
//         if(index == 0){
//             values = Object.keys(value) + "\n" + values
//         }
//     return values
// }


// console.log(csvConv);


// 잘 이해 안간다 이거 //
const GreaterThan = (num) =>{
    return (testNumber) => num < testNumber;
}

const GreaterThan100 = GreaterThan(100);
// const GreaterThan100 = (testNumber) => 100 < testNumber;

console.log(GreaterThan100(50));



for (let { name, email } of contacts) {
	console.log(name, email);
}

let [first, second] = contacts;
let [firstPer, ,thirdPer] = contacts;

console.log(first, second);
console.log(firstPer, thirdPer);
