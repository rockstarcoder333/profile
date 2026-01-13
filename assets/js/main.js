(function($){
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Mobile Menu 
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
    
    
    
    // Parallaxmouse js
    
    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        };
    };
    parallaxMouse();
    
    
    //===== Progress Bar
    
    if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width',percent+'%');
        },{accY: 0});
    }
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    

    
    //===== 
    
}(jQuery));

$(document).ready(function() {

        $('a.btn-gallery').on('click', function(event) {
            event.preventDefault();
            
            var gallery = $(this).attr('href');

            $(gallery).magnificPopup({
        delegate: 'a',
                type:'image',
                gallery: {
                    enabled: true
                }
            }).magnificPopup('open');
        });

        });

var slide = document.getElementsByClassName("slide");
        var indicator = document.getElementById("indicator");
        var dots = document.getElementsByClassName("dots");
        var autoplay = document.getElementsByClassName("container")[0].getAttribute("data-autoplay");
        var l = slide.length;
        var interval = 5000;
        var set;

        window.onload = function () {
            initialize();
            // slide[0].style.opacity = "1";
            for (var j = 0; j < l; j++) {
                indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
            }

            dots[0].style.background = "#696969";

        }

        function initialize() {
            if (autoplay === "true")
                set = setInterval(function () { next(); }, interval);
        }



        function change(index) {
            clearInterval(set);
            count = index;
            for (var j = 0; j < l; j++) {
                slide[j].style.opacity = "0";
                dots[j].style.background = "#bdbdbd";
            }
            slide[count].style.opacity = "1";
            dots[count].style.background = "#696969";


        }

        var count = 0;
        function next() {
            clearInterval(set);
            slide[count].style.opacity = "0";
            count++;
            for (var j = 0; j < l; j++) {
                dots[j].style.background = "#bdbdbd";
            }


            if (count == l) {
                count = 0;
                slide[count].style.opacity = "1";
                dots[count].style.background = "#696969";

            } else {
                slide[count].style.opacity = "1";
                dots[count].style.background = "#696969";
            }
            initialize()
        }


        function prev() {
            clearInterval(set);
            slide[count].style.opacity = "0";
            for (var j = 0; j < l; j++) {
                dots[j].style.background = "#bdbdbd";
            }
            count--;

            if (count == -1) {
                count = l - 1;
                slide[count].style.opacity = "1";
                dots[count].style.background = "#696969";

            } else {
                slide[count].style.opacity = "1";
                dots[count].style.background = "#696969";
            }
            initialize()
        }

function modalAnimation(animation) {
          $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + animation + ' animated');
        };
        $('.modalAnimate').on('show.bs.modal', function (e) {
          var anim = $(this).attr('data-animation-in');
          modalAnimation(anim);
        });
        $('.modalAnimate').on('hide.bs.modal', function (e) {
          var anim = $(this).attr('data-animation-out');
          modalAnimation(anim);
        });

$('.product-img--main')
        // tile mouse actions
        .on('mouseover', function(){
          $(this).children('.product-img--main__image').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
        })
        .on('mouseout', function(){
          $(this).children('.product-img--main__image').css({'transform': 'scale(1)'});
        })
        .on('mousemove', function(e){
          $(this).children('.product-img--main__image').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
        })
        // tiles set up
        .each(function(){
          $(this)
            // add a image container
            .append('<div class="product-img--main__image"></div>')
            // set up a background image for each tile based on data-image attribute
            .children('.product-img--main__image').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
        });


/* --------------------------   Chatboat Code   ------------------ */

