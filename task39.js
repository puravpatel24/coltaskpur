const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// 1. Handle "Enter" key press
usernameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission if it's just a field jump
        if (usernameInput.value.trim() !== "") {
            passwordInput.focus();
        }
    }
});

// 2. Handle "Blur" (losing focus) if content exists
usernameInput.addEventListener('blur', () => {
    if (usernameInput.value.trim() !== "") {
        // We use a slight timeout or check to ensure we don't 
        // force focus if the user intentionally clicked elsewhere
        console.log("Username entered, ready for password.");
    }
});
