document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Handle Registration
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('regName').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const password = document.getElementById('regPassword').value.trim();

            // Store user data in localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some((user) => user.email === email);

            if (userExists) {
                alert('User already registered! Please login.');
                window.location.href = 'login.html';
                return;
            }

            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            alert('Registration successful!');
            window.location.href = 'login.html';
        });
    }

    // Handle Login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();

            // Retrieve user data from localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find((user) => user.email === email && user.password === password);

            if (user) {
                alert(`Welcome, ${user.name}!`);
                window.location.href = 'index.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        });
    }
});
