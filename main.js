function getNumberFromUser() {
  let number = id_put.value;
  switch (number) {
    case 3:
      console.log("hello");
    case 5:
      console.log("goodbay");
    case 7:
      console.log("tanks");
    default:
      console.log("no correct massage");
  }
}

function getNameFromUser() {
  let userName = id_put2.value;
  let myDiv = document.getElementById("my_div");
  switch (userName) {
    case "jacob":
      myDiv.innerText = userName;
    case "natan":
      myDiv.innerText = userName;
    case "DALYA":
      myDiv.innerText = userName;
    default:
      myDiv.innerText = "no correct massage";
  }
}


// 4.	צרו פונקציה המקבלת מהמשתמש טקסט, צבע וגודל, הפונקציה מדפיסה למסך את הטקסט בצבע שהמשתמש בחר בגודל שהמשתמש בחר.
function printTheScreenFromTheUser(){
  switch (select_id.value) {
    case "sm":
      my_h1.innerText = text_id.value;
      my_h1.style.color = color_id.value;
      my_h1.style.fontSize = 15 + "px";
      return;
    case "md":
      my_h1.innerText = text_id.value;
      my_h1.style.color = color_id.value;
      my_h1.style.fontSize = 30 + "px";
      return;
    case "lg":
      my_h1.innerText = text_id.value;
      my_h1.style.color = color_id.value;
      my_h1.style.fontSize = 60 + "px";
      return;
    case "xl":
      my_h1.innerText = text_id.value;
      my_h1.style.color = color_id.value;
      my_h1.style.fontSize = 90 + "px";
  }
}
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
        colorInput;
      break;
    case "bottom-left":
      circleElement.style =
        colorInput;
      break;
    case "bottom-right":
      circleElement.style =
''        colorInput;
      break;
    default:
      break;
  }
}
