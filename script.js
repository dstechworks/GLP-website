$('.burger').click(function () {
    $('.nav-links').toggleClass('nav-active');
    $('.burger').toggleClass('active');
});
function SubForm(event) {
    event.preventDefault()
    const emailError = document.querySelector('#email + .errorMessage');
    const contactError = document.querySelector('#contactnumber + .errorMessage');
    const emailInput = document.getElementById('email');
    const contactInput = document.getElementById('contactnumber');
    const form = document.querySelector('#myForm');
    const contact = document.querySelector("#contact").value
    const detailsError = document.querySelector('#myForm > .errorMessage');
    if ($('#myForm').serializeArray()[0]?.value == "" || $('#myForm').serializeArray()[1]?.value == "" || $('#myForm').serializeArray()[2]?.value == "") {
      detailsError.textContent = "All fields are required"
    }
    else {
      const email = document.querySelector("#email").value.trim();
      const contact = document.querySelector("#contactnumber").value

      if (email === '' || contact === '') {
        if (email === '') {
          emailError.textContent = 'Email is required.'; emailInput.parentNode.classList.add('error');
        }
        else {
          contactError.textContent = 'Contact is required.'; contactInput.parentNode.classList.add('error');
        }
      }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !contact.match(/^\d{10}$/) ) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { emailError.textContent = 'Please enter a valid email address.'; emailInput.parentNode.classList.add('error'); } else { emailError.textContent = ''; emailInput.parentNode.classList.remove('error'); }
        if (!contact.match(/^\d{10}$/)) { contactError.textContent = 'Please enter a valid contact.'; contactInput.parentNode.classList.add('error'); } else { contactError.textContent = ''; contactInput.parentNode.classList.remove('error'); }
      }
      else {
        emailError.textContent = '';
        contactError.textContent = '';
        const form = document.querySelector('#myForm');
        form.method = "post"
        form.action = "https://script.google.com/macros/s/AKfycbzVw6X_tnd2m7B_tSkRbKpAhvpGRDjJd5rwonJ-6xJesiVXMjEiMIoM7AR47BJuiRpM6g/exec";
        form.submit();
        form.querySelector('button').innerText = "Submitted"
        emailInput.parentNode.classList.remove('error');
        contactInput.parentNode.classList.remove('error');
        setTimeout(() => {
          $('#myForm input').val('');
          form.querySelector('button').innerText = "Submit"
          detailsError.textContent = ""
        }, 100);
        setTimeout(() => {
          window.location.reload()
        }, 2000);
      }
    }
  }