var ac = document.getElementById("ac");
var bs = document.getElementById("bs");

var division = document.getElementById("division");
var multiplication = document.getElementById("multiplication");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var equal_to = document.getElementById("equal-to");

var zero = document.getElementById("zero");
var dot = document.getElementById("dot");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

var string = document.getElementById("string");
var answer = document.getElementById("answer");

var buttons = document.getElementsByClassName("buttons");

function add_to_string() {
  string.innerHTML += this.innerHTML;
}

ac.addEventListener("click", function () {
  string.innerHTML = "";
  answer.innerHTML = "";
});
bs.addEventListener("click", function () {
  string.innerHTML = string.innerHTML.slice(0, string.innerHTML.length - 1);
});

plus.addEventListener("click", add_to_string);
minus.addEventListener("click", add_to_string);
multiplication.addEventListener("click", add_to_string);
division.addEventListener("click", add_to_string);
equal_to.addEventListener("click", function () {
  answer.innerHTML = eval(string.innerHTML);
  string.innerHTML = answer.innerHTML;
});

zero.addEventListener("click", add_to_string);
dot.addEventListener("click", add_to_string);
one.addEventListener("click", add_to_string);
two.addEventListener("click", add_to_string);
three.addEventListener("click", add_to_string);
four.addEventListener("click", add_to_string);
five.addEventListener("click", add_to_string);
six.addEventListener("click", add_to_string);
seven.addEventListener("click", add_to_string);
eight.addEventListener("click", add_to_string);
nine.addEventListener("click", add_to_string);

// for dark mode toggle button
var outer = document.getElementById("outer-box");
var inner = document.getElementById("inner-box");

function toggle() {
  var current = document.getElementById("calculator");
  if (inner.style.left == "0.5px") {
    document.getElementById("calculator").style.background =
      "linear-gradient(135deg,rgba(79, 234, 255, 0.814),black 50%)";
    inner.style.backgroundColor = "white";
    outer.style.borderColor = "white";
    string.style.color = "white";
    answer.style.color = "white";
    inner.style.left = "11px";
  } else {
    document.getElementById("calculator").style.background =
      "linear-gradient(135deg,rgb(250, 252, 252),rgba(79, 234, 255, 0.814))";
    inner.style.backgroundColor = "black";
    outer.style.borderColor = "black";
    answer.style.color = "black";
    string.style.color = "black";
    inner.style.left = "0.5px";
  }
}

outer.addEventListener("click", toggle);
