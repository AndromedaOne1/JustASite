/* USM Light 360 Panorama Engine */
document.addEventListener('DOMContentLoaded', () => {
    const viewer = document.getElementById('panorama-viewer');
    const container = document.getElementById('panorama-container');
    
    if (!viewer || !container) return;

    let isDragging = false;
    let startX = 0;
    let currentX = 0;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - currentX;
    });

    window.addEventListener('mouseup', () => { isDragging = false; });

    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.pageX - startX;
        viewer.style.backgroundPosition = `${currentX}px center`;
    });
});
