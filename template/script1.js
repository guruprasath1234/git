// Handle form submission
document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate if email and password are not empty
    if (email && password) {
        alert(`Welcome, ${email}! You have successfully signed in.`);
        
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        alert("Please enter both email and password.");
    }
});
