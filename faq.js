document.addEventListener('DOMContentLoaded', () => {
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            content.classList.toggle('active');
        });
    });
});