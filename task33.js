function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var age = document.getElementById("age").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "" || age === "") {
        alert("All fields are required");
        return false;
    }

    if (email === "") {
        alert("Email cannot be empty");
        return false;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    if (isNaN(age) || age < 18) {
        alert("Age must be a number and at least 18");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
