function highlight(table) {
  let rows = table.getElementsByTagName("tbody")[0].rows;
  let count = 0;
  for (let i of rows) {
    if (!(i.getElementsByTagName("td")[3].getAttribute("data-available"))) {
      i.setAttribute("hidden", "hidden");
    }
    if (i.getElementsByTagName("td")[3].getAttribute("data-available") == "true") {
      i.classList.add("available");
    } else if (i.getElementsByTagName("td")[3].getAttribute("data-available") == "false") {
      i.classList.add("unavailable");
    }
    if (i.getElementsByTagName("td")[2].innerText == "m") {
      i.classList.add("male");
    } else {
      i.classList.add("female");
    }
    if (i.getElementsByTagName("td")[1].innerText < 18) {
      i.style.textDecoration = "line-through";
    }
  }
}
