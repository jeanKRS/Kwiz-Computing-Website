// Blog Cards Auto-scroll and Navigation
document.addEventListener('DOMContentLoaded', function() {
    const relatedPostsSections = document.querySelectorAll('.related-posts');

    relatedPostsSections.forEach(section => {
        const container = section.querySelector('.blog-cards-container');
        if (!container) return;

        const cards = container.querySelectorAll('.blog-card');
        if (cards.length === 0) return;

        // Create wrapper and arrows
        const wrapper = document.createElement('div');
        wrapper.className = 'blog-cards-wrapper';
        container.parentNode.insertBefore(wrapper, container);
        wrapper.appendChild(container);

        const leftArrow = document.createElement('button');
        leftArrow.className = 'scroll-arrow scroll-left';
        leftArrow.innerHTML = '‹';
        leftArrow.setAttribute('aria-label', 'Scroll left');

        const rightArrow = document.createElement('button');
        rightArrow.className = 'scroll-arrow scroll-right';
        rightArrow.innerHTML = '›';
        rightArrow.setAttribute('aria-label', 'Scroll right');

        wrapper.insertBefore(leftArrow, container);
        wrapper.appendChild(rightArrow);

        // Scroll amount (one card width + gap)
        const scrollAmount = 320 + 24; // card width + gap

        // Auto-scroll settings
        let autoScrollInterval;
        let isAutoScrolling = true;
        const autoScrollDelay = 4000; // 4 seconds

        // Update arrow states based on scroll position
        function updateArrows() {
            const scrollLeft = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;

            leftArrow.disabled = scrollLeft <= 0;
            rightArrow.disabled = scrollLeft >= maxScroll - 1;
        }

        // Scroll left
        leftArrow.addEventListener('click', () => {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
            stopAutoScroll();
        });

        // Scroll right
        rightArrow.addEventListener('click', () => {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            stopAutoScroll();
        });

        // Auto-scroll function
        function autoScroll() {
            const scrollLeft = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;

            if (scrollLeft >= maxScroll - 1) {
                // Reset to beginning
                container.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                // Scroll to next card
                container.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }

        // Start auto-scroll
        function startAutoScroll() {
            if (isAutoScrolling && cards.length > 1) {
                autoScrollInterval = setInterval(autoScroll, autoScrollDelay);
            }
        }

        // Stop auto-scroll
        function stopAutoScroll() {
            isAutoScrolling = false;
            if (autoScrollInterval) {
                clearInterval(autoScrollInterval);
            }
        }

        // Resume auto-scroll
        function resumeAutoScroll() {
            isAutoScrolling = true;
            startAutoScroll();
        }

        // Pause auto-scroll on hover
        wrapper.addEventListener('mouseenter', stopAutoScroll);
        wrapper.addEventListener('mouseleave', resumeAutoScroll);

        // Update arrows on scroll
        container.addEventListener('scroll', updateArrows);

        // Initialize
        updateArrows();
        startAutoScroll();

        // Stop auto-scroll when user manually scrolls
        let isUserScrolling = false;
        let scrollTimeout;

        container.addEventListener('scroll', () => {
            if (!isUserScrolling) {
                isUserScrolling = true;
                stopAutoScroll();
            }

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isUserScrolling = false;
            }, 1000);
        });

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                updateArrows();
            }, 250);
        });
    });
});
