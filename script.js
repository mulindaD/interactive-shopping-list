// Array to store shopping list items
let shoppingList = [];

// DOM elements being assigned easy variables
const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-button');
const shoppingListElement = document.getElementById('shopping-list');
const clearButton = document.getElementById('clear-button');

// Function to render the shopping list
function renderList() {
    shoppingListElement.innerHTML = '';
    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        if (item.purchased) {
            li.classList.add('purchased');
        }
        const purchaseButton = document.createElement('button');
        purchaseButton.textContent = item.purchased ? 'Undo' : 'Mark Purchased';
        purchaseButton.onclick = () => togglePurchased(index);
        li.appendChild(purchaseButton);
        shoppingListElement.appendChild(li);
    });
}

// Function to add a new item
function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName) {
        shoppingList.push({ name: itemName, purchased: false });
        itemInput.value = '';
        renderList();
    }
}

// Function to toggle purchased status - Achieves the Marked 
function togglePurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased;
    renderList();
}

// Function to clear the list
function clearList() {
    shoppingList = [];
    renderList();
}

// Event listeners
addButton.addEventListener('click', addItem);
itemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItem();
});
clearButton.addEventListener('click', clearList);


// Initial render
renderList();