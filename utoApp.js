/*------------------
//
//  main app js file
//
//---------------*/
$(function() {
    function scaleVideoContainer() {
        var height = $(window).height() + 5;
        var unitHeight = parseInt(height) + 'px';
        $('.homepage-hero-module').css('height', unitHeight);
    }

    function initBannerVideoSize(element) {
        $(element).each(function() {
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });
        scaleBannerVideoSize(element);
    }

    function scaleBannerVideoSize(element) {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height() + 5,
            videoWidth,
            videoHeight;

        console.log(windowHeight);

        $(element).each(function() {
            var videoAspectRatio = $(this).data('height') / $(this).data('width');

            $(this).width(windowWidth);

            if (windowWidth < 1000) {
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({
                    'margin-top': 0,
                    'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
                });

                $(this).width(videoWidth).height(videoHeight);
            }
            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
        });
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

    var from, to, subject, text;
    $("#send_email").click(function() {
        to = $("#to").val();
        subject = $("#subject").val();

        text = $("#content").val();
        $("#message").text("Sending E-mail...Please wait");
        $.get("http://localhost:3000/send", {
            to: to,
            subject: subject,
            text: text
        }, function(data) {
            if (data == "sent") {
                $("#message").empty().html("Email is been sent at " + to + ".Please check inbox!");
            }

        });
    });

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });


})

$(window).load(function() {
    $('#landingVideo').get(0).play();
    $('#bodyVideo').get(0).play();
})

$('#landingVideo').load(function() {

})
var checkScroll = function(event) {
    debugger
    let scrollPos = document.body.scrollTop
    let nextPos = 0
    if (scrollPos < window.innerHeight) {
$(".landPageContainer").scroll(completeScroll);
    }
}.bind(this)

var completeScroll = function(event) {
    debugger
    let scrollPos = document.body.scrollTop
    let nextPos = 0
    if (scrollPos < window.innerHeight) {
        nextPos = window.innerHeight
        $("html, body").stop().animate({
            scrollTop: nextPos
        }, '300', 'swing')
        $(".landPageContainer").stop().animate({
            scrollTop: 0
        }, '300', 'swing')
        $(".landPageContainer").off('scroll', checkScroll)
    }
}.bind(this)

$(".toMainPartButton").click(function(){
  $(".landPageContainer").stop().animate({
      scrollTop: window.innerHeight
  }, '300', 'swing')
})

$(".landPageContainer").scroll(completeScroll);
