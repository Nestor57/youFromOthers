



function presentBodyBoxes(){

s=1;

setTimeout(function(){

var boxInterval=setInterval(function(){

$('#bodyBox'+s).css({"animation":'customBoxAnim 0.7s'});
$('#bodyBox'+s).css({"-webkit-animation":'customBoxAnim 0.7s'});

s++;
!$('bodyBox'+s) ? clearInterval(boxInterval) : null;

},200);

},600);


}


function presentHome(){

$('.landPageBlockFoto').css({"animation":'clicked 1s'});
$('.landPageBlockFoto').css({"-webkit-animation":'clicked 1s'});

setTimeout(function(){

$('.ripple').css({"display": "block"});
$('.ripple').css({"animation": "ripple-animation 2s"});
$('.ripple').css({"-webkit-animation": "ripple-animation 2s"});

setTimeout(function(){
  $('.ripple').css({"display": "none"});
},1950);

$('.blackBack').animate({opacity:'0'},800,function(){$('.blackBack').css({"position": 'relative'});});

$('.landPageBlockFoto').animate({top:'0'},800,function(){

$('.landPageBlockFoto').css({"position": 'relative'});

  i=1;
var intervalForBlock=setInterval(function(){

$('#startBlock-'+i).animate({opacity:'1'},600);
      $('.landPageBlockFoto').css({"animation":'none'});
$('.landPageBlockFoto').css({"-webkit-animation":'none'});
  i<=5 ? $('#startWords'+i).animate({opacity:'1'},400) :null;

i++;
i>6 ? function (){clearInterval(intervalForBlock);

      $('.bottomPart').animate({opacity:'1'},800);
}()
:null;
},200);

});
},800);

}
$(function(){

  (function () {
   
  
  })();
});

