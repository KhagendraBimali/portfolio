document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (
            rect.top <= windowHeight &&
            rect.top + rect.height >= 0
        );
    }

    // Function to handle scroll animation
    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(function(element) {
            if (isElementInViewport(element) && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        });
    }

    // Add scroll event listener with throttling
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScrollAnimation();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Handle resize events
    window.addEventListener('resize', handleScrollAnimation);
    
    // Initial check for elements in viewport
    handleScrollAnimation();
});
