function toggleText() {
  let button = document.getElementsByClassName("toggle-text-button")[0];
  let textUnderButton = document.getElementById("text");
  let visible = false;

  button.addEventListener('click', myFunction)

  function myFunction() {
    visible = !visible;
    textUnderButton.hidden = visible;
  }
}
