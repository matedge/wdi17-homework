// note to self: LEAVE GLOBAL VARIABLES AT THE TOP.
var globAcc1 = {
  balance: 1250,
  name: 'Ben Sorry',
  accountNumber: 101
};
var globAcc2 = {
  balane: 15000,
  name: 'Kylie Bag',
  accountNumber: 102
};


//Somewhere to store the accounts ~ working
var accountArray = [
  { balance: 1000000,
    name: 'Pension Fund',
    accountNumber: 1},
  { balance: 50,
    name: 'John Doe',
    accountNumber: 2},
  { balance: 200,
    name: 'Jane Smith',
    accountNumber: 3}
];



var bankAccount = function(money, fullName) {
  this.balance = money;
  this.name = fullName;
  this.accountNumber = accountArray.length + 1
  accountArray.push({balance : money, name : fullName, accountNumber: accountNumber});
};

bankAccount.prototype.withdraw = function(accNum, amount) {
  this.balance - amount
};

//deposit


var deposit = function (amount) {

}
//withdraw

//add account method update


//Person.prototype.sayHello = function() {
//  console.log("Hello, I'm " + this.name);
//};

//var person1 = new Person('Alice');
//var person2 = new Person('Bob');
//var helloFunction = person1.sayHello;

//person1.sayHello();

//person2.sayHello();

/*helloFunction();

console.log(helloFunction === person1.sayHello);

console.log(helloFunction === Person.prototype.sayHello);

helloFunction.call(person1);
*/
//---



// addAccount - method ~ Working
//var addAccount = function(custName, firstDeposit) {
//  accountArray.push({'name': custName, 'balance': firstDeposit});

//  return lastIndexOf(accountArray);
//  };

//var bank = function()
