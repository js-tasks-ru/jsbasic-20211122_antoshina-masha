function hideSelf() {
  let hiddenButton = document.getElementsByClassName('hide-self-button')[0];
  hiddenButton.addEventListener('click', myFunction)

  function myFunction() {
    hiddenButton.hidden = true
  }
}
