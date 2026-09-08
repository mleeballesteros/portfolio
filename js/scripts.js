/*!
* Start Bootstrap - Freelancer v7.0.7
* https://startbootstrap.com/theme/freelancer
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT
*/

// Scripts

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink + scroll shadow function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');

        if (!navbarCollapsible) {
            return;
        }

        if (window.scrollY <= 10) {
            navbarCollapsible.classList.remove('navbar-shrink');
            navbarCollapsible.classList.remove('scrolled');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
            navbarCollapsible.classList.add('scrolled');
        }
    };

    // Run on page load
    navbarShrink();

    // Run when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');

    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');

    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});