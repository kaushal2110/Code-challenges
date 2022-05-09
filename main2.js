//count number of characters in a string

function palindrome(s){
  const obj = {}
  for (i = 0; i< s.length; i++){
    const char = s[i]
    if (!obj[char]) {
      obj[char] = 0
    }
    obj[char]++
    }
  return obj
}
console.log(palindrome('racecar'));

function autocomplete(input, dictionary){
  let arr = []
  let newInp = input.replace(/[^a-z]/g,'')
  console.log(newInp)
  if (newInp !== ''){
  dictionary.forEach (word => {
    newWord = word.replace(/[\W\d]/g,'')
    if (newWord.toLowerCase().startsWith(newInp)){
      arr.push(newWord)
    }
  })
  if (arr.length > 5){
    return arr.slice(0,5)
  }
 }
  return arr
}
console.log(autocomplete('ab*&1cd',['air','ae$#ro','ass']))

// return a diamond shaped string
function diamond(n){
  if (n % 2 == 0 || n < 1){
    return null
  }
  let str = ''
  for(i = 0; i < n; i++){
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
    }
  return str
}

//break string input of camelCase into sentence with space between words

// My solution ==>
function breakCamelCase(string){
    let str = string.split('')
    let indexArr = []
    for(i = 0; i < str.length; i++){
      if (str[i] === str[i].toUpperCase()){
        indexArr.push(i)
      }
    }
    let finalStr = string.substring(0, indexArr[0]) + ' '
    for (j = 0; j < indexArr.length; j++){
      if(j == indexArr.length - 1){
        finalStr += string.substring(indexArr[j])
        break
      }
      finalStr += string.substring(indexArr[j], indexArr[j+1]) + ' '
    }
    return finalStr.trim()
  }

//other simpler solution ==>
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

// max sum of contiguous subarray
var maxSequence = function(arr){
  let sum = 0
  if (arr == [] || sum < 0){
    return 0
  }
  let current, actual = 0
  for(i = 0; i < arr.length; i++){
    sum += arr[i]

    if(sum < 0){
      sum = 0
    }
    current = sum
    if(current > actual){
      actual = current
    }
  }
  return actual
}


// find consecutive fib numbers whose product == prod
function productFib(prod){

  let arr = [0, 1]
  let sum
  let result = 0
  while(result < prod){
    sum = arr[arr.length-1]+arr[arr.length-2]
    arr.push(sum)
    result = arr[arr.length-1] * arr[arr.length-2]
  }
  if(result == prod){
    return[arr[arr.length-2], arr[arr.length-1], true]
  }
  return[arr[arr.length-2], arr[arr.length-1],false]
}


// reverse or rotate. reverse if sum of the cube of digits in chunk of size(sz) % 2. rotate the first digit if not
function revrot(str, sz) {
    // your code
  if(sz > 0 && str !== '' && sz < str.length){
  let arr = []
  let finalStr = ''
  let i = 0
  while(i < str.length){
    arr.push(str.slice(i, i+sz))
    i += sz
    }
   arr = arr.filter(str => str.length == sz)
    for(num of arr){
      newNum = num.split('').map(x => Number(x))
      cubeSum = newNum.map(x => Math.pow(x, 3)).reduce((acc,c) => acc + c, 0)
      if(cubeSum % 2 == 0){
        newStr = newNum.reverse().join('')
        finalStr += newStr
      } else {
      newStr = newNum.slice(1).join('') + newNum.slice(0,1)
      finalStr += newStr
        }
    }
    return finalStr
  }
  return ''
}
