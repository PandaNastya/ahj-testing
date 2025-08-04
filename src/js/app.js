// TODO: write code here
import { validateCard } from "./validate";
import { typeCard } from "./typecard";

const validateButton = document.getElementById("validateButton");
const inputCard = document.getElementById("inputCard");
const result = document.getElementById("result");

validateButton.addEventListener("click", (e)=> {
  e.preventDefault();
  const cardNumber = inputCard.value;

  if (validateCard(cardNumber)) {
    result.textContent = `Card valid: ${typeCard(cardNumber)}`;
  } else {
    result.textContent = "Card invalid";
  }
})