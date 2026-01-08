const prevIcon = '<button type="button" class="prev col-2 fade-in"><p class="mb-0"><</p></button>';
const nextIcon = '<button type="button" class="next col-2 fade-in"><p class="mb-0">></p></button>';


$(document).ready(function() {
    $('.index-carousel').slick({
      centerMode:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
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
          $(".brand, .editorial, .packaging, .social_media, .copywriting, .photography .tag-1").addClass("invisivel");
          $(".web, .todos, .tag-2, .tag-3, .tag-4, .tag-5, .tag-6, .tag-7, .tag-8").removeClass("invisivel");
          $(".mudar p").text("Web");
      });
      $(".tags-eventos .dropdown-menu .tag-2").click(function () {
          // alert("clique");
          $(".web, .editorial, .packaging, .social_media, .copywriting, .photography, .tag-2").addClass("invisivel");
          $(".brand, .todos, .tag-1, .tag-3, .tag-4, .tag-5, .tag-6, tag-7, tag-8").removeClass("invisivel");
          $(".mudar p").text("Brand");
          
      });
      $(".tags-eventos .dropdown-menu .tag-3").click(function () {
          // alert("clique");
          $(".web, .brand, .packaging, .social_media, .copywriting, .photography, .tag-3").addClass("invisivel");
          $(".editorial, .todos, .tag-1, .tag-2, .tag-4, .tag-5, .tag-6, .tag-7, .tag-8").removeClass("invisivel");
          $(".mudar p").text("Editorial");
      });
      $(".tags-eventos .dropdown-menu .tag-4").click(function () {
          // alert("clique");
          $(".web, .brand, .editorial, .social_media, .copywriting, .photography, .tag-4").addClass("invisivel");
          $(".packaging, .todos, .tag-1, .tag-2, .tag-3, .tag-5, .tag-6, .tag-7, .tag-8").removeClass("invisivel");
          $(".mudar p").text("Packaging");
      });
      $(".tags-eventos .dropdown-menu .tag-5").click(function () {
        // alert("clique");
        $(".web, .brand, .editorial, .packaging, .copywriting, .photography, .tag-4").addClass("invisivel");
        $(".social_media, .todos, .tag-1, .tag-2, .tag-3, .tag-4 .tag-6, .tag-7, .tag-8").removeClass("invisivel");
        $(".mudar p").text("Social Media");
    });
      $(".tags-eventos .dropdown-menu .tag-6").click(function () {
        // alert("clique");
        $(".web, .brand, .editorial, .packaging, .social_media, .photography, .tag-4").addClass("invisivel");
        $(".copywriting, .todos, .tag-1, .tag-2, .tag-3, .tag-4, .tag-5, .tag-7, .tag-8").removeClass("invisivel");
        $(".mudar p").text("Copywriting");
    });
      $(".tags-eventos .dropdown-menu .tag-7").click(function () {
        // alert("clique");
        $(".web, .brand, .editorial, .packaging, .social_media, .copywriting, .tag-4").addClass("invisivel");
        $(".photography, .todos, .tag-1, .tag-2, .tag-3, .tag-4, .tag-5, .tag-6, .tag-8").removeClass("invisivel");
        $(".mudar p").text("Photography");
    });
      $(".tags-eventos .dropdown-menu .tag-8").click(function () {
          // alert("clique");
          $(".todos, .tag-8").addClass("invisivel");
          $(".web, .brand, .editorial, .packaging, .social_media, .copywriting, .photography, .tag-1, .tag-2, .tag-3, .tag-4, .tag-5, .tag-6, .tag-7").removeClass("invisivel");
          $(".mudar p").text("Show All");
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

  $(document).ready(function() {
    $('.fade-in').addClass('visible');
  });

  (function() {
    const preview = document.getElementById('pw-preview');
    if (!preview) return;
  
    // ensure two layers exist for crossfade
    let layers = preview.querySelectorAll('.pw-preview__img');
    while (layers.length < 2) {
      const d = document.createElement('div');
      d.className = 'pw-preview__img';
      preview.appendChild(d);
      layers = preview.querySelectorAll('.pw-preview__img');
    }
    let active = 0;
  
    // center preview vertically to the TOC
    const toc = document.getElementById('toc') || document.querySelector('.projects.show-large');
    const positionPreview = () => {
      if (!toc) return;
      const r = toc.getBoundingClientRect();
      const cy = r.top + r.height / 2;
      preview.style.top = `${cy}px`;    // vertical center of TOC in viewport
      // keep horizontal centering at 50% via CSS
    };
    positionPreview();
    window.addEventListener('resize', positionPreview, { passive: true });
    window.addEventListener('scroll', positionPreview, { passive: true });
    if (toc) toc.addEventListener('scroll', positionPreview, { passive: true });
  
    // hover behavior (color + crossfade)
    const rows = document.querySelectorAll('.projects.show-large a.row');
    rows.forEach(row => {
      row.addEventListener('mouseenter', () => {
        const color = row.getAttribute('data-preview-color') || '';
        const img = row.getAttribute('data-preview-image') || '';
  
        preview.classList.remove('red', 'green', 'blue');
        if (color) preview.classList.add(color);
  
        if (img) {
          const next = active ^ 1;
          layers[next].style.backgroundImage = `url("${img}")`;
          layers[next].classList.add('is-active');
          layers[active].classList.remove('is-active');
          active = next;
        }
      });
      row.addEventListener('mouseleave', () => {
        layers[0].classList.remove('is-active');
        layers[1].classList.remove('is-active');
        preview.classList.remove('red', 'green', 'blue');
      });
    });
  })();
  