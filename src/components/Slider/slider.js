var slider = document.querySelector("#volumeRange");
var output = document.querySelector("#range");
output.innerHTML = slider.value;
slider.oninput = function printPrice() {
  output.innerHTML = this.value;
}