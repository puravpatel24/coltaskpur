const productImg = document.getElementById('productImg');
const tooltip = document.getElementById('tooltip');

// 1. Show tooltip on Mouse Over
productImg.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
});

// 2. Update position on Mouse Move
productImg.addEventListener('mousemove', (event) => {
    // Add a small offset (15px) so the tooltip doesn't cover the cursor
    const offset = 15;
    
    tooltip.style.left = (event.clientX + offset) + 'px';
    tooltip.style.top = (event.clientY + offset) + 'px';
});

// 3. Hide tooltip on Mouse Out
productImg.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
});
