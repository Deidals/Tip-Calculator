const billInput = document.querySelector(`#bill`);
const tipButtons = document.querySelectorAll(`.tip`);

let billValue = 0;
let activeValue = 0;
let totalPeopleInput = 1;




/* 
function main(){
  bill();
  tipValue();
  customTip();
  peopleNumber();

}; */

function bill(){
  billInput.addEventListener(`input`, () => {
    billValue = parseFloat(billInput.value) || 0;

    /* document.querySelector(`#tipAmount`).innerHTML = `$${billValue}`; */
    /* callbackBill(billValue); */
    updateTotalAmount();

  });
};

function tipValue(callbackTipValue){
  tipButtons.forEach((tipButton) => {
    tipButton.addEventListener(`click`, () => {
      tipButtons.forEach((btn) => (btn.classList.remove(`active`)));
      tipButton.classList.add(`active`);

      activeValue = parseFloat(tipButton.getAttribute(`percent`));
      /* callbackTipValue(activeValue); */

      updateTotalAmount();
    })
  });
};

function customTip(){
  const customTipInput = document.querySelector(`#customTip`);
  customTipInput.addEventListener(`click`, () => {
    tipButtons.forEach((tipButton) => (tipButton.classList.remove(`active`)));
  })
  customTipInput.addEventListener(`input`, () => {
    activeValue = parseFloat(customTipInput.value) * 0.01;

    updateTotalAmount();
  })
};

function peopleNumber(callbackPeopleNumber){
  const totalPeople = document.querySelector(`#people`);
  totalPeople.addEventListener(`input`, () =>{
  totalPeopleInput = parseInt(totalPeople.value) || 1;
  /* document.querySelector(`#totalAmount`).innerHTML = `$${totalPeopleInput}`; */

  /* callbackPeopleNumber(totalPeopleInput);  */ 
  updateTotalAmount();
  });
};

function updateTotalAmount(){
  let tipAmoutPerPerson = (billValue/totalPeopleInput) * activeValue;
  document.querySelector(`#tipAmount`).innerHTML = `$${tipAmoutPerPerson.toFixed(2)}`;

  let amountPerPerson = (billValue / totalPeopleInput) + tipAmoutPerPerson;
  document.querySelector(`#totalAmount`).innerHTML = `$${amountPerPerson.toFixed(2)}`; 
}

document.querySelector(`#reset`).addEventListener(`click`, () => {
  billValue = 0;
  totalPeopleInput = 1;
  document.querySelector(`#tipAmount`).innerHTML = `$0.00`;
  document.querySelector(`#totalAmount`).innerHTML = `$0.00`;
  tipButtons.forEach((tipButton) => (tipButton.classList.remove(`active`)));
})

bill();
peopleNumber();
tipValue();
customTip();