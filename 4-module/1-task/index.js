

function makeFriendsList(friends) {
  let result = friends.map(friend => {
    return "<li>"+friend.firstName+" "+friend.lastName+"</li>"
  });

  let ulElement = document.createElement("ul");
  ulElement.innerHTML=result;

  return ulElement;

}


