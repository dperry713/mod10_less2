// Simple Banking System Simulation

// Initialize the account balance
let accountBalance = 1000; // Starting balance of $1000

// Task 1: Function to handle deposits
function deposit(amount) {
    if (amount > 0) {
        accountBalance += amount;
        console.log(`Deposit of $${amount} successful. New balance: $${accountBalance}`);
    } else {
        console.log("Invalid deposit amount. Please enter a positive number.");
    }
}

// Task 2: Function to handle withdrawals
function withdraw(amount) {
    if (amount > 0) {
        if (amount <= accountBalance) {
            accountBalance -= amount;
            console.log(`Withdrawal of $${amount} successful. New balance: $${accountBalance}`);
        } else {
            console.log("Insufficient funds. Withdrawal cancelled.");
        }
    } else {
        console.log("Invalid withdrawal amount. Please enter a positive number.");
    }
}

// Task 3: Function to check the current balance
function checkBalance() {
    console.log(`Your current balance is: $${accountBalance}`);
}

// Test the banking system
console.log("Welcome to the Simple Banking System!");
checkBalance();
deposit(500);
withdraw(200);
deposit(1000);
withdraw(1500);
checkBalance();
