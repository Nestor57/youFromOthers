/*------------------
//
//  main app js file
//
//---------------*/
$(function() {
    function scaleBannerVideoSize(element) {
        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
    }

    $('.carousel').carousel({
        interval: 2500,
        wrap: true,
        keyboard: true
    })

    $('#gallaryId').carousel({
        interval: 2500,
        wrap: true,
        keyboard: true
    })

    $('#dialogCarousel').carousel({
        interval: 2500
    })
    if ($('.responsive-calendar').responsiveCalendar) {
        $('.responsive-calendar').responsiveCalendar();
    }

    var from, to, subject, text;
    $('#send_email').click(function() {
        to = $('#to').val();
        subject = $('#subject').val();

        text = $('#content').val();
        $('#message').text('Sending E-mail...Please wait');
        $.get('http://localhost:3000/send', {
            to: to,
            subject: subject,
            text: text
        }, function(data) {
            if (data == 'sent') {
                $('#message').empty().html('Email is been sent at ' + to + '.Please check inbox!');
            }

        });
    });
})

$(window).load(function() {
    $('#landingVideo').get(0).play()
    var corouselHeight = $('.maxHeightDiv').height()
    $('#mainCarousel').height(corouselHeight)
    $('#mainCarousel .carousel-inner').height(corouselHeight)
})


$('.toMainPartButton').click(function() {
    $('.landPageContainer').stop().animate({
        scrollTop: window.innerHeight
    }, '300', 'swing')
})

$('.nextSlideButton').click(function() {
    var scrollTargetIndex = parseInt(this.id);
    var scrollTarget = $('#contentBlock' + scrollTargetIndex);
    if (scrollTarget) {
        $('body,html,document').stop().animate({
            scrollTop: scrollTarget.offset().top
        }, '150', 'swing');
    }
})

$('.toMainPartButton').click(function() {
    var scrollTarget = $('#contentBlock1');
    $('body,html,document').stop().animate({
        scrollTop: scrollTarget.offset().top
    }, '150', 'swing');
})
