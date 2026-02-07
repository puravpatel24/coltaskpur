document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const type = document.getElementById('userType').value;

    // Error spans
    const userError = document.getElementById('userError');
    const passError = document.getElementById('passError');
    const typeError = document.getElementById('typeError');

    // Reset errors
    userError.textContent = "";
    passError.textContent = "";
    typeError.textContent = "";

    let isValid = true;

    // Validation Logic
    if (user === "") {
        userError.textContent = "Username is required";
        isValid = false;
    }

    if (pass.length < 6) {
        passError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (type === "") {
        typeError.textContent = "Please select a user type";
        isValid = false;
    }

    // Success Action
    if (isValid) {
        // Mock success (In a real app, you'd check credentials against a DB)
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('dashboardSection').style.display = 'block';
        document.getElementById('welcomeText').textContent = `Welcome ${user} (${type})`;
    }
});
