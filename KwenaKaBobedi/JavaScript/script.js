// Navigation / SPA Routing Logic
  function navTo(pageId) {
    // 1. Hide all pages
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.add('hidden'));
    
    // 2. Show requested page
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) targetPage.classList.remove('hidden');
    
    // 3. Update active state on nav links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
    if(activeLink) activeLink.classList.add('active');

    // 4. Scroll to top and close mobile menu
    window.scrollTo(0, 0);
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('active');
  }

  // Mobile Menu Toggle
  function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
  }

  // Form Submit Handlers
  function handleQuoteSubmit(e) {
    e.preventDefault();
    showToast("✓ Quote request received — we'll be in touch within 2 working days.");
    e.target.reset(); // clear form
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    showToast("✓ Message sent! We'll respond within 1 working day.");
    e.target.reset(); // clear form
  }

  // Toast Notification Logic
  let toastTimeout;
  function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.remove('hidden');
    
    // reset animation
    toast.style.animation = 'none';
    toast.offsetHeight; /* trigger reflow */
    toast.style.animation = null; 

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.add('hidden');
    }, 3500);
  }


  // POPIA Link Navigation on the footer
  
  

/**
 * Toggles the mobile navigation menu open and closed.
 */
function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('active');
  }
}

/**
 * Smart Navigation Router function.
 * Handles friendly page names (like 'Privacy') and maps them to physical HTML files.
 * @param {string} destination - The name or file of the page to navigate to.
 */
function navTo(destination) {
  // Map friendly names to actual file paths in your project folder
  const routes = {
    'Home': 'index.html',
    'Services': 'services.html',
    'HowItWorks': 'howItworks.html',
    'Schools': 'Schools.html',
    'Gallery': 'Gallery.html',
    'About': 'about.html',
    'Contact': 'contact.html',
    'Popia': 'popia.html',
    'RequestQuote': 'RequestQuote.html'
  };

  // Get the mapped file, or use the input directly if it's already a filename or URL
  const target = routes[destination] || destination;

  if (target) {
    window.location.href = target;
  }
}

/**
 * Automatically highlights the active navigation link based on the current page URL.
 */
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});