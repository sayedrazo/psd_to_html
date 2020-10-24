(function($){
    "use strict";

     $(document).ready(function($){
        $('.owl-carousel').owlCarousel({
            autoplay: false,
            center: true,
            loop: true,
            nav: true,
            items:1,
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag:false,
            touchDrag:false,
        });
        
        new WOW().init();

        $(".owl-carousel").on("translate.owl.carousel", function(){
           $(".single-slide-item h2,.single-slide-item p").removeClass("animated fadeInUp").css("opacity","0");
           $(".single-slide-item .factorian-btn").removeClass("animated pulse").css("opacity","0");
        });
        $(".owl-carousel").on("translated.owl.carousel", function(){
          $(".single-slide-item h2, .single-slide-item p").addClass("animated fadeInUp").css("opacity","1");
          $(".single-slide-item .factorian-btn").addClass("animated pulse").css("opacity","1");
        });

        $("ul#navigation").slicknav({
            prependeTo: ".responsive-menu-wrep"
        });
        

        $('.gallery-lightbox').magnificPopup({
            type:'image',
            preloader: true,
            gallery:{
                enabled:true,
            }

        });
        


       
    });

        // slicknav
        $(".main-menu").slicknav({
            'prependTo' : ".responsive-menu-wrep"
        });
   
    

        jQuery(window).on("load",function(){
            jQuery(".factorian-slide-preloder-wrapper").fadeOut(1000);
        });


    // jQuery(window).load(function(){
    //     $(".factorian-slide-preloder-wrapper").fadeOut(1000);

        
        
    // });
   
         
            

}(jQuery));



