$(document).ready(function(){

 $(".tab-menu-content div").hide();
 $(".tab-menu-content div:first").show();

 $(".tab-menu li").click(function(){
    
    var value = $(this).index();
    $(".tab-menu-content div").hide();
    $(".tab-menu-content div:eq("+value+")").show();

    $(".tab-menu li").removeClass("active");
    $(".tab-menu li:eq("+value+")").addClass("active");

   

 })



})