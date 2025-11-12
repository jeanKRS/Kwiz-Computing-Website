// Blog Cards Auto-scroll and Navigation
document.addEventListener('DOMContentLoaded', function() {
    const relatedPostsSections = document.querySelectorAll('.related-posts');

    relatedPostsSections.forEach(section => {
        const container = section.querySelector('.blog-cards-container');
        if (!container) return;

        const cards = container.querySelectorAll('.blog-card');
        if (cards.length === 0) return;

        // Wrap container if not already wrapped
        if (!container.parentElement.classList.contains('blog-cards-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'blog-cards-wrapper';
            container.parentNode.insertBefore(wrapper, container);
            wrapper.appendChild(container);
        }

        const wrapper = container.parentElement;

        // Create arrow elements
        const leftArrow = document.createElement('div');
        leftArrow.className = 'scroll-arrow left';
        leftArrow.textContent = '←';
        leftArrow.setAttribute('aria-hidden', 'true');
        leftArrow.setAttribute('role', 'button');
        leftArrow.setAttribute('aria-label', 'Scroll left');

        const rightArrow = document.createElement('div');
        rightArrow.className = 'scroll-arrow right';
        rightArrow.textContent = '→';
        rightArrow.setAttribute('aria-hidden', 'true');
        rightArrow.setAttribute('role', 'button');
        rightArrow.setAttribute('aria-label', 'Scroll right');

        wrapper.appendChild(leftArrow);
        wrapper.appendChild(rightArrow);

        // Auto-scroll state
        let autoScrollInterval = null;
        let isInViewport = false;

        // Calculate card width for scrolling
        function getCardWidth() {
            const card = container.querySelector('.blog-card');
            if (card) {
                const cardWidth = card.offsetWidth;
                const gap = parseFloat(window.getComputedStyle(container).gap) || 24; // 1.5rem default
                return cardWidth + gap;
            }
            return container.clientWidth * 0.8; // Fallback
        }

        // Scroll by one card
        function scrollByCard(direction) {
            const cardWidth = getCardWidth();
            const scrollAmount = direction === 'right' ? cardWidth : -cardWidth;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            resetAutoScroll();
        }

        // Function to update arrow visibility based on scroll position
        function updateScrollArrows() {
            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth;
            const clientWidth = container.clientWidth;

            // Show left arrow if scrolled right (content hidden on left)
            if (scrollLeft > 1) {
                leftArrow.classList.add('visible');
            } else {
                leftArrow.classList.remove('visible');
            }

            // Show right arrow if there's more content on the right
            if (scrollLeft + clientWidth < scrollWidth - 1) {
                rightArrow.classList.add('visible');
            } else {
                rightArrow.classList.remove('visible');
            }
        }

        // Auto-scroll functionality
        function startAutoScroll() {
            if (autoScrollInterval) return;

            autoScrollInterval = setInterval(() => {
                if (!isInViewport) return;

                const scrollLeft = container.scrollLeft;
                const scrollWidth = container.scrollWidth;
                const clientWidth = container.clientWidth;

                // Check if at the end
                if (scrollLeft + clientWidth >= scrollWidth - 1) {
                    // Reset to start
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Scroll to next card
                    scrollByCard('right');
                }
            }, 8000); // Auto-scroll every 8 seconds (matching services page)
        }

        function stopAutoScroll() {
            if (autoScrollInterval) {
                clearInterval(autoScrollInterval);
                autoScrollInterval = null;
            }
        }

        function resetAutoScroll() {
            stopAutoScroll();
            if (isInViewport) {
                setTimeout(startAutoScroll, 4000); // Resume after 4 seconds of inactivity
            }
        }

        // Click handlers for arrows
        leftArrow.addEventListener('click', () => scrollByCard('left'));
        rightArrow.addEventListener('click', () => scrollByCard('right'));

        // Use Intersection Observer to only show arrows when container is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isInViewport = entry.isIntersecting;

                if (entry.isIntersecting) {
                    updateScrollArrows();
                    startAutoScroll();
                } else {
                    // Hide arrows when container is not in viewport
                    leftArrow.classList.remove('visible');
                    rightArrow.classList.remove('visible');
                    stopAutoScroll();
                }
            });
        }, {
            threshold: 0.1 // Trigger when at least 10% of container is visible
        });

        observer.observe(container);

        // Update arrows on scroll and reset auto-scroll
        container.addEventListener('scroll', () => {
            updateScrollArrows();
            resetAutoScroll();
        });

        // Update arrows on window resize
        window.addEventListener('resize', updateScrollArrows);

        // Pause auto-scroll on user interaction
        container.addEventListener('mouseenter', stopAutoScroll);
        container.addEventListener('mouseleave', () => {
            if (isInViewport) startAutoScroll();
        });
        container.addEventListener('touchstart', stopAutoScroll);
        container.addEventListener('touchend', () => {
            if (isInViewport) setTimeout(startAutoScroll, 4000);
        });

        // Initial check
        updateScrollArrows();
    });
});
