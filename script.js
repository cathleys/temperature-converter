const cel = document.querySelector("[data-celinput]");
const far = document.querySelector("[data-farinput]");

function celtoFar() {
  const result = (parseFloat(cel.value) * 9) / 5 + 32;
  far.value = parseFloat(result.toFixed(2));
}

function fartoCel() {
  const result = ((parseFloat(far.value) - 32) * 5) / 9;
  cel.value = parseFloat(result.toFixed(2));
}
