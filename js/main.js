// Web Technologies - Assignment 1
// Areej Zeb Satti
// Form validation for the booking form on contact.html

var form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // show Bootstrap error messages if something is missing
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    // everything is ok, show thank you message
    document.getElementById("formSuccess").classList.remove("d-none");
    form.reset();
    form.classList.remove("was-validated");
  });
}

// don't allow booking for a past date
var dateInput = document.getElementById("date");
if (dateInput) {
  dateInput.min = new Date().toISOString().split("T")[0];
}
