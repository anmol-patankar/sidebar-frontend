document.addEventListener('DOMContentLoaded', (event) => {
    const iconContainers = document.querySelectorAll('.sdicon');
    iconContainers.forEach(container => {
        container.classList.remove('sdicon-active');
        container.addEventListener('click', () => {
            iconContainers.forEach(icon => icon.classList.remove('sdicon-active'));
            container.classList.add('sdicon-active');
        });
    });
});
 