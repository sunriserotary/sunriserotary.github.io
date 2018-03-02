$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          if($(this).scrollTop() > 650) {
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

//Smooth scrolling with links
$('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

// Smooth scrolling when the document is loaded and ready
$(document).ready(function(){
  $('html,body').animate({scrollTop:$(location.hash).offset().‌​top}, 500);
});
