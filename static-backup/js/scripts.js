$(function(){
     $(window).resize(function(){
         if($(this).width() >= 767){
             $.backstretch("bg.png", {speed: 150});
         }
      })
      .resize();//trigger resize on page load
});
