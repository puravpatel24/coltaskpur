const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

const emailIcon = document.getElementById('emailIcon');
const lengthReq = document.getElementById('lengthReq');
const charReq = document.getElementById('charReq');

// Helper to check overall validity
function validateForm() {
    const isEmailValid = /\S+@\S+\.\S+/.test(email.value);
    const isLengthValid = password.value.length >= 8;
    const hasSpecial = /[0-9]/.test(password.value) && /[^A-Za-z0-9]/.test(password.value);
    
    submitBtn.disabled = !(isEmailValid && isLengthValid && hasSpecial);
}

// Email Live Validation
email.addEventListener('input', () => {
    const emailPattern = /\S+@\S+\.\S+/;
    if (emailPattern.test(email.value)) {
        email.style.borderColor = "#27ae60";
        emailIcon.textContent = "✓";
        emailIcon.style.color = "#27ae60";
    } else {
        email.style.borderColor = "#e74c3c";
        emailIcon.textContent = "✕";
        emailIcon.style.color = "#e74c3c";
    }
    validateForm();
});

// Password Live Validation
password.addEventListener('input', () => {
    const val = password.value;
    
    // Check length
    if (val.length >= 8) {
        lengthReq.className = "valid";
    } else {
        lengthReq.className = "invalid";
    }
    
    // Check for Number and Special Char
    const specialPattern = /[0-9]/.test(val) && /[^A-Za-z0-9]/.test(val);
    if (specialPattern) {
        charReq.className = "valid";
    } else {
        charReq.className = "invalid";
    }
    
    validateForm();
});

// Prevent submission if someone bypasses disabled button
document.getElementById('regForm').addEventListener('submit', (e) => {
    if (submitBtn.disabled) e.preventDefault();
});
