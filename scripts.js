// Array to store cart items
const cart = [];

// Function to add items to the cart
function addToCart(dish) {
    cart.push(dish);
    alert(`${dish} has been added to your cart.`);
}

// Function to handle form submission
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const dish = document.getElementById('dish').value;

    if (!name || !address || !dish) {
        document.getElementById('formMessage').innerText = 'Please fill out all fields.';
        return;
    }

    // Display a confirmation message
    document.getElementById('formMessage').innerText = `Thank you, ${name}! Your order for ${dish} has been placed. We will deliver it to ${address}.`;

    // Reset the form
    document.getElementById('orderForm').reset();
});
