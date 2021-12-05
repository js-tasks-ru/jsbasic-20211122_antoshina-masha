function sumSalary(salaries) {
  let result = 0;
  for (const k in salaries){
    if (typeof salaries[k] === 'number'
    && salaries[k] != Number.POSITIVE_INFINITY
    && salaries[k] != Number.NEGATIVE_INFINITY
    &&  !isNaN(salaries[k])){
      result = result + salaries[k];
    }
  }
  return result;
}
