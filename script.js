$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
});

$('.TestimonialSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
  });

  hljs.initHighlightingOnLoad();
  new VGNav().toggle();

  $("#accordionbtn1").click(function(){
    $("#accordionbtn1").css("background-color","#FFC107")
    $("#accordionbtn2").css("background-color","#FFFFFF")
    $("#accordionbtn3").css("background-color","#FFFFFF")
    $("#accordionbtn4").css("background-color","#FFFFFF")
    $("#accordionbtn5").css("background-color","#FFFFFF")

    $("#accordionicon1").removeClass("fa-plus").addClass("fa-minus");
    $("#accordionicon2").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon3").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon4").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon5").removeClass("fa-minus").addClass("fa-plus");
  });
  $("#accordionbtn2").click(function(){
    $("#accordionbtn1").css("background-color","#FFFFFF")
    $("#accordionbtn2").css("background-color","#FFC107")
    $("#accordionbtn3").css("background-color","#FFFFFF")
    $("#accordionbtn4").css("background-color","#FFFFFF")
    $("#accordionbtn5").css("background-color","#FFFFFF")

    $("#accordionicon1").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon2").removeClass("fa-plus").addClass("fa-minus");
    $("#accordionicon3").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon4").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon5").removeClass("fa-minus").addClass("fa-plus");
  });
  $("#accordionbtn3").click(function(){
    $("#accordionbtn1").css("background-color","#FFFFFF")
    $("#accordionbtn2").css("background-color","#FFFFFF")
    $("#accordionbtn3").css("background-color","#FFC107")
    $("#accordionbtn4").css("background-color","#FFFFFF")
    $("#accordionbtn5").css("background-color","#FFFFFF")

    $("#accordionicon1").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon2").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon3").removeClass("fa-plus").addClass("fa-minus");
    $("#accordionicon4").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon5").removeClass("fa-minus").addClass("fa-plus");
  });
  $("#accordionbtn4").click(function(){
    $("#accordionbtn1").css("background-color","#FFFFFF")
    $("#accordionbtn2").css("background-color","#FFFFFF")
    $("#accordionbtn3").css("background-color","#FFFFFF")
    $("#accordionbtn4").css("background-color","#FFC107")
    $("#accordionbtn5").css("background-color","#FFFFFF")

    $("#accordionicon1").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon2").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon3").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon4").removeClass("fa-plus").addClass("fa-minus");
    $("#accordionicon5").removeClass("fa-minus").addClass("fa-plus");
  });
  $("#accordionbtn5").click(function(){
    $("#accordionbtn1").css("background-color","#FFFFFF")
    $("#accordionbtn2").css("background-color","#FFFFFF")
    $("#accordionbtn3").css("background-color","#FFFFFF")
    $("#accordionbtn4").css("background-color","#FFFFFF")
    $("#accordionbtn5").css("background-color","#FFC107")

    $("#accordionicon1").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon2").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon3").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon4").removeClass("fa-minus").addClass("fa-plus");
    $("#accordionicon5").removeClass("fa-plus").addClass("fa-minus");
  });