// URL of the Google Apps Script endpoint
const scriptURL = 'https://script.google.com/macros/s/AKfycbz0AGhEAJLQitfW8c8Z9GMcSjxRpUQjpMkGZxFyvOi5r7eROzrSRvARLD_boa4HGoMzzA/exec';

// Access the form element by its name attribute
const form = document.forms['contact-form'];

// Add an event listener to handle form submission
form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a FormData object from the form element
    const formData = new FormData(form);

    // Send a POST request to the Google Apps Script endpoint
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            // Check if the response status is OK
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.text(); // Convert the response to text
        })
        .then(result => {
            // Log the result for debugging
            console.log(result);
            // Show a success alert
            alert("Thank You! Your form is submitted successfully.");
            // Optionally, clear the form or reset it
            form.reset();
            // Optionally, redirect or update the page
            // window.location.reload(); // Reload the page
        })
        .catch(error => {
            // Log and show error details
            console.error('Error!', error.message);
            alert('There was an error submitting your form. Please try again later.');
        });
});
