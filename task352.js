function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usertype = document.getElementById("usertype").value;

    document.getElementById("userError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";
    document.getElementById("typeError").innerHTML = "";

    var valid = true;

    if (username === "") {
        document.getElementById("userError").innerHTML = "Invalid username (for selected user type).";
        valid = false;
    }

    if (password === "") {
        document.getElementById("passError").innerHTML = "Invalid password.";
        valid = false;
    }

    if (usertype === "") {
        document.getElementById("typeError").innerHTML = "Please select user type.";
        valid = false;
    }

    if (valid) {
        window.location.href = "dashboard.html?user=" + username;
    }
}
