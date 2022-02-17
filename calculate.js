document.getElementById('calculate').addEventListener('click',function(){
    // Food Expenses
    const foodInput = document.getElementById('food');
    const foodPriceText = foodInput.value;
    const foodPrice = parseInt(foodPriceText);
    
    // Rent Expenses
    const rentInput = document.getElementById('rent');
    const rentPriceText = rentInput.value;
    const rentPrice = parseInt(rentPriceText);

    // Cloths Expenses
    const clothesInput = document.getElementById('clothes');
    const clothesPriceText = clothesInput.value;
    const clothesPrice = parseInt(clothesPriceText);

    const totalExpenses = document.getElementById('totalExpenses');
    const totalExpensesText = totalExpenses.innerText;
    const previousTotal = parseInt(totalExpensesText);
    const newTotalExpenses = previousTotal + foodPrice + rentPrice + clothesPrice;
    totalExpenses.innerText = newTotalExpenses;

    const Income = document.getElementById('income');
    const incomeInput = Income.value;
    const income = parseInt(incomeInput);

    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const previousBalance = parseInt(balanceText);
    const newBalance = income - newTotalExpenses;
    balance.innerText =  newBalance;
})

