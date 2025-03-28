document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formMessage.textContent = "Message sent successfully!";
            formMessage.classList.add('success-message');
            contactForm.reset();
        } else {
            formMessage.textContent = "Please fill all fields!";
            formMessage.classList.remove('success-message');
        }
    });
});