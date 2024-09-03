// script.js

// Mock data for demonstration
let users = [
    { username: "PlayerOne", email: "playerone@example.com", password: "password1", memz: 5000, avatar: "avatar1.png" },
    { username: "PlayerTwo", email: "playertwo@example.com", password: "password2", memz: 20000, avatar: "avatar2.png" },
];

// Current user simulation (this would typically be set after login)
let currentUser = users[0]; // Assume the first user is logged in for this example

// Function to display user data on the account management page
function loadAccountData() {
    if (!currentUser) return;

    document.getElementById('username').value = currentUser.username;
    document.getElementById('email').value = currentUser.email;

    // Display current avatar
    if (currentUser.avatar) {
        selectAvatar(currentUser.avatar);
    }
}

// Function to select an avatar
function selectAvatar(avatar) {
    document.getElementById('selectedAvatar').value = avatar;

    // Remove selected class from all avatars
    document.querySelectorAll('.avatar').forEach(img => img.classList.remove('selected'));

    // Add selected class to the clicked avatar
    document.querySelector(`img[src='avatars/${avatar}']`).classList.add('selected');

    // Hide the uploaded avatar preview
    document.getElementById('uploadedAvatar').style.display = 'none';
}

// Function to preview uploaded avatar
function previewAvatar() {
    const fileInput = document.getElementById('avatarUpload');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        const uploadedAvatar = document.getElementById('uploadedAvatar');
        uploadedAvatar.src = reader.result;
        uploadedAvatar.style.display = 'block';

        // Clear selection of predefined avatars
        document.querySelectorAll('.avatar').forEach(img => img.classList.remove('selected'));

        // Clear the selected avatar value
        document.getElementById('selectedAvatar').value = '';
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        document.getElementById('uploadedAvatar').style.display = 'none';
    }
}

// Function to update account details
function updateAccount() {
    const email = document.getElementById('email')
}