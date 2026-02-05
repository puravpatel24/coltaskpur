function validateLogin() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usertype = document.getElementById("usertype").value;

    document.getElementById("userErr").innerHTML = "";
    document.getElementById("passErr").innerHTML = "";
    document.getElementById("typeErr").innerHTML = "";

    var valid = true;

    if (username === "") {
        document.getElementById("userErr").innerHTML =
        "Invalid username (for selected user type).";
        valid = false;
    }

    if (password === "") {
        document.getElementById("passErr").innerHTML =
        "Invalid password.";
        valid = false;
    }

    if (usertype === "") {
        document.getElementById("typeErr").innerHTML =
        "Please select user type.";
        valid = false;
    }

    if (valid) {
        window.location.href = "dashboard.html?user=" + username;
    }
}
