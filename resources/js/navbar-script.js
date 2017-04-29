$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

function scrollToDiv(divId) {
    var newScrollTop = divId ? ($('#'+divId).offset().top - 50) : 0;
    $('html,body').animate({
        scrollTop: newScrollTop
    }, 'slow');
}