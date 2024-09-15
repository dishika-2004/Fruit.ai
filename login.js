document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Dummy validation
    if (username === 'user' && password === 'password') {
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
