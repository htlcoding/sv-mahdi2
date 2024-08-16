document.addEventListener("DOMContentLoaded", function() {
    // Cookie Messagebox
    var cookieMessagebox = document.getElementById('cookie-messagebox');
    var acceptCookiesBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieMessagebox.classList.remove('hidden');
    }

    acceptCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieMessagebox.classList.add('hidden');
    });

    // Preloader
    var preloader = document.getElementById('preloader');
    window.onload = function() {
        preloader.style.display = 'none';
    };

    // Scroll-to-Top Button
    var scrollToTopBtn = document.getElementById('scroll-to-top');
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Modal für Bildvergrößerung
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    var galleryItems = document.querySelectorAll('.gallery-item img');
    var closeBtn = document.getElementsByClassName('close')[0];

    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
