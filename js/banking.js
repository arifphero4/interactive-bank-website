// handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //get deposite amount
    const depositInput = document.getElementById("deposit-input");

    const newDepositAmoutText = depositInput.value;
    const newDepositAmout = parseFloat(newDepositAmoutText);

    // update deposit total
    const depositTotal = document.getElementById("deposit-total");

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmout;

    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmout;

    balanceTotal.innerText = newBalanceTotal;

    //clear input field
    depositInput.value = "";
  });
