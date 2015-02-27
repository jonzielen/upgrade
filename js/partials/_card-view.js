$(function() {
        /* Sliding Side Panel [[[NOT USING]]] */
        $('.slide-button').on('click',function() {
            $('.slide-button').animate({left:'55'},500);
            $('.side-panel').animate({width:'0',padding:'0'},500, function() {
                $(this).removeClass('col-xs-2').hide();
            });
            $('.card-container').animate({width: '98%'},500, function() {
                $(this).removeClass('col-xs-2').addClass('col-xs-12');
            });
        });
        
        /* Flipping Card Buttons */
        $('.flipper').hover(function(){
            $(this).children('.fa-map-marker').toggleClass('fa-inverse').toggleClass('fa-pulse');
            $(this).children('.fa-square-o').toggleClass('fa-square').toggleClass('text-danger');
        }).on('click',function() {
            $(this).parents('.card').css('transform','rotateY(180deg)');
        });
        
        $('.flipper-back').hover(function(){
            $(this).children('.fa-info').toggleClass('fa-inverse').toggleClass('fa-pulse');
            $(this).children('.fa-square-o').toggleClass('fa-square').toggleClass('text-danger');
        }).on('click',function() {
            $(this).parents('.card').css('transform','rotateY(0deg)');
        });
        
        
        /* Scrolling Text (for long card information) */
        var scrollText = true;
        $('.card .information dd').hover(function() {
            if ($(this).text().length > 35 && scrollText) {
                scrollText = false;
                $(this).animate({'text-indent':'-80px'},1000, function(){scrollText=true});
            };
        },function() {
            $(this).stop().animate({'text-indent':'0'},500, function(){scrollText=true});
        });
        
    });