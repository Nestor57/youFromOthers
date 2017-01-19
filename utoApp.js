/*------------------
//  main app js file
//---------------*/
var $ = require("jquery");
require("bootstrap");
require("./libs/fastclick.js");
require("./libs/responsive-calendar/responsive-calendar.css");
require("./libs/responsive-calendar/responsive-calendar.js");
require("./node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./styles/utoStyle.css");
require("./styles/meStyle.css");
$(function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function(reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
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

    var subject, text;
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
var continuePlayingCarousels;
var presentMainPage = function() {
    var fadeIn = document.querySelector('#firstCentralBlock').animate({
        opacity: [0, 1]
    }, 300);
    fadeIn.onfinish = function() {
        document.querySelector('#firstCentralBlock').style.opacity = 1;
        var fadeIn2 = document.querySelector('#secondCentralBlock').animate({
            opacity: [0, 1]
        }, 150);

        fadeIn2.onfinish = function() {
            document.querySelector('#secondCentralBlock').style.opacity = 1;
            var fadeIn3 = document.querySelector('#thirdCentralBlock').animate({
                opacity: [0, 1]
            }, 150);

            fadeIn3.onfinish = function() {
                document.querySelector('#thirdCentralBlock').style.opacity = 1;
            };
        };
    }
}
document.onload = function() {
  presentMainPage();

};

setTimeout(function() {
        document.querySelector('#firstCentralBlock').style.opacity = 1;
        document.querySelector('#secondCentralBlock').style.opacity = 1;
        document.querySelector('#thirdCentralBlock').style.opacity = 1;
    }, 1500)
    //document.addEventListener('DOMContentLoaded', function() {
    // Animate in
    //    var corouselHeight = $('.maxHeightDiv').height()
    //    $('#mainCarousel').height(corouselHeight)
    //      $('#mainCarousel').css({top:($(window).height()/2-corouselHeight/2)})
    //  $('#mainCarousel .carousel-inner').height(corouselHeight)
    //})

$('.nextSlideButton').click(function() {
    var scrollTargetIndex = parseInt(this.id),
        scrollTarget = $('#contentBlock' + scrollTargetIndex)

    if (scrollTarget) {
        $('body,html,document').stop().animate({
            scrollTop: scrollTarget[0].offsetTop
        }, '150', 'swing')
    }
})

$('.toMainPartButton').click(function() {
        var scrollTarget = $('#contentBlock1')
        $('body,html,document').stop().animate({
            scrollTop: scrollTarget.offset().top
        }, '150', 'swing')
    })
    //make performance better pause the carousel
$(window).scroll(function() {
    $('#gallaryId').carousel('pause')
    $('#mainCarousel').carousel('pause')

    clearTimeout(continuePlayingCarousels);
    continuePlayingCarousels = setTimeout(function() {
        $('#gallaryId').carousel('cycle')
        $('#mainCarousel').carousel('cycle')
    }, 500)
})/*------------------
//  main app js file
//---------------*/
var $ = require("jquery");
require("bootstrap");
require("./libs/fastclick.js");
require("./libs/responsive-calendar/responsive-calendar.css");
require("./libs/responsive-calendar/responsive-calendar.js");
require("./node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./styles/utoStyle.css");
require("./styles/meStyle.css");
$(function() {
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

    var subject, text;
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
var continuePlayingCarousels;
var presentMainPage = function() {
    var fadeIn = document.querySelector('#firstCentralBlock').animate({
        opacity: [0, 1]
    }, 300);
    fadeIn.onfinish = function() {
        document.querySelector('#firstCentralBlock').style.opacity = 1;
        var fadeIn2 = document.querySelector('#secondCentralBlock').animate({
            opacity: [0, 1]
        }, 150);

        fadeIn2.onfinish = function() {
            document.querySelector('#secondCentralBlock').style.opacity = 1;
            var fadeIn3 = document.querySelector('#thirdCentralBlock').animate({
                opacity: [0, 1]
            }, 150);

            fadeIn3.onfinish = function() {
                document.querySelector('#thirdCentralBlock').style.opacity = 1;
            };
        };
    }
}
window.onload = function() {

};

setTimeout(function() {
        document.querySelector('#firstCentralBlock').style.opacity = 1;
        document.querySelector('#secondCentralBlock').style.opacity = 1;
        document.querySelector('#thirdCentralBlock').style.opacity = 1;
    }, 1500)
    //document.addEventListener('DOMContentLoaded', function() {
    // Animate in
    //    var corouselHeight = $('.maxHeightDiv').height()
    //    $('#mainCarousel').height(corouselHeight)
    //      $('#mainCarousel').css({top:($(window).height()/2-corouselHeight/2)})
    //  $('#mainCarousel .carousel-inner').height(corouselHeight)
    //})

$('.nextSlideButton').click(function() {
    var scrollTargetIndex = parseInt(this.id),
        scrollTarget = $('#contentBlock' + scrollTargetIndex)

    if (scrollTarget) {
        $('body,html,document').stop().animate({
            scrollTop: scrollTarget[0].offsetTop
        }, '150', 'swing')
    }
})

$('.toMainPartButton').click(function() {
        var scrollTarget = $('#contentBlock1')
        $('body,html,document').stop().animate({
            scrollTop: scrollTarget.offset().top
        }, '150', 'swing')
    })
    //make performance better pause the carousel
$(window).scroll(function() {
    $('#gallaryId').carousel('pause')
    $('#mainCarousel').carousel('pause')

    clearTimeout(continuePlayingCarousels);
    continuePlayingCarousels = setTimeout(function() {
        $('#gallaryId').carousel('cycle')
        $('#mainCarousel').carousel('cycle')
    }, 500)
})
