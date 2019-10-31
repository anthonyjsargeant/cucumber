module.exports = class BankAccount {
  constructor (accountNumber, firstName, lastName, emailAddress) {
    this._accountNumber = accountNumber
    this._firstName = firstName
    this._lastName = lastName
    this._emailAddress = emailAddress
    this._balance = 0
  }

  get accountNumber () {
    return this._accountNumber
  }

  set accountNumber (accountNumber) {
    this._accountNumber = accountNumber
  }

  get firstName () {
    return this._firstName
  }

  set firstName (firstName) {
    this._firstName = firstName
  }

  get lastName () {
    return this._lastName
  }

  set lastName (lastName) {
    this._lastName = lastName
  }

  get emailAddress () {
    return this._emailAddress
  }

  set emailAddress (emailAddress) {
    this._emailAddress = emailAddress
  }

  get currentBalance () {
    return this._balance
  }

  deposit (amount) {
    this._balance += amount
  }

  withdraw (amount) {
    this._balance -= amount
  }
}
