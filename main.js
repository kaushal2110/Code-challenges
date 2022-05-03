// function countPositiveSumNegative(input){
//
//     let arr = []
//     let sum = 0
//     let finalArr = []
//   input.forEach((item, i) => {
//     if (item > 0) {
//     arr.push(item)
//     } else {
//       sum = sum + item
//       return sum
//     }
//   });
//   console.log(finalArr = [arr.length, sum])
// }
// countPositiveSumNegative([1,2,4,6,4,3,-3,-7,-2])
//
//
//
// function reverseWords(str) {
//   arr = str.split(' ')
//   revArr = []
//   arr.forEach((word) => {
//     newWord = word.split('').reverse().join('')
//     revArr.push(newWord)
//   });
// console.log(revArr.join(' '));
// }
// reverseWords('the quick brown fox jumps over the lazy dog.')
//
//
// function highAndLow(numbers){
//   numbers = (numbers.split(' '))
//   newNum = numbers.map((num) => Number(num))
//
//   return(`${Math.max(...newNum)} ${Math.min(...newNum)}`)
// }
// highAndLow('8 4 -3 7 6 11')


//
// function smallestInt(arg){
//
//   smallest = Math.min(...arg)
//   console.log(smallest);
// }
// smallestInt([5,-7,3,0,-2])

// function comp(array1, array2){
//   array2.forEach((item) => {
//     if(array1.includes(Math.sqrt(array2))){
//     return true
//   } else if (array1 === 'Null' || array2 === 'Null'){
//     return false
//   }
// })
// }
// a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
// console.log(comp(a1,a2));

// function jadenCase(str) {
//   arr = str.split(' ')
//   jadenStr = ''
//   arr.forEach((word) => {
//   letter = word.split('')
//   jadenWord = letter[0].toUpperCase() + letter.splice(1).join('')
//   //console.log(jadenWord);
//   jadenStr = jadenStr + ' ' + jadenWord;
//   })
//   console.log(jadenStr)
// };
//
// jadenCase('bro please let me do it real quick now')
//
// function tribonacci(signature,n){
//   //your code here
//   arr = signature
//   //console.log(arr);
//   for (let i = 0; i < n-3; i++){
//     nextElem = signature[i] + signature[i+1] + signature[i+2]
//    arr.push(nextElem)
//   }
//   if (n == 0){
//     return []
//   } else if(n<3) {
//     signature.splice(n)
//   }
//   return arr
// }
// console.log(tribonacci([1,1,1], 20))

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
