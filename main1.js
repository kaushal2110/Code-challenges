function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
console.log(deleteNth([20,37,20,21], 1))


function findShort(s) {
  let word = s.split(' ')
  let arr = []
  word.forEach((item, i) => {
    letters = item.split('')
    length = letters.length
    arr.push(length)
    //console.log(arr);
  });
  function asc(a,b){
    return a-b
  }
  arr.sort(asc)
  console.log(arr[0]);

}
findShort("Factom Steem Dogecoin ProofOfStake Waves Dash Bitcoin ProofOfStake Ethereum Ethereum BTC")

function filter_list(l) {
  // Return a new array with the strings filtered out
  let arr =[]
  l.forEach((el) => {
  if(typeof el === 'number'){
    arr.push(el)
  }
})
return arr
}
console.log(filter_list([1,2,'a','b']))

let str = 'abcmz'
arr= str.split('').sort()
newArr = []
arr.forEach((letter) => {
  if (letter > 'm') {
    newArr.push(letter);
  }
});
console.log(`${newArr.length}/${arr.length}`);

function towerBuilder(nFloors) {
  let arr = []
  let star = '*'
  let blank = ' '
  for (var i = 0; i < nFloors; i++) {

    arr.push(' '.repeat (nFloors - i - 1) + '*'.repeat((i*2)+1) + ' '.repeat(nFloors - i - 1))
  }
  console.log(arr);
}
towerBuilder(3)


function highScore(x) {

let score = s => s.split('').reduce((acc,c) => acc + c.charCodeAt(0)-96,0)
return x.split(' ').reduce((w,x) => score(w) < score(x) ? x:w)
}
console.log(highScore('take two bintang and a dance please'))
function SeriesSum(n)
{
  let numerator = 1
  let denominator = 4
  let sum = 1
  if (n === 1){
    return '1.00'
  } else {
  for (let i = 1; i < n; i++){
    sum = sum + (numerator/denominator)
    denominator += 3
    }
  }
  str = sum.toFixed(2).toString()
  console.log(str);
}
SeriesSum(4)

function XO(str) {
  str = str.toLowerCase()
  arr = str.split('')
  console.log(arr);
  let x = []
  let o = []
  arr.forEach((item) => {
    if(item === 'x'){
      x.push(item)
    } else if (item === 'o'){
      o.push(item)
    }
  })
  if (x.length === o.length){
    return true
  } else {
    return false
  }
}
console.log(XO('xxOo'))

function removeVowel(str){
  console.log(str.replace(/[aeiou]/gi, ''))
}
removeVowel('I hate myself for not having a clue about this problem when i solved it the first time lol')
