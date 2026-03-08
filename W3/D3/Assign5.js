const wallet = {
  owner: "Alice",
  balance: 1000,
  lastTransaction: null,

  deposit: function(amount) {
    this.balance+=amount;
    this.lastTransaction = "Deposited"+amount; 
  },
  withdraw: function(amount) {
    this.balance-=amount;
    this.lastTransaction = "Withdraw"+amount; 
  }
};
wallet.deposit(500);
wallet.withdraw(200);

console.log(wallet);