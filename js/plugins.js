/* global $ , jQuery ,alert */

$(document).ready(function () {
    
    "use strict";
    //Nice Scroll
    $("html").niceScroll();
    
   $(".carousel").carousel({
       
       interval:6000
   }); 
    
     

      //Show color Option Div When Click On The Gear
    
    $(".gear-check").click(function () {
        
        $(".color-option").fadeToggle();
        
    });
         
    //change Theme Color On Click
    
    var colrLi=$(".color-option ul li");
    
    colrLi
    .eq(0).css("backgroundColor", "#E41B17").end()
    .eq(1).css("backgroundColor", "#f203ff").end()
    .eq(2).css("backgroundColor", "#009AFF").end()
    .eq(3).css("backgroundColor", "#e87e0c").end()
    .eq(4).css("backgroundColor", "#24a007");
    
    
    colrLi.click(function (){
      $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        //console.log($(this).attr("data-value"))
    });
    
    
    
    // Caching The Scroll Top Element
    
    var scrollButton = $("#scroll-top");
    
    $(window).on('scroll', function () { 
         "use strict";
      // function if shortcut
        
    $(this).scrollTop()>=700 ? scrollButton.show() : scrollButton.hide();
}); 
    
        // Click On Button To Scroll Top
         scrollButton.click(function (){
            $('html,body').animate({scrollTop:0}, 600); 
            // scrollButton.preventDefault();
         });
    
    //<span class="glyphicon glyphicon-menu-down"></span>
   $('.faq-questions .panel-heading').click(function(){
        $('.faq-questions span').css("display","none");
    });
});




//Loading Screen

//$(window).load(function(){ 
$(window).on('load',function () { 

   //Loading Elements 
$(".loading-overlay .spinner").fadeOut(2000,function(){
    
      //Show The Scroll
    $("body").css("overflow","auto");
    
    $(this).parent().fadeOut(2000,function(){
        
        $(this).remove();
      
        });    
    });
});  

