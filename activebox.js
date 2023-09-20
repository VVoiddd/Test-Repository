document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.menu-item');
    const activeBox = document.createElement('div');
    activeBox.classList.add('active-box');
    document.body.appendChild(activeBox);

    // Add fadeIn animation class to the active box
    activeBox.classList.add('fadeIn');

    // Wait for the fadeIn animation to complete
    activeBox.addEventListener('animationend', () => {
        activeBox.classList.remove('fadeIn');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            const rect = item.getBoundingClientRect();
            activeBox.style.width = `${rect.width}px`;
            activeBox.style.height = `${rect.height}px`;
            activeBox.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
        });
    });
});
