const input_amt= document.getElementById("input");
const btn = document.getElementById('btn');
const amt = document.getElementById('amount');
const result = document.getElementById('tax');


amt.style.display = "none"
result.style.display = "none"


btn.addEventListener("click", () => {
    amount = input_amt.value
    console.log('amount',input_amt.value);
    let tax = 0;
    if (amount <= 250000) {
        tax = 0;
      } else if (amount <= 500000) {
        tax = (amount - 250000) * 0.05;
      } else if (amount <= 750000) {
        tax = 12500 + (amount - 500000) * 0.1;
      } else if (amount <= 1000000) {
        tax = 37500 + (amount - 750000) * 0.15;
      } else if (amount <= 1250000) {
        tax = 75000 + (amount - 1000000) * 0.2;
      } else if (amount <= 1500000) {
        tax = 125000 + (amount - 1250000) * 0.25;
      } else {
        tax = 187500 + (amount - 1500000) * 0.3;
      }
      amt.style.display = "block";
      result.style.display = "block";
      amt.innerText = amount;
      result.innerText = tax
      console.log(`For an income of Rs. ${amount}, the income tax payable is Rs. ${tax}`);
      return tax;
  });

  