// slow navigation
$(document).ready(function() {

    //навигация menu - плавный скроллинг к якорю
    $("#menu").on("click","a", function (event) {
        event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке
        var id  = $(this).attr('href'), //забираем идентификатор бока с атрибута href   
            top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь
        $('body,html').animate({scrollTop: top}, 1500); //анимируем переход на расстояние - top за 1500 мс
    });


    $(".ref-link").on("click", function (event) { //навигация link - плавный скроллинг к якорю     
        event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке
        var id  = $(this).attr('href'), //забираем идентификатор бока с атрибута href
            top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь
        $('body,html').animate({scrollTop: top}, 1500); //анимируем переход на расстояние - top за 1500 мс
    });
});

// hide menu on top - add/remove class hide-menu
jQuery(function($) {
        $(window).scroll(function(){
            if($(this).scrollTop()>100){
                $('#menu').addClass('hide-menu');
            }
            else if ($(this).scrollTop()<100){
                $('#menu').removeClass('hide-menu');
            }
        });
    });