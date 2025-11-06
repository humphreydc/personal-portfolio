//temporary solution for btn toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
    } 
    else {
        document.documentElement.classList.add('dark');
    }
});