// Menu toggle functionality
const menuIcon = document.querySelector('.left_section .menu-icon');
const aside = document.querySelector('aside');
const mobileOverlay = document.getElementById('mobileOverlay');

// Check if mobile device
const isMobile = () => window.innerWidth <= 768;

// Toggle sidebar on menu click
if (menuIcon && aside) {
    menuIcon.addEventListener('click', () => {
        if (isMobile()) {
            // Mobile: toggle sidebar and overlay
            aside.classList.toggle('show');
            if (mobileOverlay) {
                mobileOverlay.classList.toggle('show');
            }
        } else {
            // Desktop: toggle collapsed state
            aside.classList.toggle('collapsed');
        }
    });
}

// Close sidebar when clicking overlay on mobile
if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => {
        aside.classList.remove('show');
        mobileOverlay.classList.remove('show');
    });
}

// Handle window resize
window.addEventListener('resize', () => {
    if (!isMobile() && aside) {
        aside.classList.remove('show');
        if (mobileOverlay) {
            mobileOverlay.classList.remove('show');
        }
    }
});

// Handle menu item clicks for active state
const navLinks = document.querySelectorAll('.nav_link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Don't prevent default for actual navigation
        // Remove active class from all links
        navLinks.forEach(l => {
            l.classList.remove('active');
            const span = l.querySelector('span');
            if (span) span.id = '';
        });
        
        // Add active class to clicked link
        link.classList.add('active');
        const span = link.querySelector('span');
        if (span) span.id = 'active_span';
        
        // Close sidebar on mobile when link is clicked
        if (isMobile() && aside && mobileOverlay) {
            aside.classList.remove('show');
            mobileOverlay.classList.remove('show');
        }
    });
});

// Video card hover effects
const videoCards = document.querySelectorAll('.vedio');
videoCards.forEach(video => {
    video.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    });
    
    video.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Search bar enhancement
const searchInput = document.querySelector('.mid_section input');
const searchButton = document.querySelector('.mid_section button');

if (searchInput && searchButton) {
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.borderColor = '#065fd4';
        this.style.borderColor = '#065fd4';
    });

    searchInput.addEventListener('blur', function() {
        this.parentElement.style.borderColor = '#d3d3d3';
        this.style.borderColor = '#d3d3d3';
    });

    // Search functionality
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        const query = searchInput.value;
        if (query.trim() !== '') {
            console.log('Searching for:', query);
            // Add your search logic here
        }
    });

    // Enter key to search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchButton.click();
        }
    });
}

// Smooth scroll for sidebar
if (aside) {
    aside.addEventListener('scroll', function() {
        // Add shadow when scrolled
        if (this.scrollTop > 0) {
            this.style.boxShadow = 'inset 0 5px 5px -5px rgba(0, 0, 0, 0.1)';
        } else {
            this.style.boxShadow = 'none';
        }
    });
}

// Header icons hover effects
const headerIcons = document.querySelectorAll('.right_section a, .mid_section .mic');
headerIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
        this.style.borderRadius = '50%';
        this.style.transition = 'background-color 0.2s ease';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
    });
});

// Add animation to page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Thumbnail hover effect
const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(thumbnail => {
    const img = thumbnail.querySelector('img');
    
    thumbnail.addEventListener('mouseenter', function() {
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.3s ease';
    });
    
    thumbnail.addEventListener('mouseleave', function() {
        img.style.transform = 'scale(1)';
    });
});

