let counter = document.getElementById("counter")
let previous = document.getElementById("previous")

let count = 0

function clicked() {
  count += 1
  counter.innerText = count
}

function save() {
  let preSave = " " + count + " " + " / "
  previous.innerText += preSave
}
function reset() {
  document.getElementById("counter").innerHTML = "0";
  let counter = "0";
  let clicked = "0";
}
