// script.js

let memz = 1000;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'flex';
        document.getElementById('usernameDisplay').textContent = username;
    } else {
        alert('Please enter your credentials.');
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    document.getElementById(sectionId).classList.add('active');
}

function spinRoulette() {
    const prize = Math.floor(Math.random() * 1000) + 1; // Random prize between 1 and 1000 Memz
    memz += prize;
    document.getElementById('memzAmount').textContent = memz;
    document.getElementById('rouletteResult').textContent = `You won ${prize} Memz!`;
}

function buyItem(itemId) {
    let price;
    if (itemId === 1) price = 500;
    if (itemId === 2) price = 1000;

    if (memz >= price) {
        memz -= price;
        document.getElementById('memzAmount').textContent = memz;
        addItemToInventory(`Item ${itemId}`);
    } else {
        alert('Not enough Memz.');
    }
}

function addItemToInventory(itemName) {
    const inventoryItems = document.getElementById('inventoryItems');
    const newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.textContent = itemName;
    inventoryItems.appendChild(newItem);
}

function claimAchievement() {
    const reward = 1000; // Reward for the achievement
    memz += reward;
    document.getElementById('memzAmount').textContent = memz;
    alert('Achievement claimed! You earned 1000 Memz.');
}
