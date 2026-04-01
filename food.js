idocument.querySelectorAll('.food-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = item.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        item.querySelector('img').style.transform = `
            scale(1.1) 
            translateX(${x * 20}px) 
            translateY(${y * 20}px)
        `;
    });

    item.addEventListener('mouseleave', () => {
        item.querySelector('img').style.transform = `scale(1) translateX(0) translateY(0)`;
    });
});