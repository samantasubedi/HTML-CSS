const a = document.getElementById("below");
const b = document.getElementById("above");
document.getElementById("button").addEventListener("click", function () {
  if (a.checked) {
    document.getElementById("output").textContent = "you are below 18 ";
    console.log("you are below 18");
  } else if (b.checked) {
    document.getElementById("output").textContent = "you are above 18";
    console.log("you are above 18");
  } else {
    document.getElementById("output").textContent =
      "select one of the above options";
    console.log("select one of the options");
  }
});
