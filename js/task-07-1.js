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
        return this.transactions.push(this.createTransaction(Number(amount), TransactionType.DEPOSIT));
    },
    withdraw(amount) {
        if ((this.getBalance() - amount) < 0) {
             return -1;
        }
        return this.transactions.push(this.createTransaction(Number(amount), TransactionType.WITHDRAW));;
    },
    getBalance() {
        let balance=0;
        for (const transaction of this.transactions) {
            if (transaction.type === TransactionType.DEPOSIT) { balance += Number(transaction.amount); }
            if (transaction.type === TransactionType.WITHDRAW) { balance -= Number(transaction.amount); }
        }
        return Number(balance);
    },
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === Number(id)) { return transaction; }
        }
        return -1;
    },
    getTransactionTotal(type) {
        let sum = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === type) { sum += Number(transaction.amount); }
        }
        return Number(sum);
    },
    getTransactionHTML() {
        let result = "<table border=1>";
        result += "<tr><td>id</td><td>amount</td><td>type</td></tr>";
        for (const transaction of this.transactions) {
            result += "<tr><td>"+transaction.id+"</td><td>"+transaction.amount+"</td><td>"+transaction.type+"</td></tr>";
        }
        result += "</table>"
        return result;
    },
    
}
export default account;
