function init() {
//add your javascrip between these two lines of code
  var entry = document.getElementById("entrybutton");
  function myScript() {
    var textBox = document.getElementById("entryinput");
    var output = document.getElementById("textoutput");
    alert("Ryan Jackson: " + textBox.value);
    output.innerHTML = textBox.value;
  }
  entry.addEventListener('click', myFunction);
}
window.addEventListener('load', init);
