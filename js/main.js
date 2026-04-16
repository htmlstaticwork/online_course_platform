/**
 * Gaia Academy - Main JavaScript Logic
 * Handles RTL, Mobile Menu, and Scroll Animations
 */

$(document).ready(function() {


    // 2. RTL Logic
    const initRTL = () => {
        const savedRTL = localStorage.getItem('rtl');
        if (savedRTL === 'true') {
            $('html').attr('dir', 'rtl');
            $('.rtl-toggle-icon').addClass('fa-rotate-180');
        }
    };

    $('.rtl-toggle').on('click', function() {
        const currentDir = $('html').attr('dir');
        const isRTL = currentDir === 'rtl';
        $('html').attr('dir', isRTL ? 'ltr' : 'rtl');
        localStorage.setItem('rtl', !isRTL);
        $('.rtl-toggle-icon').toggleClass('fa-rotate-180');
    });

    // 3. Mobile Menu Toggle
    $('.hamburger-btn').on('click', function() {
        $('#mobile-menu').toggleClass('hidden scale-y-0 opacity-0');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

    // 4. Scroll Reveal Logic
    const revealElements = () => {
        $('.reveal-on-scroll').each(function() {
            const elementTop = $(this).offset().top;
            const windowHeight = $(window).height();
            const scrollTop = $(window).scrollTop();
            if (scrollTop + windowHeight > elementTop + 100) {
                $(this).addClass('reveal');
            }
        });
    };

    $(window).on('scroll', revealElements);
    
    // 5. Active Link Highlighting
    const highlightActiveLink = () => {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        
        // Desktop Menu
        $('.xl\\:flex a').each(function() {
            const href = $(this).attr('href');
            if (href === currentPath) {
                $(this).addClass('text-primary font-bold');
            } else {
                $(this).removeClass('text-primary font-bold');
            }
        });

        // Mobile Menu
        $('#mobile-menu a').each(function() {
            const href = $(this).attr('href');
            if (href === currentPath) {
                $(this).addClass('text-primary font-bold');
            } else {
                $(this).removeClass('text-primary font-bold');
            }
        });
    };

    // Initialize

    initRTL();
    revealElements();
    highlightActiveLink();
});
