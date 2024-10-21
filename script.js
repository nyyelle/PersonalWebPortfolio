document.querySelectorAll('button[data-url]').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        window.open(url, '_blank', 'noopener,noreferrer');
    });
});
