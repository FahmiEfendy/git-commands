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
