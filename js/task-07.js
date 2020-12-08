const TransactionType = {
   DEPOSIT: 'deposit',
   WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,
    transactions: [],

    createTransaction(amount, type) {
        return { id: this.transactions.length+1, amount: amount, type: type };
    },
    deposit(amount) {
        return this.transactions.push(this.createTransaction(amount, TransactionType.DEPOSIT));
    },
    withdraw(amount) {
         if ((this.getBalance() - amount) < 0) {
             return 'There are not enough funds in the account.';
        
        }
        return this.transactions.push(this.createTransaction(amount, TransactionType.WITHDRAW));
    },
    getBalance() {
        let balance=0;
        for (const transaction of this.transactions) {
            if (transaction.type === TransactionType.DEPOSIT) { balance += transaction.amount; }
            if (transaction.type === TransactionType.WITHDRAW) { balance -= transaction.amount; }
        }
        return balance;
    },
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) { return transaction; }
        }
        return 'No such transaction!';
      
        
    },
    getTransactionTotal(type) {
        let sum = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === type) { sum += transaction.amount; }
        }
        return sum;
    },
    
}

account.deposit(100);
account.deposit(150);
account.withdraw(10);
account.withdraw(70);
account.deposit(320);
account.withdraw(130);
console.table(account.transactions);

account.withdraw(30000);
console.log(account.withdraw(30000));

console.log(account.getBalance());

console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(202));

console.log(account.getTransactionTotal(TransactionType.DEPOSIT));
console.log(account.getTransactionTotal(TransactionType.WITHDRAW));







