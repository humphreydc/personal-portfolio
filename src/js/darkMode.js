const darkMode = document.getElementById('dark-mode-toggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon'); 

//save theme
if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark'); 
    updateIcons(true);
} else {
    document.documentElement.classList.remove('dark');
    updateIcons(false);
}

//check if dark
function updateIcons(isDark) {
    if (isDark) {
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    } else {
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    }
}

//add/remove dark when press
darkMode.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        updateIcons(false);
        
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        updateIcons(true);
    }
});
