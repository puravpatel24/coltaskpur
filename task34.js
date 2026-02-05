function validateCheckout() {

    var fullname = document.getElementById("fullname").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var zip = document.getElementById("zip").value;
    var payment = document.getElementById("payment").value;

    // Check empty fields
    if (fullname === "" || phone === "" || address === "" || zip === "") {
        alert("All fields are required");
        return false;
    }

    // Phone number validation (exactly 10 digits)
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 10 digits");
        return false;
    }

    // ZIP / Postal code validation (India - 6 digits)
    var zipPattern = /^[0-9]{6}$/;
    if (!zipPattern.test(zip)) {
        alert("ZIP / Postal code must be 6 digits");
        return false;
    }

    // Payment option validation
    if (payment === "") {
        alert("Please select a payment option");
        return false;
    }

    alert("Order placed successfully!");
    return true;
}
