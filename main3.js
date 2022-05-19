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
