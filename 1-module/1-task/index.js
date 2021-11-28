function factorial(n) {
  if(n==0){
    return 1;
  }
  let result =n;
  let numberOfIterations = n-1;
  for(x=0; x<numberOfIterations; x++){
    result*=(n-1);
    n--;
  }
  return result;
}