jQuery(document).ready(function($) {
    jQuery(document).on('click', '.iconInner', function(e) {
        jQuery(this).parents('.botIcon').addClass('showBotSubject');
        $("[name='msg']").focus();
    });

    jQuery(document).on('click', '.closeBtn, .chat_close_icon', function(e) {
        jQuery(this).parents('.botIcon').removeClass('showBotSubject');
        jQuery(this).parents('.botIcon').removeClass('showMessenger');
    });

    jQuery(document).on('submit', '#botSubject', function(e) {
        e.preventDefault();

        jQuery(this).parents('.botIcon').removeClass('showBotSubject');
        jQuery(this).parents('.botIcon').addClass('showMessenger');
    });
    
    /* Chatboat Code */
    $(document).on("submit", "#messenger", function(e) {
        e.preventDefault();

        var val = $("[name=msg]").val().toLowerCase();
        var mainval = $("[name=msg]").val();
        name = '';
        nowtime = new Date();
        nowhoue = nowtime.getHours();

        function userMsg(msg) {
            $('.Messages_list').append('<div class="msg user"><span class="avtr"><figure style="background-image: url(https://www.shareicon.net/data/256x256/2015/09/24/106427_man_512x512.png)"></figure></span><span class="responsText">' + mainval + '</span></div>');
        };
        function appendMsg(msg) {
            $('.Messages_list').append('<div class="msg"><span class="avtr"><figure style="background-image: url(assets/images/banner/1.jpg)"></figure></span><span class="responsText">' + msg + '</span></div>');
            $("[name='msg']").val("");
        };


        userMsg(mainval);
        if( val.indexOf("hello") > -1 || val.indexOf("hi") > -1 || val.indexOf("good morning") > -1 || val.indexOf("good afternoon") > -1 || val.indexOf("good evening") > -1 || val.indexOf("good night") > -1 ) {
            if(nowhoue >= 12 && nowhoue <= 16) {
                appendMsg('good afternoon');
            } else if(nowhoue >= 10 && nowhoue <= 12) {
                appendMsg('hi');
            } else if(nowhoue >= 0 && nowhoue <= 10) {
                appendMsg('good morning');
            } else {
                appendMsg('good evening');
            }

            appendMsg("please contact me on Telegram. Username is superstar0808. thanks!");

        } 
        else {
            saybye();
        }
        // else if( val.indexOf("i have problem with") > -1) {
        //     if (val.indexOf("girlfriend") > -1 || val.indexOf("gf") > -1) {

        //         appendMsg("take out your girlfriend, for dinner or movie.");
        //         appendMsg("is it helpful? (yes/no)");

        //     } else if (val.indexOf("boyfriend") > -1 || val.indexOf("bf") > -1) {
        //         appendMsg("bye something for him.");
        //         appendMsg("is it helpful? (yes/no)");
        //     } else {
        //         appendMsg("sorry, i'm not able to get you point, please ask something else.");
        //     }
        // } else if( val.indexOf("yes") > -1) {

        //     var nowtime = new Date();
        //     var nowhoue = nowtime.getHours();
        //     appendMsg("it's my pleaser that i can help you");

        //     saybye();
        // } else if( val.indexOf("no") > -1) {

        //     var nowtime = new Date();
        //     var nowhoue = nowtime.getHours();
        //     appendMsg("it's my bad that i can't able to help you. please try letter");

        //     saybye();
        // } else if( val.indexOf("my name is ") > -1 || val.indexOf("i am ") > -1 || val.indexOf("i'm ") > -1 || val.split(" ").length < 2 ) {/*|| mainval != ""*/
        //     // var name = "";
        //     if(val.indexOf("my name is") > -1) {
        //         name = val.replace("my name is", "");
        //     }

        //     else if(val.indexOf("i am") > -1) {
        //         name = val.replace("i am", "");
        //     }

        //     else if(val.indexOf("i'm") > -1) {
        //         name = val.replace("i'm", "");
        //     }

        //     else {
        //         name = mainval;
        //     }

        //     // appendMsg("hi " + name + ", how can i help you?");
        //     appendMsg("hi " + name + ", how can i help you?");
        // } else {
        //     appendMsg("sorry i'm not able to understand what do you want to say");
        // }

        function saybye() {
            if (nowhoue <= 10) {
                appendMsg(" have nice day! :)");
            } else if (nowhoue >= 11 || nowhoue <= 20) {
                appendMsg(" bye!");
            } else {
                appendMsg(" good night!");
            }
        }

        var lastMsg = $('.Messages_list').find('.msg').last().offset().top;
        $('.Messages').animate({scrollTop: lastMsg}, 'slow');
    });
    /* Chatboat Code */
})