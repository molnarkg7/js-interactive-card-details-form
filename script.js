let backNumber = document.querySelector(".back-number");
let frontNumber = document.querySelector(".front-number");
let cardName = document.querySelector(".name");
let monthCard = document.querySelector(".mm");
let yearCard = document.querySelector(".yy");

let cardHolderName = document.querySelector(".card-holder-name-input");
let cardHolderNumber = document.querySelector(".card-number-input");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let cvc = document.querySelector(".cvc-input");

let form = document.querySelector(".form");
let inputs = document.querySelectorAll("input");

let numberError = document.querySelector(".num-error");
let dateError = document.querySelector(".month-year-error");
let cvcError = document.querySelector(".cvc-error");

let button = document.querySelector(".button");
let continueBtn = document.querySelector(".continue");

let formCompleted = document.querySelector(".icon");

let cardNameFunction = function () {
  if (inputs[0].value.match(/^[A-Za-z ]+$/)) {
    cardName.innerHTML = cardHolderName.value;
    inputs[0].style.borderColor = "hsl(270, 3%, 87%)";
    return true;
  } else cardName.innerHTML;
  inputs[0].style.borderColor = "hsl(0, 100%, 66%)";
  return false;
};

let cardNumberFunction = function () {
  if (inputs[1].value.match(/^\d+/)) {
    frontNumber.innerHTML = cardHolderNumber.value.match(/.{1,4}/g).join(" ");
    inputs[1].style.borderColor = "hsl(270, 3%, 87%)";
    numberError.style.display = "none";
    return true;
  } else frontNumber.innerHTML;
  inputs[1].style.borderColor = "hsl(0, 100%, 66%)";
  numberError.style.display = "flex";
  return false;
};

let monthFunction = function () {
  if (inputs[2].value.match(/^\d+/) && month.value.length === 2) {
    monthCard.innerHTML = month.value;
    inputs[2].style.borderColor = "hsl(270, 3%, 87%)";
    dateError.style.display = "none";
    return true;
  } else monthCard.innerHTML;
  inputs[2].style.borderColor = "hsl(0, 100%, 66%)";
  dateError.style.display = "flex";
  return false;
};

let yearFunction = function () {
  if (inputs[3].value.match(/^\d+/) && year.value.length === 2) {
    yearCard.innerHTML = year.value;
    inputs[3].style.borderColor = "hsl(270, 3%, 87%)";
    dateError.style.display = "none";
    return true;
  } else yearCard.innerHTML;
  inputs[3].style.borderColor = "hsl(0, 100%, 66%)";
  dateError.style.display = "flex";
  return false;
};

let cvcFunction = function () {
  if (inputs[4].value.match(/^\d+/) && cvc.value.length === 3) {
    backNumber.innerHTML = cvc.value;
    inputs[4].style.borderColor = "hsl(270, 3%, 87%)";
    cvcError.style.display = "none";
    return true;
  } else backNumber.innerHTML;
  inputs[4].style.borderColor = "hsl(0, 100%, 66%)";
  cvcError.style.display = "flex";
  return false;
};

button.addEventListener("click", function () {
  cardNameFunction();
  cardNumberFunction();
  monthFunction();
  yearFunction();
  cvcFunction();
});

continueBtn.addEventListener("click", function () {
  cardHolderName.value = "";
  cardHolderNumber.value = "";
  month.value = "";
  year.value = "";
  cvc.value = "";
  cardName.innerHTML = "Jane Appleseed";
  frontNumber.innerHTML = "0000 0000 0000 0000";
  monthCard.innerHTML = "00";
  yearCard.innerHTML = "00";
  backNumber.innerHTML = "000";
});
