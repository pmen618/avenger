document.addEventListener("DOMContentLoaded", function(e){
  window.addEventListener("load", function(e){
    // Hide loading image
    var watchnow = $('.watchnow');

    $('.watchnow').click(function(event) {
      /* Act on the event */
      event.preventDefault();
      var $this = $(this);
      if($this){
        var $docloader = $('.doc-loader');
          $docloader.fadeOut('slow');
      }
    });

    //jQuery('.doc-loader').fadeOut('slow');

    // Text animation
    const text =  baffle(".data");
    text.set({
      characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
            speed: 200
    });

    text.start();
    text.reveal(4000);

    // fade Intro when click


    var $intro = $('#intro');
    var $nodeClick = $('#nodeClick');
    var $slide = $('#slide');
    var $shop = $('#shopping');
    var $back = $('#back');
    var $gallery = $('#gallery');
    $('#nodeClick').click(function(event) {
      /* Act on the event */
      event.preventDefault();
      var $this =$(this);
      if($this){
        $intro.hide();
        $gallery.hide();
        $shop.hide();
        $slide.show("1200");
        $('a#introduce').removeClass("active");
        $('a#characters').addClass('active');
      }
    });

    $('#introduce').click(function(event){
      event.preventDefault();
        
        $intro.show("1200");
        $gallery.hide();
        $shop.hide();
        $slide.hide();
    });

    $('#characters').click(function(event){
      event.preventDefault();
        
        $intro.hide();
        $gallery.hide();
        $shop.hide();
        $slide.show("fast");
    });

    $('#galler').click(function(event){
      event.preventDefault();
        $intro.hide();
        $slide.hide();
        $shop.hide();
        $gallery.show("fast");
    });

    $('#shop').click(function(event){
      event.preventDefault();
        $intro.hide();
        $slide.hide();
        $gallery.hide();
        $shop.show("fast").css({"min-height":"550px","opacity": "1"});
        $('a#shop').removeClass("active");
    });
    //.main-nav

    $(document).ready(function(){
      $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    });



    $('#back').click(function(event){
      event.preventDefault();
      
        $intro.show("fast");
        $slide.hide();
      
    });

    $(".slider1").append("<div class='glitch-window'><a href='' class='node node2' id='back'> </a></div>");

    //fill div with clone of real header
    //$( "a" ).appendTo( ".glitch-window" );


    jQuery(document).ready(function ($) {

       /* setInterval(function () {
            moveRight();
        }, 3000);*/
      
      var slideCount = $('#slide ul li').length;
      var slideWidth = $('#slide ul li').width();
      var slideHeight = $('#slide ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slide').css({ width: slideWidth, height: slideHeight });
      
      $('#slide ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
        $('#slide ul li:last-child').prependTo('#slide ul');

        function moveLeft() {
            $('#slide ul').animate({
                left: + slideWidth
            }, 200, function () {
                $('#slide ul li:last-child').prependTo('#slide ul');
                $('#slide ul').css('left', '');
            });
        };

        function moveRight() {
            $('#slide ul').animate({
                left: - slideWidth
            }, 200, function () {
                $('#slide ul li:first-child').appendTo('#slide ul');
                $('#slide ul').css('left', '');
            });
        };

        $('i.control_prev').click(function () {
            moveLeft();
        });

        $('i.control_next').click(function () {
            moveRight();
        });

    });    

    /* slide characters */
    var interval = 500;

    var slide;

    $('.back').click(function(){
      var slide = $('.gall-detail div:last-child').remove();
      $('.gall-detail').prepend(slide);
    });

    /********* PRODUCTS ********/
     $('.slider-content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      infinite: false,
      speed: 1000,
      asNavFor: '.slider-thumb',
        arrows: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-arrow-right"></i></button>',

    });
    $('.slider-thumb').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      asNavFor: '.slider-content',
      dots: false,
      centerMode: false,
      focusOnSelect: true
    });

    /*******Add to wishList************/
    $("a.add-to-wishList").click(function() {
      console.log("classname - " + this.className)
      if(this.className=="" || this.className == "remove")
          this.className = "add";
      else 
          this.className = "remove";
    });

    /************* Mouse Over ************/
    $(document).on('mousemove', function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      // console.log(xPos, yPos);
      $('.mouseover').css({
        'top': yPos,
        'left': xPos
      });
    });

    /*******MENU ******/
    $(".menu-mobile").click(function() {
      $("ul.nav-inner").toggleClass("menu");
      $(".navbar-inner").toggleClass("nav-bg");
      $(this).toggleClass("open");
    });
  });
});
