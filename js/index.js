$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          if($(this).scrollTop() > 600) {
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});
