//temporary solution for btn toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    
    const circle = document.getElementById('circle');
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        circle.classList.remove('translate-x-5');
    } 
    else {
        document.documentElement.classList.add('dark');
        circle.classList.add('translate-x-5');
    }
    
});

// tailwind docs fix this later

// document.documentElement.classList.toggle(
//   "dark",
//   localStorage.theme === "dark" ||
//     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
// );
// // Whenever the user explicitly chooses light mode
// localStorage.theme = "light";
// // Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";
// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");