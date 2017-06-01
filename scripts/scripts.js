$(document).ready(function(){
  $(function() {
    FastClick.attach(document.body);
  });
  
  
  $('.img-slideshow').slick({
    autoplay: true,
    arrows:false,
    adaptiveHeight: true
  });


console.log("Hello");

  /* filtering */
  $('nav#portfolio-filter a').click(function(e) {
    e.preventDefault();
    console.log("We clicked it");

    /* make this <li> class active and remove class 'active' from any other <li>s */
    $('nav#portfolio-filter .active').removeClass('active');
    $(this).addClass('active');

    /* get the name of the cateory from this link */
    var filterVal = $(this).text().toLowerCase().replace(' ','-');

    $('#portfolio-grid .img-with-overlay').each(function() {
        if(filterVal == 'all'){
          $(this).removeClass('hidden');
        }else{
          if(!$(this).hasClass(filterVal)) {
            $(this).addClass('hidden'); // hide those that don't have the filter
          }else{
            $(this).removeClass('hidden'); // show those that do have the filter
          }
        }
      });
      
});


});

