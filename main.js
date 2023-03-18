var interest = document.getElementById('interest');

interest.addEventListener('click', function () {
	document.getElementsByTagName('h5')[1].innerText = "Simple Interest";
	document.getElementsByTagName('h5')[2].innerText = "Compound Interest";
	document.getElementsByTagName('span')[1].innerText = "00";
	document.getElementsByTagName('span')[2].innerText = "00";
    document.getElementById('dw').style.display = "none";
    document.getElementById('sc').style.display = "block";
});

var deposit = document.getElementById('DepositBtn');
		
deposit.addEventListener('click', function () {
    var depositAmount = document.getElementById('DepositInput').value;
    var depositFloatAmount = parseFloat(depositAmount);
        
    var prevDepositAmount = document.getElementById('depositShow').innerText;
    var depositFloatPrevAmount = parseFloat(prevDepositAmount);
    var sum = depositFloatPrevAmount + depositFloatAmount;
    document.getElementById('depositShow').innerText = sum;

    var prevBalanceAmount = document.getElementById('balanceShow').innerText;
    var BalanceFloatPrevAmount = parseFloat(prevBalanceAmount);
    var newBal = BalanceFloatPrevAmount + depositFloatAmount;
    document.getElementById('balanceShow').innerText = newBal;
			
	document.getElementById('DepositInput').value = "";
});


var withdraw = document.getElementById('WithdrawBtn');
		
withdraw.addEventListener('click',function(){
    var withdrawAmount = document.getElementById('WithdrawInput').value;
    var withdrawFloatAmount = parseFloat(withdrawAmount);
	var prevBalanceAmount = document.getElementById('balanceShow').innerText;
    var BalanceFloatPrevAmount = parseFloat(prevBalanceAmount);
			
	if(BalanceFloatPrevAmount < withdrawFloatAmount) {
		window.alert("Insufficient Balance!");
	} 
	else 
	{
		var prevWithdrawAmount = document.getElementById('withdrawShow').innerText;
		var WithdrawFloatPrevAmount = parseFloat(prevWithdrawAmount);
		var sum = WithdrawFloatPrevAmount + withdrawFloatAmount;
		document.getElementById('withdrawShow').innerText = sum;
        
		var newBal = BalanceFloatPrevAmount - withdrawFloatAmount;
		document.getElementById('balanceShow').innerText = newBal;
	}                   
});
		
		
var si = document.getElementById('siBtn');
		
si.addEventListener('click', function () {
    var Balance = document.getElementById('balanceShow').innerText;
    var BalanceFloat = parseFloat(Balance);
	var irAmount = document.getElementById('irInput').value;
    var irFloatAmount = parseFloat(irAmount);
	var year = document.getElementById('yInput').value;
       
    var total = (BalanceFloat * irFloatAmount * year)/100;
    document.getElementById('depositShow').innerText = total.toFixed(2);
});
		
var ci = document.getElementById('ciBtn');
		
    ci.addEventListener('click', function () {
    var Balance = document.getElementById('balanceShow').innerText;
    var BalanceFloat = parseFloat(Balance);
	var cir = document.getElementById('cirInput').value;
    var cirFloat = parseFloat(cir);
	var cyear = document.getElementById('cyInput').value;
        
    var citotal = Balance * (Math.pow((1 + (cirFloat/100)), cyear) - 1);
    document.getElementById('withdrawShow').innerText = citotal.toFixed(2);
});