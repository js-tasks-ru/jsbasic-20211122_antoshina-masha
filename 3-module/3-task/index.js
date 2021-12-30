function camelize(str) {
  let splittedStr = str.split('-');
  let firstWord = splittedStr.shift();
  let result = splittedStr.map(word =>{
    let arrayOfLetters=word.split('');
    let firstLetter=arrayOfLetters[0].toUpperCase();
    arrayOfLetters.shift();
    arrayOfLetters.unshift(firstLetter);
    let stringFromArrayOfLetters = arrayOfLetters.join('');
    return stringFromArrayOfLetters;
  })
  let stringResult = result.join('');
  return firstWord+stringResult;
//   str = str.split('-')
//  .map ()
//  .join()
b=a;
}

camelize("-webkit-transition");
