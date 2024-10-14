// Simulating a simple online shopping experience

// Task 1: Implement a conditional statement to check if a user is logged in
let loggedIn = true;

// Sample cart array
const cart = [
  { name: "T-shirt", price: 15.99 },
  { name: "Jeans", price: 39.99 },
  { name: "Sneakers", price: 59.99 },
  { name: "Hat", price: 12.99 }
];

// Task 2: Check if user is logged in and display cart contents or login message
if (loggedIn) {
  console.log("Welcome! Here are the items in your cart:");
  
  // Loop over the cart array and log the list of available products
  for (let i = 0; i < cart.length; i++) {
    console.log(`${i + 1}. ${cart[i].name} - $${cart[i].price.toFixed(2)}`);
  }
  
  // Calculate and display the total cost
  const totalCost = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(`\nTotal cost: $${totalCost.toFixed(2)}`);
} else {
  console.log("Please log in to view your cart.");
}
