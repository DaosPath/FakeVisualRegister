document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('fakeVisualRegister');
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('password-strength');
    const notification = document.createElement('div');
    notification.className = 'notification';
    document.body.appendChild(notification);

    function showNotification(message, type) {
        notification.textContent = message;
        notification.classList.remove('error', 'success');
        notification.classList.add(type);
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (username && email && password) {
            showNotification('Registro exitoso', 'success');
        } else {
            showNotification('Por favor, completa todos los campos', 'error');
        }
    });

    passwordInput.addEventListener('input', function() {
        const value = passwordInput.value;
        if (value.length > 0) {
            if (value.length < 6) {
                passwordStrength.textContent = 'Débil';
                passwordStrength.style.color = 'var(--weak-color)';
            } else if (value.length < 10) {
                passwordStrength.textContent = 'Media';
                passwordStrength.style.color = 'var(--medium-color)';
            } else {
                passwordStrength.textContent = 'Fuerte';
                passwordStrength.style.color = 'var(--strong-color)';
            }
        } else {
            passwordStrength.textContent = '';
        }
    });
});
