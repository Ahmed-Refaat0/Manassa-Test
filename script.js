// Creative Brain - Script for Theme & Password Visibility Toggle
document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');

    const updateIcon = (isDark) => {
        if (themeToggleIcon) {
            themeToggleIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
        }
    };

    // Check actual document class on load
    const isDark = document.documentElement.classList.contains('dark');
    updateIcon(isDark);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isCurrentlyDark = document.documentElement.classList.contains('dark');
            if (isCurrentlyDark) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                updateIcon(false);
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                updateIcon(true);
            }
        });
    }

    // Password Visibility Logic
    const togglePasswordBtn = document.querySelector('button[aria-label="Show password"]');
    const passwordInput = document.getElementById('password');

    if (togglePasswordBtn && passwordInput) {
        const iconSpan = togglePasswordBtn.querySelector('span');
        togglePasswordBtn.addEventListener('click', () => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                if (iconSpan) iconSpan.textContent = 'visibility_off';
            } else {
                passwordInput.type = 'password';
                if (iconSpan) iconSpan.textContent = 'visibility';
            }
        });
    }
});
