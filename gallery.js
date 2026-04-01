document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('img01');
    const closeBtn = document.querySelector('.close');

    // 1. Filtering Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 2. Lightbox (Click to Enlarge)
    items.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightbox.style.display = "block";
            lightboxImg.src = imgSrc;
        });
    });

    closeBtn.onclick = () => { lightbox.style.display = "none"; }
    window.onclick = (e) => { if(e.target == lightbox) lightbox.style.display = "none"; }
});