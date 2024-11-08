document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const logoutContainer = document.getElementById('logout-container');
    const userNameDisplay = document.getElementById('user-name');
    const logoutButton = document.getElementById('logout-button');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            userNameDisplay.textContent = username;
            loginContainer.classList.add('hidden');
            logoutContainer.classList.remove('hidden');
        } else {
            alert("Please enter both username and password");
        }
    });

    logoutButton.addEventListener('click', function() {
        loginContainer.classList.remove('hidden');
        logoutContainer.classList.add('hidden');
        loginForm.reset();
    });
});
