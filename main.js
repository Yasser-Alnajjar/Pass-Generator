let generate_aria = document.getElementById("generate-aria");
let upperBtn = document.getElementById("upper");
let lowerBtn = document.getElementById("lower");
let numberBtn = document.getElementById("number");
let symbolsBtn = document.getElementById("symbols");
let btn_generate = document.getElementById("btn_generate");
let btn_copy = document.getElementById("btn_copy");

function getChar(type, words) {
  if (document.querySelector("input[name=" + type + "]").checked) {
    return words;
  }
}
generate_aria.value == ""
  ? (generate_aria.value = "Generate password")
  : generate_aria.value;
console.log(document.querySelector("input[name=up]"));
btn_generate.addEventListener("click", (e) => {
  if (
    !document.querySelector("input[name=up]").checked &&
    !document.querySelector("input[name=low]").checked &&
    !document.querySelector("input[name=num]").checked &&
    !document.querySelector("input[name=symb]").checked
  ) {
    alert("Please choose the type of data you want");
    return;
  }

  let password = "";
  let upperCaseWord = "ABCDEFGHIGKLMNOBQRSTUVWXYZ";
  let lowerCaseWord = "abcdefghigklmnobqrstuvwxyz";
  let numbers = "0123456789";
  let symbolsWord = "!@#$%^&*()_";
  let range = document.querySelector("input[name=range]").value;

  password += getChar("up", upperCaseWord);
  password += getChar("low", lowerCaseWord);
  password += getChar("num", numbers);
  password += getChar("symb", symbolsWord);
  console.log(password);
  let result = "";
  if (range <= 5) {
    alert("The password must be more than four");
  } else {
    for (let i = 0; i < range; i++) {
      let num = Math.floor(Math.random() * password.length);
      result += password[num];
    }
  }
  generate_aria.value = result;
});

// Copy Passwoed
btn_copy.addEventListener("click", function (e) {
  if (!generate_aria == "") {
    generate_aria.select();
    navigator.clipboard.writeText(generate_aria.value);
  }
});
// Validate Range
range.addEventListener("input", () => {
  let label = document.querySelector("label[for=range]");
  range.value <= 5
    ? label.classList.add("error")
    : label.classList.remove("error");
  label.innerHTML = range.value < 10 ? `0` + range.value : range.value;
});
