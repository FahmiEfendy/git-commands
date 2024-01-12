const redButton = document.querySelectorAll(".header__theme-switch-btn")[0];

function toggleTheme1() {
  document.body.classList = "theme-1";
  redButton.classList.remove("button-position-2");
  redButton.classList.remove("button-position-3");
  redButton.classList.add("button-position-1");
}
function toggleTheme2() {
  document.body.classList = "theme-2";
  redButton.classList.remove("button-position-1");
  redButton.classList.remove("button-position-3");
  redButton.classList.add("button-position-2");
}

function toggleTheme3() {
  document.body.classList = "theme-3";
  redButton.classList.remove("button-position-1");
  redButton.classList.remove("button-position-2");
  redButton.classList.add("button-position-3");
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
