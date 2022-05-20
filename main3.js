// find anagrams from array
function anagrams(word, words) {
  let newWord = word.split('').sort().join('')
  let arr = []
  for(i = 0; i < words.length; i++){
    arr.push(words[i].split('').sort().join(''))
  }
  let idxArr = []
  for (i = 0; i < arr.length; i++){
    if(arr[i] == newWord){
      idxArr.push(i)
    }
  }
  let finalArr = []
  for(i = 0; i < idxArr.length; i++){
  let ind = idxArr[i]
  finalArr.push(words[ind])
  }
  return finalArr
}

// reverse words in string where word.length >= 5
function spinWords(string){
  string = string.split(' ')
  let arr = string.map(word => {
    if(word.length >= 5){
      return word.split('').reverse().join('')
    } else {
      return word
    }
  })
  return arr.join(' ')
}
