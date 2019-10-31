const BankAccount = require('./bankAccount');

module.exports = class Bank {
  constructor() {
    this._bankAccounts = [];
  }

  get bankAccounts() {
    return this._bankAccounts;
  }

  set bankAccounts(value) {
    this._bankAccounts = value;
  }

  getAccountByAccountNumber(accountNumber) {
    const bankAccount = this.bankAccounts.find(
        account => account.accountNumber === accountNumber);

    if (bankAccount === undefined) {
      throw new Error(`Account with Account Number ${accountNumber} not found`);
    } else {
      return bankAccount;
    }
  };

  createAccount(
      accountNumber, firstName, lastName, emailAddress, initialDeposit) {
    const bankAccount = new BankAccount(accountNumber, firstName, lastName,
        emailAddress);
    bankAccount.deposit(initialDeposit);
    this.bankAccounts.push(bankAccount);
  };

  makeDeposit(accountNumber, depositAmount) {
    if (depositAmount === 0) {
      throw new Error('You cannot deposit a zero amount');
    } else if (depositAmount < 0) {
      throw new Error('You cannot deposit a negative amount');
    }
    const bankAccount = this.getAccountByAccountNumber(accountNumber);
    bankAccount.deposit(depositAmount);
  };

  getCurrentBalance(accountNumber) {
    const bankAccount = this.getAccountByAccountNumber(accountNumber);
    return bankAccount.currentBalance;
  };

  withdraw(accountNumber, withdrawalAmount) {
    if (withdrawalAmount < 0) {
      throw new Error('You cannot withdraw a negative amount');
    }
    const bankAccount = this.getAccountByAccountNumber(accountNumber);
    bankAccount.withdraw(withdrawalAmount);
  }
};
