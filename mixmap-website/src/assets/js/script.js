$(document).ready(function(){
    /* Navbar shrink */
    var nav = $("#mainNav");
    $(window).scroll(function(){
        if($(document).scrollTop() > 150) {
            nav.addClass("navbar-shrink");
        }
        else {
            nav.removeClass("navbar-shrink");
        }
    });


  //hide all tabs first
  $('.top-trending .tab__content').hide();
  //show the first tab content
  $('#tab-tourTrending').show();
  
  $('#select-box').on("change", function () {
      var dropdown = $('#select-box').val();
    //first hide all tabs again when a new option is selected
    $('.top-trending .tab__content').hide();
    //then show the tab content of whatever option value was selected
    $('#' + "tab-" + dropdown).show();                                    
  });

  /* trending carousels */
  $('.top-trending .owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200: {
            items: 4
        }
    }
  });

  $('.career-cta-section .owl-carousel').owlCarousel({
        items: 1,
        stagePadding: 200,
        loop: true,
        margin: 10
});

$('body').scrollspy({ target: '#faqsNav', offset: 100 });

  // Add smooth scrolling on all links inside the navbar
  $("#faqsNav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  var contactForm = $("#contactForm");
  if(contactForm.length) {
    contactForm.validate({
      rules: {
        firstname: {
          required: true
        },
        lastname: {
          required: true
        },
        email: {
          required: true
        },
        phone: {
          required: true,
          number: true,
          rangelength: [10,10]
        }
      },
      messages:{
        firstname: {
          required: "Please fill your First Name"
        },
        lastname: {
          required: "Please fill your Last Name"
        },
        email: {
          required: "Please fill your Email"
        },
        phone: {
          required: "Please fill your Phone No.",
          number: "Phone No. must be in numbers",
          rangelength: "Phone No. must be 10 digit long"

        }
      }
    });
  }

  
// quick search regex
var qsRegex;
var buttonFilter;

var $grid = $('.grid').imagesLoaded( function() {
  // init Isotope after all images have loaded
  // init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.find(".blog__title h4").text().match( qsRegex ) : true;
    var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
    return searchResult && buttonResult;
  }
});
});

$('#filters').on( 'click', 'button', function() {
  buttonFilter = $( this ).attr('data-filter');
  $grid.isotope();
});

// use value of search field to filter
var $quicksearch = $('#blogSearch').on("keyup", debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}) );


  // change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}

});