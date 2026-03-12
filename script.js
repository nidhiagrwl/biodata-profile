// Theme Toggle Logic
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

// Check local storage for theme preference
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Function to switch themes
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Share on WhatsApp
function shareOnWhatsApp() {
    let pageUrl = window.location.href;
    
    // Fallback if the user is testing locally (file:// URLs are not clickable on WhatsApp)
    if (pageUrl.startsWith('file://')) {
        pageUrl = "https://[Your-Deployed-Website-Link-Will-Go-Here].com";
    }
    
    const text = "Hello,\nSharing my biodata profile for marriage consideration.\n\n" + pageUrl;
    
    // api.whatsapp.com universally handles opening the app on mobile or web on desktop
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
}

// Copy Link
function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert("Biodata link copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy link: ", err);
    });
}

// Download PDF
function downloadPDF() {
    // Triggers the browser's native print functionality which supports "Save as PDF"
    window.print();
}

// Optional Scroll Animation enhancements
document.addEventListener('DOMContentLoaded', () => {
    // We already have CSS keyframe animations for the initial load.
    // If we wanted to add scroll-based reveal for elements offscreen:
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        // Here we could attach the observer if we disable initial slide animations
        // observer.observe(card); 
    });
});
