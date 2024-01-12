function switchToggler() {
  const input = document.getElementsByTagName("input");

  for (const i in input) {
    if (input[i].type === "radio") {
      if (input[i].checked) {
        document.body.classList = `theme-${[Number(input[i].value)]}`;
      }
    }
  }
}

// TODO: Remove 0 When Other Number Inputted ex: 0123
// TODO: Add "," Every Third Number

function disNumber(num) {
  document.getElementById("number").value += num;
}

function clrNumber() {
  document.getElementById("number").value = "";
}

function clcNumber() {
  num = document.getElementById("number").value;
  document.getElementById("number").value = math.evaluate(
    document.getElementById("number").value
  );
}

function delNum() {
  document.getElementById("number").value =
    (document.getElementById("number").value / 10) ^ 0;
}
