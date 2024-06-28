document.addEventListener('DOMContentLoaded', (event) => {
    const iconContainers = document.querySelectorAll('.sdicon');
    iconContainers.forEach(container => {
        container.classList.remove('sdicon-active'); // Ensure all icons start without the 'active' class
        container.addEventListener('click', () => {
            // Remove the 'active' class from all icon containers
            iconContainers.forEach(icon => icon.classList.remove('sdicon-active'));
            // Add the 'active' class to the clicked icon container
            container.classList.add('sdicon-active');
        });
    });
});


