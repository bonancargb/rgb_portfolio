const prevIcon = '<button type="button" class="prev col-2"><p class="mb-0"><</p></button>';
const nextIcon = '<button type="button" class="next col-2"><p class="mb-0">></p></button>';


$(document).ready(function() {
    $('.index-carousel').slick({
      centerMode:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      infinite:true,
    //   centerMode: true,
    //   centerPadding: 'calc(50% - 600px)',
    //   dots: true,
      arrows: true,
    //   appendArrows: ".button.carousel", 
    //   appendDots: ".dot-test",
      prevArrow: prevIcon,
      nextArrow: nextIcon,
      // responsive: [
      //   {
      //     breakpoint: 999,
      //     settings: {
      //       centerMode:true,
      //       centerPadding: '0px',
      //     }
      //   },
      // ]
      });
    });
    
    // $('.index-carousel').slick({
    //   dots: false,
    //   arrows: false,
    //   infinite: true,
    //   speed: 500,
    //   fade: true,
    //   cssEase: 'linear',
    //   autoplay: true,
    //   autoplaySpeed: 5000,
    // });

    $(document).ready(function() { 
      $(".dropdown button").click(function () {
          $(".dropdown button img").toggleClass("invertido");
      });
      $(".tags-eventos .dropdown-menu .tag-1").click(function () {
          // alert("clique");
          $(".design, .music, .copywriting, .tag-1").addClass("invisivel");
          $(".web-design, .todos, .tag-2, .tag-3, .tag-4, .tag-5, .tag-6").removeClass("invisivel");
          $(".mudar p").text("Web design");
      });
      $(".tags-eventos .dropdown-menu .tag-2").click(function () {
          // alert("clique");
          $(".web-design, .music, .copywriting, .experiment, .tag-2").addClass("invisivel");
          $(".design, .todos, .tag-1, .tag-3, .tag-4, .tag-5").removeClass("invisivel");
          $(".mudar p").text("Design");
          
      });
      $(".tags-eventos .dropdown-menu .tag-3").click(function () {
          // alert("clique");
          $(".web-design, .design, .copywriting, .experiment, .tag-3").addClass("invisivel");
          $(".music, .todos, .tag-1, .tag-2, .tag-4, .tag-5").removeClass("invisivel");
          $(".mudar p").text("Music");
      });
      $(".tags-eventos .dropdown-menu .tag-4").click(function () {
          // alert("clique");
          $(".web-design, .design, .music, .experiment, .tag-4").addClass("invisivel");
          $(".copywriting, .todos, .tag-1, .tag-2, .tag-3, .tag-5").removeClass("invisivel");
          $(".mudar p").text("Copywriting");
      });
      $(".tags-eventos .dropdown-menu .tag-5").click(function () {
        // alert("clique");
        $(".web-design, .design, .music, .copywriting, .tag-4").addClass("invisivel");
        $(".experiment, .todos, .tag-1, .tag-2, .tag-3, .tag-5").removeClass("invisivel");
        $(".mudar p").text("Experiment");
    });
      $(".tags-eventos .dropdown-menu .tag-6").click(function () {
          // alert("clique");
          $(".todos, .tag-5").addClass("invisivel");
          $(".web-design, .design, .music, .copywriting, .experiment, .tag-1, .tag-2, .tag-3, .tag-4").removeClass("invisivel");
          $(".mudar p").text("Surprise me");
      });
  });

  // a project

const prevIconProject = '<button type="button" class="prev col-2"><p class="mb-0"><</p></button>';
const nextIconProject = '<button type="button" class="next col-2"><p class="mb-0">></p></button>';



  $(document).ready(function() {
    $('.project-carousel').slick({
      centerMode:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      infinite:true,
    //   centerMode: true,
    //   centerPadding: 'calc(50% - 600px)',
      dots: true,
      arrows: false,
    //   appendArrows: ".button.carousel", 
      // appendDots: ".dot-container",
      // prevArrow: prevIconProject,
      // nextArrow: nextIconProject,
    });
  });

  $(document).ready(function() {
    $('.video-carousel').slick({
      centerMode:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 6000,
      infinite:true,
    //   centerMode: true,
    //   centerPadding: 'calc(50% - 600px)',
      dots: true,
      arrows: false,
    //   appendArrows: ".button.carousel", 
      // appendDots: ".dot-container",
      // prevArrow: prevIconProject,
      // nextArrow: nextIconProject,
    });
  });

  // index

  $(document).ready(function() {
    $(".header-small button, .header-mobile button").click(function () {
      // alert("clique");
      $(".expand").toggleClass("expanded");
    })
  })