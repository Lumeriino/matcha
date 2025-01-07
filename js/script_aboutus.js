document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const toggle = item.querySelector('.faq-toggle');
        const response = item.querySelector('.faq-response');

        item.addEventListener('click', () => {
            if (response.style.display === 'block') {
                response.style.display = 'none';
                toggle.textContent = '+';
            } else {
                response.style.display = 'block';
                toggle.textContent = '−';
            }
        });
    });
});
