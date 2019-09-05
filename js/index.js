// Back-end section

function BankAccount(first, last, deposit) {
	this.firstName = first;
	this.lastName = last;
  this.deposit = deposit;
}

BankAccount.prototype.fullNames = function() {
	return this.firstName + " " + this.lastName;
};

BankAccount.prototype.credit = function() {
	var credit = parseInt($("input#credit").val());
	return this.deposit + credit;
};

BankAccount.prototype.debit = function() {
	var debit = parseInt($("input#debit").val());
	return this.deposit - debit;
};


// Front-end section

// Account Creation

$(document).ready(function() {
	$("button.create-acc").click(function(event) {
		event.preventDefault();

		var fname = $("input#f-name").val();
		var lname = $("input#l-name").val();
		var deposit = parseInt($("input#deposit").val());

		var newCustomer = new BankAccount(fname, lname, deposit);

		$("span.acc-name").text(newCustomer.fullNames());
    $("span.acc-bal").text(deposit);
    
    $("button.bal-acc").click(function(event) {
      event.preventDefault();
      
      var balanceUp = parseInt($("input#credit").val());
      var balanceDown = parseInt($("input#debit").val());
      
      $("span.acc-bal").text(newCustomer.credit());

      $("span.acc-bal").text(newCustomer.debit());
      
    });
	});
});

// // Account Transactions

// $(document).ready(function() {
	
// });
