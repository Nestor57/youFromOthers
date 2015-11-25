/*------------------
//
//  main app js file
//
//---------------*/
(function() {
  var tabSelected=1;

  var app = angular.module('helloPage', ["ngAnimate",'ui.router'])

  .config(['$urlRouterProvider','$stateProvider','$animateProvider',function($urlRouterProvider,$stateProvider,$animateProvider){
    $urlRouterProvider.otherwise('mainPage');

    $stateProvider
    .state('mainPage',{
      url:'/mainPage',
      templateUrl:'pages/ru/mainPage.htm'
    })
    .state('utoPrograms',{
      url:'/utoPrograms',
      templateUrl:'pages/ru/utoPrograms.htm'
    })
    .state('utoTools',{
      url:'/utoTools',
      templateUrl:'pages/ru/utoTools.htm'
    })
    .state('utoAnswers',{
      url:'/utoAnswers',
      templateUrl:'pages/ru/utoAnswers.htm'
    })
    .state('utoResultsPactis',{
      url:'/utoResultsPactis',
      templateUrl:'pages/ru/utoResultsPactis.htm'
    })
    .state('utoResultsOrganis',{
      url:'/utoResultsOrganis',
      templateUrl:'pages/ru/utoResultsOrganis.htm'
    })
    ///---страницы на английском
    .state('utoSkills',{
      url:'/utoSkills',
      templateUrl:'pages/ru/utoSkills.htm'
    })
    .state('utoTrainings',{
      url:'/utoTrainings',
      templateUrl:'pages/ru/utoTrainings.htm'
    })
    .state('invitation',{
      url:'/invitation',
      templateUrl:'pages/ru/invitation.htm'
    })
  }]);

  app.controller('pageController', function(){
    tabSelected=5;
    checkNavBar();

    this.programs = programs;
    this.startWords = startWords;
    this.businesTasks = businesTasks;
    this.businesParts = businesParts;
    this.practic= practic;
    this.future= future;
    this.traningForms= traningForms;
    this.comments= comments;
  });

  function checkNavBar(){

    if ($('.navbar').css('opacity')==0&&tabSelected!=1){
      $('.navbar').animate({opacity:'1',top:'0'},600,function(){
        $('.navbar').css('display','block');
      });
    }else{
      if (tabSelected==1)
      $('.navbar').animate({opacity:'0',top:'0'},600,function(){
        $('.navbar').css('display','none');
      });
    }

    $('.navbar').height()>56 ?
    $(".navbar-toggle").trigger( "click" )
    :null;
  }

  app.controller('basicSkillCtrl',['$scope','$timeout', function($scope,$timeout){
    checkNavBar();
    var tabSel;
    var init = function () {
      tabSelected=2;
      checkNavBar();
    };
    init();
  }]);

  app.controller('angularCtrl',['$scope','$timeout','$http', function($scope,$timeout,$http){
    checkNavBar();
    var tabSel;
    var init = function () {
      tabSelected=2;
      checkNavBar();
    };
    init();
  }]);

  app.controller('practiceCtrl',['$scope','$timeout', function($scope,$timeout){
    checkNavBar();
    var tabSel;
    var init = function () {
      tabSelected=2;
      checkNavBar();
    };
    init();
  }]);

  app.controller('TabController', function(){
    this.setTab = function(newValue){
      this.tab = newValue;
      tabSelected=newValue;
    };
    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  app.controller('landPageCtrl', ['$scope', function($scope,$timeout){
    TweenLite.set("#firstCentralBlock", {autoAlpha:0, marginBottom:100});

    angular.element(document).ready(function () {
      var timeLine = new TimelineLite();

      timeLine.to("#firstCentralBlock", 0.9, {autoAlpha:1, marginBottom:0});
      timeLine.to("#secondCentralBlock", 0.9, {autoAlpha:1,rotationX:0});
      timeLine.to("#thirdCentralBlock", 0.9, {autoAlpha:1,rotationX:0},'-=0.9');
      timeLine.to("#centralHeaderBlocks", 0.9, {autoAlpha:1});
      timeLine.to("#leftHeaderBlocks", 0.9, {autoAlpha:1});
      timeLine.to("#rightHeaderBlocks", 0.9, {autoAlpha:1},'-=0.9');

      TweenMax.fromTo(document.getElementById('toMainPart'), 0.7, {
        boxShadow: "0px 0px 0px 0px rgba(255,255,255,0.3)"
      }, {
        boxShadow: "0px 0px 20px 10px rgba(255,255,255,1)",
        repeat: -1,
        yoyo: true,
        ease: Linear.easeNone
      });
    });

    document.getElementById('toMainPart').onclick=function(){
      //  $(window).scrollTop($(window).height());
      var translate=-$(window).width();
      var timeLine = new TimelineLite();
      timeLine.set(document.getElementById('landPageBody'), {scale:0.6,display:'block'});

      //  timeLine.to(document.getElementById('landingScreen'),0.3, {scale:0.8});
      timeLine.to(document.getElementById('landingScreen'),0.4, {rotationY:-30, x:translate, ease: Power1.easeIn});
      timeLine.to(document.getElementById('landPageBody'),0.4, {scale:1, ease: Circ.easeOut},'-=0.2');

      timeLine.set(document.getElementById('practice'), {display:'none'});
      //  document.getElementById('practice').style.display='none'

      $('#slickID').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false
      });

      $('#gallaryId').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false
      });

      var drawSurface = Snap("#svg"),
          drawElement= $('#svg'),
          drawWidth = drawElement.width(),
          drawHeight = drawElement.height();
          var p1 = drawSurface.paper.path("M13,6 L8,9 M13,6 L8,3").attr({
              fill: "none",
    stroke: "#bada55",
    strokeLinecap:"round"
});
      var marker = p1.marker(0, 0, 26, 26, 13, 6);

      drawSurface.path("M"+drawWidth/2+" 0 Q 40 0 40 "+(drawHeight/2-40)).attr({
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 8,
        markerEnd:marker,
        strokeLinecap:"round"
      });

      drawSurface.path("M"+drawWidth/2+" "+drawHeight+" Q 40 "+drawHeight+" 40 "+drawHeight/2).attr({
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 8,
        markerEnd:marker,
        strokeLinecap:"round"
      });

      drawSurface.path("M"+drawWidth/2+" 0 Q "+(drawWidth-40)+" 0 "+(drawWidth-40)+" "+(drawHeight/2-40)).attr({
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 8,
        markerEnd:marker,
        strokeLinecap:"round"
      });

      drawSurface.path("M"+drawWidth/2+" "+drawHeight+" Q "+(drawWidth-40)+" "+drawHeight+" "+(drawWidth-40)+" "+drawHeight/2).attr({
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 8,
        markerEnd:marker,
        strokeLinecap:"round"
      });
    };

    document.getElementById('modalWindowClose').onclick=function(){
      document.getElementById('modalWindow').style.display='none';
    };
    /*
    document.getElementById('dialogConflict').onclick=function(){
    document.getElementById('modalWindow').style.display='block';

    var secondLeft=$(window).width()/3 -5;

    var thirdLeft=($(window).width()/3)*2 - 10;

    var timeLine = new TimelineLite();

    timeLine.to(document.getElementById('modalWindow'), 0.3, {opacity:1});
    timeLine.to($('.modalContainer'), 0, {display:'block'});
    timeLine.to($('.modalContainer'), 0.3, {top:0});
    timeLine.to(document.getElementById('modalContainerSecond'), 0.3, {left:secondLeft});
    timeLine.to(document.getElementById('modalContainerThird'), 0.3, {left:thirdLeft},'-=0.3');

    timeLine.play();
  };
  */
  document.getElementById('modalWindowMore').onclick=function(){

    var timeLine = new TimelineLite();

    timeLine.to(document.getElementById('modalContainerFirst'), 0.3, {rotationX:-30});
    timeLine.to(document.getElementById('modalContainerSecond'), 0.3, {rotationX:-30},'-=0.15');
    timeLine.to(document.getElementById('modalContainerThird'), 0.3, {rotationX:-30},'-=0.15');
    timeLine.to($('.modalContainerOverlap'), 0.8, {top:0});
    timeLine.to($('.modalContainer'), 0, {display:'none'});
    //timeLine.to(document.getElementById('mcoSecond'), 0.5, {left:secondLeft});
    //timeLine.to(document.getElementById('mcoThird'), 0.5, {left:thirdLeft},'-=0.5');
    timeLine.to(document.getElementById('mcoFirst'), 0.3, {rotationX:0});
    timeLine.to(document.getElementById('mcoSecond'), 0.3, {rotationX:0},'-=0.15');
    timeLine.to(document.getElementById('mcoThird'), 0.3, {rotationX:0},'-=0.15');

    timeLine.play();
  };

  $('#landPageBody').scroll(function(){
    var elementTopOffset=document.getElementById('practicOfApplicationHeader').getBoundingClientRect().top;
    var windowHeight=$(window).height()/2;

    if (elementTopOffset<windowHeight)  {
      var timeLine = new TimelineLite(),
      secondLeft=$(window).width()/3 -5,
      thirdLeft=($(window).width()/3)*2 - 10;

      timeLine.to(document.getElementById('communicationStepSecond'), 0.6, {left:secondLeft});
      timeLine.to(document.getElementById('communicationStepThird'), 0.6, {left:thirdLeft},'-=0.6');
    }
  });

  $(function() {
    FastClick.attach(document.body);
  });
  tabSelected=1;
  checkNavBar();
}]);

app.controller('sidePageCtrl', function(){
  tabSelected=1;
  checkNavBar();
});

})();
