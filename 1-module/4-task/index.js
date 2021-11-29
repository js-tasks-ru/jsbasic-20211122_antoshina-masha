function checkSpam(str) {
  let allUpperCase;
  allUpperCase = str.toUpperCase();
  if (allUpperCase.includes("1XBET") || allUpperCase.includes("XXX")) {
    return true;
  }
  return false;
}
