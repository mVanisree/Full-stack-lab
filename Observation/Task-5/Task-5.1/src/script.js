const quantityInput = document.getElementById("quantity");
const priceInput = document.getElementById("price")
const totalDisplay = document.getElementById("total")

function calculateTotal(){
    const quantity = Number(quantityInput.value);
    const price = Number(priceInput.value)
    const total = quantity * price;

    totalDisplay.textContent = total.toFixed(2);
}

quantityInput.addEventListener("input", calculateTotal);
priceInput.addEventListener("input", calculateTotal);

calculateTotal();