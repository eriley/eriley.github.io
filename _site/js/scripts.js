$(function(){
     $(window).resize(function(){
         if($(this).width() >= 767){
             $.backstretch("/img/bg.png", {speed: 150});
         }
      })
      .resize();//trigger resize on page load
});
