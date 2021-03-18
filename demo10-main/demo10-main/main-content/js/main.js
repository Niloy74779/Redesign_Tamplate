$(document).ready(function () {
    
    // smoth work for section
$(".main-menu li a").on('click',function(slow){
    if(this.hash !== " "){
        slow.preventDefault();
 
        var hash=this.hash;
        $("html, body").animate({
            scrollTop:$(hash).offset().top
        },1000,function(){
            window.location=hash;
        } 
        );
    }
 })
 $('[data-fancybox="gallery"]').fancybox({
	// Options will go here
});

// menu active jq
$(".main-menu li").click(function(){
   $(this).addClass("menu-active").siblings().removeClass("menu-active")
})


// slider jq
// slider jq
$(".owl-carousel").owlCarousel({
    loop:true,
    autoplayTimeout:3000,
    autoplay:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1200:{
            items:3,
        },
        1600:{
            items:6,
        },
        2000:{
            items:6,
        }
    }
});

$(".click-h1").click(function(){
  $(".toggle-me").slideToggle();
});

// jq madal video 
$(".js-modal-btn").modalVideo();
// jquery counterup plagin 
$('.counter').counterUp({
    delay: 10,
    time: 4000
});

//   serch option jq 

$(".navbar-serch").click(function(){
    $(".serch-option").toggle();
  });

  // scroll top btn jq
  $(".top").click(function(){
    $("html,body").animate({
        scrollTop:0
    },3000)
 });

 $(window).scroll(function(){
    var ourwindow=$(this).scrollTop();
 
    if(ourwindow<200){
     $(".top").fadeOut();
     }
    else{
      $(".top").fadeIn();
    }
 // nav bar jq
    if(ourwindow>100){
        $("nav").addClass("sticky-menu");
    }
    else{ 
        $("nav").removeClass("sticky-menu")
    }
 
 });

 $('[data-fancybox="glarry"]').fancybox({
    
    thumbs : {
        autoStart : true
      }
  });

//  wow js for animation
 
new WOW().init();

$('.carousel').carousel({
          
  })

});
var webloder=document.querySelector(".loder");
function siteloder(){
    webloder.style.display="none";
}
alert("hey do you know that?this is web tamplate Created By developer jahed");




