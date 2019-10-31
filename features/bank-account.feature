Feature: Bank Account

  Scenario: The one where we deposit money
    Given a bank account with a starting balance of $100
    When $50 is deposited
    Then the bank account balance should be $150

  Scenario: The one where we get a customer's details
    Given a customer with a bank account
    When we get the customer's details using account number 12345678
    Then we will get the following details:
      | firstName | lastName | accountNumber | emailAddress |
      | Anthony   | Sargeant | 12345678      | ajs@test.com |

  Scenario: The one where we try to deposit a zero amount
    Given a bank account with a starting balance of $50
    When $0 is deposited
    Then the bank should throw an error with the following message:
      | message                          |
      | You cannot deposit a zero amount |

  Scenario: The one where we try to deposit a negative amount
    Given a bank account with a starting balance of $100
    When $-10 is deposited
    Then the bank should throw an error with the following message:
      | message                               |
      | You cannot deposit a negative amount  |

  Scenario: The one where we withdraw an amount of money
    Given a bank account with a starting balance of $25
    When we withdraw $10
    Then the bank account balance should be $15

  Scenario: The one where we try to withdraw a negative amount
    Given a bank account with a starting balance of $100
    When we withdraw $-10
    Then the bank should throw an error with the following message:
      | message                               |
      | You cannot withdraw a negative amount |