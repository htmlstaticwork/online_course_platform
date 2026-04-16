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

    // 3. Theme Toggle Logic (Dark/Light)
    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            $('html').addClass('dark');
            $('.theme-toggle-icon').removeClass('fa-moon').addClass('fa-sun');
        } else {
            $('html').removeClass('dark');
            $('.theme-toggle-icon').removeClass('fa-sun').addClass('fa-moon');
        }
    };

    $('.theme-toggle').on('click', function() {
        const isDark = $('html').hasClass('dark');
        if (isDark) {
            $('html').removeClass('dark');
            localStorage.setItem('theme', 'light');
            $('.theme-toggle-icon').removeClass('fa-sun').addClass('fa-moon');
        } else {
            $('html').addClass('dark');
            localStorage.setItem('theme', 'dark');
            $('.theme-toggle-icon').removeClass('fa-moon').addClass('fa-sun');
        }
    });

    // 4. Mobile Menu Toggle - Enhanced Version
    $('.hamburger-btn').on('click', function() {
        const menu = $('#mobile-menu');
        const isOpen = !menu.hasClass('hidden');
        
        if (isOpen) {
            menu.addClass('opacity-0 scale-95').delay(300).queue(function(next) {
                $(this).addClass('hidden');
                $('body').removeClass('overflow-hidden');
                next();
            });
        } else {
            menu.removeClass('hidden').removeClass('opacity-0 scale-95');
            $('body').addClass('overflow-hidden');
        }
        
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

    // Close menu when clicking links
    $('#mobile-menu a').on('click', function() {
        $('#mobile-menu').addClass('hidden opacity-0 scale-95');
        $('body').removeClass('overflow-hidden');
        $('.hamburger-btn i').addClass('fa-bars').removeClass('fa-times');
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
    initTheme();
    revealElements();
    highlightActiveLink();
});
