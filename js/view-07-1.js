import account from './task-07-1.js';


document.querySelector("button[data-product='deposit-button']").addEventListener('click', () => {
    let inputValue = document.getElementById("amount").value;
    account.deposit(inputValue);
    
    console.table(account.transactions);
    document.getElementById("transactions-table").innerHTML = account.getTransactionHTML();
});

document.querySelector("button[data-product='withdraw-button']").addEventListener('click', () => {
    let inputValue = document.getElementById("amount").value;
    if (account.withdraw(inputValue) === -1) { alert('There are not enough funds in the account.') }
    console.table(account.transactions);
    document.getElementById("transactions-table").innerHTML = account.getTransactionHTML();
});

document.querySelector("button[data-product='balance-button']").addEventListener('click', () => {
    let currentBalance = account.getBalance();
    document.getElementById("balance-field").innerText = Number(currentBalance); 
    console.log(account.getBalance());
    document.getElementById("transactions-table").innerHTML = account.getTransactionHTML();
});

document.querySelector("button[data-product='details-button']").addEventListener('click', () => {
    let inputValue = document.getElementById("details").value;
    let tr = account.getTransactionDetails(inputValue);
    if (tr === -1) {alert('No such transaction!');}
    else {
        document.getElementById("details-field").innerHTML = String(`<table border="1"><tr><td>id</td><td>amount</td><td>type</td></tr><tr><td>${tr.id}</td><td>${tr.amount}</td><td>${tr.type}</td></tr></table>`);
        console.log(tr);
        document.getElementById("transactions-table").innerHTML = account.getTransactionHTML();
    }
});
document.querySelector("button[data-product='total-button']").addEventListener('click', () => {
    let inputValue = document.getElementById("type").value;
    let total = account.getTransactionTotal(inputValue);
    document.getElementById("total-field").innerText = total;
    console.log(total);
    document.getElementById("transactions-table").innerHTML = account.getTransactionHTML();
});
