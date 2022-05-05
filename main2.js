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
