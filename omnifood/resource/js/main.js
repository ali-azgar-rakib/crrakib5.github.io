$(document).ready(function () {
    $('.js-feature-section').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky').fadeIn(2000);
        } else {
            $('nav').removeClass('sticky');
        }
    }, { offset: '60px' });

    $('#scroll-to-plan').click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $('#plan').offset().top }, 1000)
    });
    $('#scroll-to-feature').click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $('#feature').offset().top }, 500)
    });
    $('#scroll-to-step').click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $('#steps').offset().top }, 1000);
    });
    $('#scroll-to-cities').click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $('#cities').offset().top }, 1000);
    });
    $('#scroll-to-plan').click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $('#plan').offset().top }, 1000);
    });

    // mobile nav 

    $('.mobile-nav').click(function () {
        var nav = $('.main-nav');
        var icon = $('.mobile-nav i')
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    });
});
