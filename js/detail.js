$(function () {
    $("#datepicker").datepicker({
      beforeShowDay: function (date) {
        let day = date.getDay(); // 0 = Sunday, 6 = Saturday
        if (day === 0 || day === 6) {
          return [true, "weekend-date", "Weekend"]; // Adds "weekend-date" class
        }
        return [true, "", ""];
      }
    });
  });
  $(document).ready(function () {
    // Ensure extra text is hidden by default
    $("#extraText").hide();

    // Toggle text visibility on button click
    $("#readMoreBtn").click(function () {
      $("#extraText").slideToggle(1); // Adjust animation speed (400ms)

      // Change button text dynamically
      let isVisible = $("#extraText").is(":visible");
      $(this).text(isVisible ? "Read Less" : "Read More");
    });
  });
  

  $(document).ready(function () {
    $("#openphotos").click(function () {
        let textElement = $("#hidephotos");
        
        // Toggle text between "Hide Images" and "8+ Photos"
        textElement.text(textElement.text() === "8+ Photos" ? "Tap to hide" : "8+ Photos");
    });
});


// passenger info js
document.addEventListener("DOMContentLoaded", function() {
  var input = document.querySelector("#phone");

  window.intlTelInput(input, {
      initialCountry: "pk", // Set default country to Pakistan 🇵🇰
      preferredCountries: ["pk", "us", "gb", "in"], // Preferred countries
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // Enable number validation
  });
});
$(document).ready(function () {
  $(".head_scnd").click(function () {
      $(this).find("i").toggleClass("collapsed");
  });
});

// lazyloader js
setTimeout(function () {
  document.querySelectorAll('.fetched_list').forEach(function (element) {
      element.classList.remove('lazyLoad');
  });
  document.querySelectorAll('.fetched_list-dark').forEach(function (element) {
      element.classList.remove('lazyload-dark');
  });
}, 2000);

