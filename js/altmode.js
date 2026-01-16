function initAltMode() {
    if (localStorage.getItem('altMode') === null) {
        localStorage.setItem('altMode', 0);
    }

    const isEnabled = localStorage.getItem('altMode') === '1';
    if (isEnabled) {
        document.documentElement.classList.add('alt-mode');
    }
}

function toggleAltMode() {
    const isEnabled = localStorage.getItem('altMode') === '1';
    const newState = isEnabled ? 0 : 1;
    localStorage.setItem('altMode', newState);

    if (newState) {
        document.documentElement.classList.add('alt-mode');
    } else {
        document.documentElement.classList.remove('alt-mode');
    }
}

// Load on page load
initAltMode();
