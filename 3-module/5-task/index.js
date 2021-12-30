function getMinMax(str) {
  const splittedStr = str.split(" ")
  let onlyNumbers = splittedStr.filter(Number);
  let min = Math.min(...onlyNumbers);
  let max = Math.max(...onlyNumbers);
  let result = {
    "min": min,
    "max": max,
  }
  return result;
}

getMinMax("test 1 2")
