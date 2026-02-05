// script.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const userType = document.getElementById('userType').value;

  // Get error elements
  const usernameError = document.getElementById('usernameError');
  const passwordError = document.getElementById('passwordError');
  const userTypeError = document.getElementById('userTypeError');

  let isValid = true;

  // Reset errors
  usernameError.textContent = '';
  passwordError.textContent = '';
  userTypeError.textContent = '';

  // Validation
  if (username === '') {
    usernameError.textContent = 'Username is required';
    isValid = false;
  }

  if (password === '') {
    passwordError.textContent = 'Password is required';
    isValid = false;
  }

  if (userType === '') {
    userTypeError.textContent = 'Please select a user type';
    isValid = false;
  }

  // Dummy credentials (for demo)
  const validUser = {
    username: 'user1',
    password: 'pass123',
    userType: 'Student'
  };

  if (isValid) {
    if (
      username === validUser.username &&
      password === validUser.password &&
      userType === validUser.userType
    ) {
      // Redirect to dashboard with username
      window.location.href = `dashboard.html?username=${encodeURIComponent(username)}`;
    } else {
      passwordError.textContent = 'Invalid login credentials';
    }
  }
});
