'use strict'
const tipEl = document.getElementById('tip');
const billEl = document.getElementById('bill');
const btnEl = document.getElementById('calculate');
const totalEl = document.getElementById('total');

function calcTotal(){
    const bill = billEl.value;
    const tip = tipEl.value;
    const total = bill * ( 1 + tip / 100);
    totalEl.textContent = `R$${total.toFixed(2)}`;
}

btnEl.addEventListener('click', calcTotal)