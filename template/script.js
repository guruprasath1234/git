// Hide the editor by default
document.getElementById('editor').classList.add('hidden');

// Handle Login Form
const loginButton = document.getElementById('loginButton');
const userGreeting = document.getElementById('userGreeting');
const dashboard = document.getElementById('dashboard');
const editor = document.getElementById('editor');

loginButton.addEventListener('click', function() {
    // Hide login and dashboard sections
    document.getElementById('login').classList.add('hidden');
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
        document.getElementById('login').classList.remove('hidden');
        dashboard.classList.remove('hidden');
        editor.classList.add('hidden');
        
        // Reset the button back to login
        loginButton.innerText = 'Login';
        loginButton.classList.remove('bg-red-500', 'hover:bg-red-600');
        loginButton.classList.add('bg-green-500', 'hover:bg-green-600');
    });
});

// Meme Editor Logic
const imageUpload = document.getElementById('imageUpload');
const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');
const memeText = document.getElementById('memeText');
let image = null;

imageUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        image = new Image();
        image.src = reader.result;
        image.onload = () => {
            canvas.width = image.width > 500 ? 500 : image.width;
            canvas.height = image.height * (canvas.width / image.width);
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
    };
    reader.readAsDataURL(file);
});

document.getElementById('addText').addEventListener('click', () => {
    const text = memeText.value;
    ctx.font = '24px Arial';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fillText(text, 20, 50);  // Position the text at (20, 50)
    ctx.strokeText(text, 20, 50);
});

document.getElementById('downloadMeme').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = canvas.toDataURL();
    link.click();
});
