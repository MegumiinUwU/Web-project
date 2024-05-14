document.addEventListener('DOMContentLoaded', function() {

  const dobInput = document.getElementById("dob");
  const dobLabel = document.querySelector('label[for="dob"]');

  // Set initial opacity to 0
  dobLabel.style.opacity = '0';

  dobInput.addEventListener('input', () => {
    if (dobInput.value.trim()) {
      dobLabel.style.opacity = '1'; // When input has a value, make label visible
    } else {
      dobLabel.style.opacity = '0'; // When input is empty, make label invisible
    }
  });

  dobInput.addEventListener('click', () => {
    dobLabel.style.opacity = '1'; // When input is clicked, make label visible
  });

  // Hide the label again when focus is lost
  dobInput.addEventListener('blur', () => {
    if (!dobInput.value.trim()) {
      dobLabel.style.opacity = '0'; // When input loses focus and is empty, make label invisible
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const countryCodeSelect = document.getElementById("country_code");
  const phoneInput = document.getElementById("phone");
  
  countryCodeSelect.addEventListener('change', function() {
    const selectedCountryCode = countryCodeSelect.value;
    const selectedOption = countryCodeSelect.options[countryCodeSelect.selectedIndex];
    const countryCode = selectedOption.getAttribute('data-countryCode');
    const countryCodeValue = selectedOption.textContent.match(/\d+/)[0];
    phoneInput.value = "+" + countryCodeValue;
  });

  phoneInput.addEventListener('input', function() {
    const maxLength = parseInt(phoneInput.getAttribute('maxLength'));
    if (phoneInput.value.length > maxLength) {
      phoneInput.value = phoneInput.value.slice(0, maxLength);
    }
  });
});

