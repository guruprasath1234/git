// Handle form submission
document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate if email and password are not empty
    if (email && password) {
        alert(`Welcome, ${email}! You have successfully signed in.`);

        // Optionally, you can add further actions like redirecting or clearing the form here
    } else {
        alert("Please enter both email and password.");
    }

    signinButton.addEventListener('click', function() {
        // Hide login and dashboard sections
        document.getElementById('signin').classList.add('hidden');
        dashboard.classList.add('hidden');
        
        // Show the editor section
        editor.classList.remove('hidden');
        
        // Change login button to logout button
        loginButton.innerText = 'Logout';
        loginButton.classList.remove('bg-green-500', 'hover:bg-green-600');
        loginButton.classList.add('bg-red-500', 'hover:bg-red-600');

 // Add event listener to the new logout button
 loginButton.addEventListener('click', function() {
    // Reset to login state
    document.getElementById('signin').classList.remove('hidden');
    dashboard.classList.remove('hidden');
    editor.classList.add('hidden');
    
    // Reset the button back to login
    loginButton.innerText = 'sign';
    loginButton.classList.remove('bg-red-500', 'hover:bg-red-600');
    loginButton.classList.add('bg-green-500', 'hover:bg-green-600');
});
    });
});