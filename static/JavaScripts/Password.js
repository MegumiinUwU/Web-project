// document.getElementById('password').addEventListener('input', function () {
//     const password = this.value;
//     const confirm_password = document.getElementById('confirm_password');
  
//     if (password !== confirm_password.value) {
//       confirm_password.setCustomValidity('Passwords do not match');
//     } else {
//       confirm_password.setCustomValidity('');
//     }
//   });
  
//   document.getElementById('confirm_password').addEventListener('input', function () {
//     const password = document.getElementById('password').value;
//     const confirm_password = this.value;
  
//     if (password !== confirm_password) {
//       this.setCustomValidity('Passwords do not match');
//     } else {
//       this.setCustomValidity('');
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const passwordInput = document.getElementById("password");
//   const passwordLabel = document.querySelector('label[for="password"]');

//   // Set initial opacity to 0
//   passwordLabel.style.opacity = '0';

//   passwordInput.addEventListener('input', () => {
    
//     if (passwordInput.value.trim()) {
//       passwordLabel.style.opacity = '1'; // When input has a value, make label visible
//     } else {
//       passwordLabel.style.opacity = '0'; // When input is empty, make label invisible
//     }
//   });

//   passwordInput.addEventListener('click', () => {
//     passwordLabel.style.opacity = '1'; // When input is clicked, make label visible
//   });

//   // Hide the label again when focus is lost
//   passwordInput.addEventListener('blur', () => {
//     if (!passwordInput.value.trim()) {
//       passwordLabel.style.opacity = '0'; // When input loses focus and is empty, make label invisible
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const passwordInput = document.getElementById("password");
  const confirmPassword = document.getElementById('confirm_password');
  const passwordLabel = document.querySelector('label[for="password"]');
  const confirmPasswordLabel = document.querySelector('label[for="confirm_password"]');

  // Set initial opacity to 0 for both labels
  passwordLabel.style.opacity = '0';
  confirmPasswordLabel.style.opacity = '0';

  function updateLabels(value) {
    if (value.trim()) {
      passwordLabel.style.opacity = '1';
      confirmPasswordLabel.style.opacity = '1'; // Make confirm password label visible too
    } else {
      passwordLabel.style.opacity = '0';
      confirmPasswordLabel.style.opacity = '0';
    }
  }

  function validatePasswords() {
    if (passwordInput.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Passwords do not match');
    } else {
      confirmPassword.setCustomValidity('');
    }
  }

  passwordInput.addEventListener('input', validatePasswords);

  confirmPassword.addEventListener('input', validatePasswords);

  // Hide labels again when focus is lost, but only if input is empty
  passwordInput.addEventListener('blur', () => {
    updateLabels(passwordInput.value);
  });

  // Make labels visible on click of either input
  passwordInput.addEventListener('click', () => {
    updateLabels(passwordInput.value);
  });

  confirmPassword.addEventListener('click', () => {
    updateLabels(confirmPassword.value);
  });
});