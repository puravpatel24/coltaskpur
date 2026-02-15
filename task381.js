document.getElementById('submitBtn').addEventListener('click', function() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const message = document.getElementById('message');

    // Reset styles
    [username, email, password].forEach(el => el.classList.remove('error-focus'));
    message.textContent = "";

    // Sequential Check Logic
    if (username.value.trim() === "") {
        message.textContent = "Please enter a username.";
        username.classList.add('error-focus');
        username.focus();
    } 
    else if (email.value.trim() === "") {
        message.textContent = "Please enter an email.";
        email.classList.add('error-focus');
        email.focus();
    } 
    else if (password.value.trim() === "") {
        message.textContent = "Please enter a password.";
        password.classList.add('error-focus');
        password.focus();
    } 
    else {
        message.style.color = "#2ecc71";
        message.textContent = "Registration successful!";
        // Proceed with form submission logic here
    }
});