(function() {

var tabSelected=1;

  var app = angular.module('helloPage', ["ngAnimate",'ui.router'])    

  .config(['$urlRouterProvider','$stateProvider','$animateProvider',function($urlRouterProvider,$stateProvider,$animateProvider){
$urlRouterProvider.otherwise('landingPageEng');

$stateProvider
  .state('landingPage',{
    url:'/landingPage',
    templateUrl:'pages/ru/landingPage.htm'
  })
///---страницы на английском
  .state('landingPageEng',{
    url:'/landingPageEng',
    templateUrl:'pages/eng/landingPage.htm'
  })

   .state('portfolio',{
    url:'/portfolio',
    templateUrl:'pages/eng/portfolio.html'
  })

  .state('contacts',{
    url:'/contacts',
    templateUrl:'pages/eng/contacts.htm'
  });

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
  
$('.navbar').css('opacity')==0&&tabSelected!=1 ? 

  $('.navbar').animate({opacity:'1',top:'0'},600)
  :null;

$('.navbar').height()>56 ?
  $(".navbar-toggle").trigger( "click" )
  :null;        

}

app.controller('basicSkillCtrl',['$scope','$timeout', function($scope,$timeout){

checkNavBar();
var init = function () {
 
  tabSelected=2;

  checkNavBar();
};

var $people=$('#people');

//---запрос на сервер на ajax----
$.ajax({

  type:'GET',
  url:'http://rest.learncode.academy/api/johnbob/friends',
  success: function(people){

    $.each(people, function(i,people){

$people.append('<li>name: '+ people.name+'<li>');
if (i === 10){return false}
    });
  }
});
//------------------------------

presentBodyBoxes();

}]);


app.controller('angularCtrl',['$scope','$timeout','$http', function($scope,$timeout,$http){

checkNavBar();

var tabSel;

var init = function () {
 
  tabSelected=2;

  checkNavBar();
};

init();

var containerHeight;

var peopleOnAngular;

$timeout(function () {

     $('#repeatingForm').css({'height':($('.repForm').height())*4+38});
      //alert($('.repForm').height());
    }, 1000);  

//alert($('.repForm').height());

$http.get('http://rest.learncode.academy/api/johnbob/friends')
.success(function(data
  ){
 $scope.peopleOnAngular=data;
}).error(function(){
 //alert('an unexpected error ocurred!');
});

$scope.nameForPer='';
$scope.ageForPer='';

$scope.postNewPerson=function(){

  $http.post('http://rest.learncode.academy/api/johnbob/friends',{name:$scope.nameForPer,age:$scope.ageForPer})
  .success(function(data
  ){

}).error(function(){
 //alert('an unexpected error ocurred!');
});

$scope.nameForPer='';
$scope.ageForPer='';
}

presentBodyBoxes();
}]);


app.controller('practiceCtrl',['$scope','$timeout', function($scope,$timeout){

checkNavBar();

var tabSel;

var init = function () {
 
  tabSelected=2;

  checkNavBar();
};

init();

var containerHeight;
}]);

app.controller('TabController', function(){

checkNavBar();

var margin=$(window).width()*0.5-$('.nav.navbar-nav').width()*0.5;


$('.nav.navbar-nav').css('margin-left',margin);

    this.setTab = function(newValue){
      this.tab = newValue;
      tabSelected=newValue;       
        
        setTimeout(presentHome,700);
    };

    this.isSet = function(tabName){

      return this.tab === tabName;
     
    };
});

  app.controller('landPageCtrl', function(){

setTimeout(presentHome,700);

tabSelected=1;

if ($('.navbar').css('opacity')==1){
  $('.navbar').animate({opacity:'0',top:'0'},600);
}
    this.tab = 1;  



  });

  app.controller('GalleryController', function(){

//tabSelected=7;

checkNavBar();

     this.imageGalary=imageGalary;
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });


app.directive('text1',function(){

  return{

restrict:'E',
templateUrl:'text1.html'
  };
});

  $(document).ready(function(){
    
//--присеты 



checkNavBar();

           $('li img').on('click',function(){
                var src = $(this).attr('src');
                var img = '<img src="' + src + '" class="img-responsive"/>';
                $('#myModal').modal();
                $('#myModal').on('shown.bs.modal', function(){
                    $('#myModal .modal-body').html(img);                    
        
                });
                $('#myModal').on('hidden.bs.modal', function(){
                    $('#myModal .modal-body').html('');
                });
           }); 



        });


  var programs = [{
      name: 'Интересные факты о чтении',
    text:"1. М. Горький читал со скоростью четыре тысячи слов в минуту.2. Сталин читал по 400 страниц в день, считая это минимальной нормой.3. Т. Эдисон читал сразу 2–3 строки, запоминая текст чуть ли не страницами благодаря максимальному сосредоточению.4. При быстром чтении утомляемость глаз меньше, чем при медленном.5. 95% людей читают очень медленно — 180–220 слов в минуту (1 страницу за 1,5–2 минуты).6. Уровень понимания при традиционном чтении составляет 60%, при быстром — 80%.7. В течение часа глаза читающего 57 минут зафиксированы на тексте, то есть находятся в относительном покое.8. Бальзак прочитывал роман в двести страниц за полчаса9. При чтении глаза читающего, глядя на разные буквы, передают разные изображения, а мозг объединяет их в одну картинку.10. Некто Э. Гаон дословно помнил 2500 прочитанных им книг.11.Глаза человека со средними навыками чтения делают на одной книжной строке 12–16 остановок, читающего быстро - 2–4 остановки.12. Н.А. Рубакин прочитал 250 тысяч книг.13. У школьников происходит 20 регрессивных движений на одну строку, у студентов — 15.14. Наполеон читал со скоростью две тысячи слов в минуту.",
      images: [
        "image1.jpg",
        "image2.jpg"
      ],

      tags:'#silence #psychology #психология #тишина',

    }, {
      name: 'ПРАВИЛА ВЕДЕНИЯ ПЕРЕГОВОРОВ ДОНАЛЬДА ТРАМПА',
    text:"1. Всегда имейте представление о том, что вы делаете. Кажется, это так просто, но я не раз сталкивался с ситуациями, когда другая сторона понятия не имела, о чем идет речь. В таких случаях я уже заранее знал, что успех мне обеспечен, причем без особых усилий – только лишь благодаря их неподготовленности к встрече. Мой отец частенько говорил мне: «Всегда старайся знать все, что возможно, о том, что ты делаешь». Он был абсолютно прав, как и я, советуя вам то- же самое. Прислушайтесь к этому совету.2. Помните, чтобы прикидываться дурачком, надо быть очень умным. Это поможет вам распознать слабые стороны партнеров и понять, чего они не знают. Кроме того, вы сразу почувствуете, когда они попытаются принудить вас принять их условия.3. Держите их в напряжении. То, чего они не знают, не может вам повредить, а вот для вас это выгодное положение. Знание - это сила, так что приберегите ее для себя.4. Доверяйте своей интуиции. При сделках сплошь и рядом бывают ситуации, когда нельзя четко разделить – где черное, а где белое, поэтому важно доверять своему инстинкту. Вы всегда будете на коне, если сможете совместить nредварительную подготовку с умением прислушиваться к своей интуиции.5. Не ограничивайтесь своими ожиданиями. В переговорах не существует установленного формата, иногда в самый разгар беседы я могу поменять направление, если мне в голову неожиданно приходит новая интересная мысль. Оставайтесь гибкими и открытыми к новым идеям, даже если думаете, что четко знаете, чего вам нужно достичь. Такой подход открыл мне возможности, о которых я даже и не думал.6. Умейте вовремя сказать «Нет». Сейчас я могу делать это на автомате, но знаю, что многим это дается нелегко.7. Будьте терпеливы. Результаты некоторых своих сделок я смог увидеть только через десятки лет, но, поверьте, ожидания того стоили. Но для начала убедитесь, что задуманный проект стоит ваших ожиданий.8. Чтобы ускорить ход переговоров, сохраняйте безразличие. Таким образом, вы сможете понять, насколько заинтересована другая сторона.9. Помните: самые успешные переговоры – это те, когда в выигрыше остаются все. Вот идеальный расклад, к которому стоит стремиться. Ведь в этом случае вы закладываете фундамент для будущих сделок с людьми, которые понимают суть целостности.Помните, ведение переговоров- это искусство. А для того, чтобы чего-то достичь в любом виде искусства, требуется дисциплина, отработанная техника и немного фантазии. Не будьте ординарным переговорщиком, раз вы можете стать экстраординарным. Посвящайте определенное время этому виду искусства, и награда не заставит себя долго ждать. Успехов! ",

         images: [
        "image1.jpg",
        "image2.jpg"
      ],

tags:'#silence #psychology #психология #тишина',

    }, {
       name: 'Как снимают рекламу',
    text:"Мороженое Мороженое никогда не снимают вживую, под софитами оно моментально тает — это всегда пластиковая, силиконовая или гелевая масса. Ей придают нужный цвет, фактуру, делают шарик пористым и шероховатым. Безупречных вафельных рожков тоже не найти — везде или кусочек оторван, или цвет неровный, так что приходится их тоже лепить. А чтобы с мороженого не стекало варенье или мед, прокладывается тонкий слой полиэтилена.СупыДля рекламы супов в пакетиках варят настоящий суп. Но если просто налить его в тарелку и сфотографировать, не будет ничего видно, все ингредиенты утонут. Поэтому на дно кладется слой прозрачного желатина, сверху наливается бульон или обычная вода, а потом уже аккуратно выкладывается капуста, слегка обжаренная ветчина, маслины, петрушка и овощи. Главное — создать впечатление богатого набора витаминов.КурицаКуриные ножки на фото должны быть не вареными и не жареными. Сырыми им выглядеть тоже нельзя — покупатель должен сразу понять, что их готовить не нужно, только разогреть. Это очень сложная задача. Если ножки пожарить, они скукожатся, потемнеют, а сбоку будут приплюснутыми. Поэтому куриные ножки сушат строительным феном:он поджаривает, но не деформирует мясо. Курица получается золотистой, как надо.КотлетыКотлеты поливают лаком для волос. Это нужно для блеска, которого иначе добиться нельзя. Если их пожарить, масло впитается уже через 5 минут.ЛапшаЧтобы продукт имел свежий вид, его нужно как можно меньше подвергать термообработке. Лапшу, варят 2—3 минуты, иначе она размокает и разваливается. Особенно быстро теряет форму отечественная лапша, поэтому дажедля рекламы российских макарон фотографируют импортные.ПельмениПельмени — кошмар каждого фуд-стилиста. Их приходится лепить вручную. Мясо добавлять нельзя, потому что оно будет просвечивать темными пятнами. В рекламе пельмени состоят из теста и соли. Поэтому такой ровный цвет. Их еще можно подрумянить и увлажнить, чтобы аппетитнее было.Вместо сметаны фотографируют клей ПВА: он льется густо, медленно и тяжело — идеально для рекламы. Его же можно использовать для съемки молока.СоусыСоусы красятся пищевыми красителями. Но нельзя сразу добавить краску в соус, он тогда свернется и будет комками.Нужно сначала развести краситель со спиртом, а потом уже смешать с соусом. Если получается слишком жидко, можно сделать основу для соуса из желатина.КашаЖелатин вообще универсальное и очень полезное средство — желатин часто добавляют в пюре и кашу, чтобы они загустели, и можно было делать красивые завитки. Также в качестве загустителей можно использовать муку и крахмал.ПивоПиво чаще снимают в рекламных роликах, чем фотографируют. Но в обоих случаях пивная пена делается из стирального порошка или хозяйственных средств, которые взбиваются венчиком. Вместо самого пива наливается чай или сок.МясоКогда нужно фотографировать мясо, его обжаривают совсем чуть-чуть, только для цвета. Баранину часто играет говядина — внешне они почти не различимы. А вот свинина должна быть светлее и розовее, мы это всегда подчеркиваем, чтобы можно было узнать ее издалека. Подкрашивать мясо можно соевым соусом, некоторые фуд-стилисты предпочитают йод, мазут или солидол.СосискиСосиски и сардельки снимаются сырыми или слегка подсушенными строительным феном. А вот овощи и фрукты в рекламе замороженных смесей всегда самые свежие.ЛазаньяСамый главный ужас — это съемка лазаньи. Приходится слой за слоем накладывать друг на друга ингредиенты, сбоку засовывать их в форму, потом разрезать и фотографировать срез, пока все не обвисло.Это очень долго, сложно и совсем не похоже на содержимое коробки. ",
      images: [
        "image1.jpg",
        "image2.jpg"
      ],

   tags:'#silence #psychology #психология #тишина',   
    }];
})();



var traningForms=["Мини-лекции","Индивидуальная работа","Опрос по кругу","Категоризация со стикерами", "Работа в парах","Трейд-шоу","Блиц-опрос","Разбор кейсов в малых группах","Ролевые игры: аквариум,тройки", "Анализ видеофрагментов", "Многозадачные подгруппы"];
$('#modal').on('show.bs.modal', function () {
       
});

