document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Theme & RTL Toggles
    const body = document.body;
    
    window.toggleDarkMode = function() {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    };

    window.toggleRTL = function() {
        const currentDir = document.documentElement.getAttribute('dir');
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        document.documentElement.setAttribute('dir', newDir);
        localStorage.setItem('rtlMode', newDir);
    };

    // Load saved preferences
    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
    }
    if (localStorage.getItem('rtlMode')) {
        document.documentElement.setAttribute('dir', localStorage.getItem('rtlMode'));
    }

    // Password Visibility Toggle
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                this.innerHTML = '<i data-lucide="eye-off"></i>';
            } else {
                input.type = 'password';
                this.innerHTML = '<i data-lucide="eye"></i>';
            }
            lucide.createIcons();
        });
    });
});
