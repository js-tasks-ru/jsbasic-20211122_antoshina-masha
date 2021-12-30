function showSalary(users, age) {
  let filteredByAge = users.filter((userTest) => {
    return userTest.age < age || userTest.age == age;
  });
  let count =0;
  let arrSize = filteredByAge.length;
  let result=""
  let namesAndSalaries = filteredByAge.forEach((userTest) => {
    count++;
    if (count == arrSize){
      result+= userTest.name+", "+ userTest.balance;
    }else{
      result+= userTest.name+", "+ userTest.balance+"\n";
    }
  });
  return result;
}


