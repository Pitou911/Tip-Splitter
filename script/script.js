const percentageBtn = document.querySelectorAll(".percentage-btn");
const calculateBtn = document.querySelector(".calculate-btn");
const resetBtn = document.querySelector(".reset-btn");
const totalAmount = document.querySelector(".total-amount");
const tipAmount = document.querySelector(".tip-amount");
const showError = document.querySelector(".error-show");

let bill = document.querySelector(".bill-amount");
let numOfPerson = document.querySelector(".person-num");
let tip, total;

function calculation(percentageOfTip) {
  tip = (bill.value * percentageOfTip) / (numOfPerson.value * 100);
  total = bill.value / numOfPerson.value + tip;
  tipAmount.textContent = `$ ${tip.toFixed(2)}`;
  totalAmount.textContent = `$ ${total.toFixed(2)}`;
}
for (let i = 0; i < percentageBtn.length; i++) {
  percentageBtn[i].addEventListener("click", function () {
    switch (percentageBtn[i].textContent) {
      case "5%":
        calculation(5);
        break;
      case "10%":
        calculation(10);
        break;
      case "15%":
        calculation(15);
        break;
      case "20%":
        calculation(20);
        break;
      case "25%":
        calculation(25);
        break;
      case "30%":
        calculation(30);
        break;
    }
  });
}

resetBtn.addEventListener("click", function () {
  totalAmount.textContent = "$ 0.00";
  tipAmount.textContent = "$ 0.00";
  numOfPerson.value = "";
  bill.value = "";
});
