// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import Boxicons
import 'boxicons/css/boxicons.min.css';

// Import Animate.css
import 'animate.css';

// Import AOS (Animate On Scroll)
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Import Isotope
import Isotope from 'isotope-layout';

// Import GLightbox
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

// Import custom styles
import '../css/style.css';

// Make libraries globally available
window.Isotope = Isotope;
window.GLightbox = GLightbox;
window.Swiper = Swiper;
window.AOS = AOS;

// Import and run main application logic
import './main.js';
