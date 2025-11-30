const submit = document.getElementById('submit-success');
const contactForm = document.getElementById('contact-form');

// timer clear/ show modal
contactForm.addEventListener('submit', () => {
    setTimeout(() => {
        contactForm.reset();
        submit.showModal();
    }, 1000);
});

// close modal  
document.getElementById('close-popup').addEventListener('click', () => {
    submit.close();
});