const Bank = require('../../src/bank');
const assert = require('assert');
const {Given, When, Then} = require('cucumber');

let bank;
let bankAccount;
let error;

Given(/^a bank account with a starting balance of \$(\d+)$/, function(amount) {
  bank = new Bank();
  bank.createAccount(12345678, 'Anthony', 'Sargeant', 'ajs@test.com', amount);
});

When(/^\$(-?\d+) is deposited$/, function(amount) {
  try {
    bank.makeDeposit(12345678, amount);
  } catch (e) {
    error = e;
  }
});

Then(/^the bank account balance should be \$(\d+)$/, function(expectedBalance) {
  const actualBalance = bank.getCurrentBalance(12345678);
  assert.strictEqual(actualBalance, expectedBalance, `Expected $${expectedBalance}, but got $${actualBalance}`);
});

Given(/^a customer with a bank account$/, function() {
  bank = new Bank();
  bank.createAccount(12345678, 'Anthony', 'Sargeant', 'ajs@test.com', 0);
});

When(/^we get the customer's details using account number (\d+)$/,
    function(accountNumber) {
      bankAccount = bank.getAccountByAccountNumber(accountNumber);
    });

Then(/^we will get the following details:$/, function(table) {
  const tableData = table.hashes();
  assert.strictEqual(bankAccount.firstName, tableData[0].firstName);
  assert.strictEqual(bankAccount.lastName, tableData[0].lastName);
  assert.strictEqual(bankAccount.accountNumber, parseInt(tableData[0].accountNumber));
  assert.strictEqual(bankAccount.emailAddress, tableData[0].emailAddress);
});

Then(/^the bank should throw an error with the following message:$/,
    function(table) {
      const tableData = table.hashes();
      assert(error !== undefined, 'The error is undefined. Was it thrown?');
      assert.strictEqual(error.message, tableData[0].message);
    });

When(/^we withdraw \$(-?\d+)$/, function(withdrawalAmount) {
  try {
    bank.withdraw(12345678, withdrawalAmount);
  } catch (e) {
    error = e;
  }
});
