/*------------------
//  main app js file
//---------------*/
$(function() {
    function scaleBannerVideoSize(element) {
        $('.homepage-hero-module .video-container video').addClass('fadeIn animated')
    }

    $('#gallaryId').carousel({
        interval: 5000,
        wrap: true,
        keyboard: true
    })

    $('#mainCarousel').carousel({
        interval: 5000,
        wrap: true,
        keyboard: true
    })

    if ($('.responsive-calendar').responsiveCalendar) {
        $('.responsive-calendar').responsiveCalendar()
    }

    var from, to, subject, text
    $('#send_email').click(function() {
        to = $('#to').val()
        subject = $('#subject').val()

        text = $('#content').val()
        $('#message').text('Sending E-mail...Please wait')
        $.get('http://localhost:3000/send', {
            to: to,
            subject: subject,
            text: text
        }, function(data) {
            if (data == 'sent') {
                $('#message').empty().html('Email is been sent at ' + to + '.Please check inbox!')
            }
        })
    })
})

$(window).load(function() {
    $('#landingVideo').get(0).play()
        //    var corouselHeight = $('.maxHeightDiv').height()
        //    $('#mainCarousel').height(corouselHeight)
        //      $('#mainCarousel').css({top:($(window).height()/2-corouselHeight/2)})
        //  $('#mainCarousel .carousel-inner').height(corouselHeight)
})

$('.nextSlideButton').click(function() {
    var scrollTargetIndex = parseInt(this.id),
        scrollTarget = $('#contentBlock' + scrollTargetIndex)
//make performance better pause the carousel
    if (scrollTarget) {
        $('body,html,document').stop().animate({
            scrollTop: scrollTarget[0].offsetTop
        }, '150', 'swing')
    }
})

$('.toMainPartButton').click(function() {
  //make performance better pause the carousel

    var scrollTarget = $('#contentBlock1')
    $('body,html,document').stop().animate({
        scrollTop: scrollTarget.offset().top
    }, '150', 'swing')
})
