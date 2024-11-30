// JavaScript for Meme Generator


// Handle Login Form
const loginForm = document.getElementById('loginForm');
const userGreeting = document.getElementById('userGreeting');
const dashboard = document.getElementById('dashboard');
const editor = document.getElementById('editor');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    userGreeting.textContent = username;
    alert(`Welcome, ${username}!`);
    loginForm.parentElement.classList.add('hidden');
    dashboard.classList.remove('hidden');
});

// Navigate to Editor
document.getElementById('goToEditor').addEventListener('click', () => {
    dashboard.classList.add('hidden');
    editor.classList.remove('hidden');
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
    ctx.fillText(text, 20, 50);
    ctx.strokeText(text, 20, 50);
});

document.getElementById('downloadMeme').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = canvas.toDataURL();
    link.click();
});
