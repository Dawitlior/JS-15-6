// function getNumberFromUser() {
//   let number = id_put.value;
//   switch (number) {
//     case 3:
//       console.log("hello");
//     case 5:
//       console.log("goodbay");
//     case 7:
//       console.log("tanks");
//     default:
//       console.log("no correct massage");
//   }
// }

// function getNameFromUser() {
//   let userName = id_put2.value;
//   let myDiv = document.getElementById("my_div");
//   switch (userName) {
//     case "jacob":
//       document.myDiv.innerText = userName;
//     case "natan":
//       document.myDiv.innerText = userName;
//     case "DALYA":
//       document.myDiv.innerText = userName;
//     default:
//       document.myDiv.innerText = "no correct massage";
//   }
// }

// מחשבון

function calculate() {
  switch (mathSign.value) {
    case "+":
      result.innerHTML = firstNumber.value + secondNumber.value;
      break;
    case "-":
      result.innerHTML = firstNumber.value - secondNumber.value;
      break;
    case "/":
      result.innerHTML = firstNumber.value / secondNumber.value;
      break;
    case "*":
      result.innerHTML = firstNumber.value * secondNumber.value;
      break;
    default:
      break;
  }
}


// תרגיל 5 
function positionElement() {
  switch (corner.value) {
    case "top-left":
      circleElement.style =
        "border-radius:50%;height:100px;width:100px;background:" + colorInput;
      break;
    case "top-right":
      circleElement.style =
        "float:right;border-radius:50%;height:100px;width:100px;background" +
        colorInput;
      break;
    case "bottom-left":
      break;
    case "bottom-right":
      break;
    default:
      break;
  }
}
