document.getElementById('vtopForm').addEventListener('submit', function(event) {
    // Prevent form from refreshing the page
    event.preventDefault();

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const userType = document.getElementById('userType').value;

    // Get error span elements
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const userTypeError = document.getElementById('usertype-error');

    // Reset error messages
    usernameError.textContent = "";
    passwordError.textContent = "";
    userTypeError.textContent = "";

    let isValid = true;

    // Validate Username
    if (username === "") {
        usernameError.textContent = "Username is required.";
        isValid = false;
    } else if (username.length < 4) {
        usernameError.textContent = "Username must be at least 4 characters.";
        isValid = false;
    }

    // Validate Password
    if (password === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    // Validate User Type
    if (userType === "") {
        userTypeError.textContent = "Please select a user type.";
        isValid = false;
    }

    // If all inputs are valid, "redirect" to dashboard
    if (isValid) {
        // Hide Login section
        document.getElementById('login-section').style.display = 'none';
        
        // Show Dashboard section
        document.getElementById('dashboard-section').style.display = 'block';
        
        // Display Welcome Message
        document.getElementById('welcome-text').textContent = `Welcome ${username}`;
        
        // Capitalize the first letter of user role
        const formattedRole = userType.charAt(0).toUpperCase() + userType.slice(1);
        document.getElementById('role-text').textContent = `Logged in as: ${formattedRole}`;
    }
});

// Optional function to simulate logging out and going back to the login screen
function logout() {
    // Clear form fields
    document.getElementById('vtopForm').reset();
    
    // Switch views back to login
    document.getElementById('dashboard-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}
