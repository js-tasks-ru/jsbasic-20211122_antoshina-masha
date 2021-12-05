function isEmpty(obj) {
  for (const k in obj){
    if(obj[k] == undefined || obj[k]){
      return false;
    }
  }
  return true;
}
