/*scroll & lists*/

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
})

const btns = document.querySelectorAll(".hero__menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})
    /*map*/
    // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [55.7605238, 37.6151815],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 15
            });

var myPlacemark = new ymaps.Placemark([55.7605238, 37.6151815], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'pointer.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42] ,
});
myMap.geoObjects.add(myPlacemark);
        }

        /*slider__hero*/

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
              delay:2000,
              stopOnLastSlide:false,
              daisabledOnInteraction:false,
            },
            speed:500,
          });

/*slider_galley*/
document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".gallery__slides__container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__test__next",
      prevEl: ".gallery__test__prev"
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      736: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 35
      },

      1400: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      1401: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});

  /*swiper_events*/
  var swiper = new Swiper(".events__swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    // If we need pagination
    pagination: {
      clickable: true,
      el: '.events__pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.events__btn__next',
      prevEl: '.events__btn__prev',
    },
  
    breakpoints: {
      320: {
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
  
      600: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
  
      850: {
        spaceBetween: 25,
        slidesPerView: 2,
        slidesPerGroup: 3,
      },
  
      1025: {
        spaceBetween: 24,
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
  
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 43,
      }
    },
  
  });

  /*swiper__project*/
  const projectsSwiper = new Swiper(".projects-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    grid: {
        rows: 1,
    },
    spaceBetween: 42,
    navigation: {
        nextEl: ".projects-next",
        prevEl: ".projects-prev"
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 34,
        },
        // 577: {
        //   slidesPerView: 2,
        //   grid: {
        //     rows: 1,
        //   },
        //   spaceBetween: 10,
        //  },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        1520: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 50,
        },
    }
});
  /*accordion*/

  $('.accordion').accordion ({
    active: true,
    heightStyle: "content",
    event: "click"
  });

  /*cart__btn*/

let tabsBtn = document.querySelectorAll('.catalog__artist__btn');
let tabsItem = document.querySelectorAll('.catalog__content__box');

tabsBtn.forEach(function(element) {
 element.addEventListener('click' , function(e) {
  const path = e.currentTarget.dataset.path;

  tabsBtn.forEach(function(btn){btn.classList.remove('catalog__artist__btn--active')});
  e.currentTarget.classList.add('catalog__artist__btn--active');

  tabsItem.forEach(function(element){element.classList.remove('catalog__content__box--active')});
  document.querySelector(`[data-target="${path}"`).classList.add('catalog__content__box--active');
 });
});

/*Mask*/  


let validation = new JustValidate('#form')

let selector = document.querySelector('#phone')
let im = new Inputmask("+7(999)-999-99-99")
im.mask(selector)


validation.addField("#name", [
  {
    rule: 'required',
    errorMessage : 'Введите имя'
  },
  {
    rule: 'minLength' ,
    value: 2,
    errorMessage: 'Минимум два символа'
  },
  {
    rule: 'maxLength' ,
    value: 10,
    errorMessage: 'Максимум символов'
  },
  {
    rule: 'customRegexp',
    value:  /[А-я]/,
    errorMessage: 'Недопустимый формат'
  }
])
.addField("#phone", [
  {
    rule: 'required',
    errorMessage : 'Введите телефон'
  },
  {
    rule: 'minLength' ,
    value: 9,
    errorMessage: 'Введите полный номер'
  }
])

/*btn*/

$(document).ready(function(){
  $('.gallery__information__icon').click(function(event){
    $('.gallery__information__page,.gallery__information__icon').toggleClass('active');
  })
});

////////////////////////////////////////

document.querySelector(".form-content__open").addEventListener("click", function() {
  document.querySelector(".form-content__open").classList.add("active");
  document.querySelector(".form-top").classList.add("form-top__active");
  document.querySelector(".header__logo").classList.add("header__logo_active");
  document.querySelector(".burger").classList.add("burger_active");
  this.classList.add("active");
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".form-top");
  if (!target.closest(".form-content")) {
      form.classList.remove("form-top__active");
      form.querySelector(".form-top__input").value = "";
      document.querySelector(".form-content__open").classList.remove("active")
      document.querySelector(".header__logo").classList.remove("header__logo_active");
      document.querySelector(".burger").classList.remove("burger_active");
  }
  if (target.closest(".form-top__close")) {
      form.classList.remove("form-top__active");
      form.querySelector(".form-top__input").value = "";
      document.querySelector(".form-content__open").classList.remove("active");
      document.querySelector(".header__logo").classList.remove("header__logo_active");
      document.querySelector(".burger").classList.remove("burger_active");
  }
});

/////////////////////////////////////////

$ (document).ready(function(){
  $('.burger').click(function(event){
    $('.burger,.nav,.header__logo,.header__serch,.header__nav__items,.header__office__link,.burger__line').toggleClass('active');  
    $('body').toggleClass('lock');
  })
});

//tooltip

tippy('#projects-tooltip1', {
  content: 'Пример современных тенденций - современная методология разработки',
  maxWidth: 264,
  theme: 'lilac',
  //hideOnClick: false,
  //trigger: 'click',
});

tippy('#projects-tooltip2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  maxWidth: 264,
  theme: 'lilac',
});


tippy('#projects-tooltip3', {
  content: 'В стремлении повысить качество',
  maxWidth: 264,
  theme: 'lilac',
});

  /*choices*/

const select = document.querySelector('.custom-select');
const choices = new Choices(select, {
  itemSelectText: '',
  position: 'bottom',
  searchEnabled: false,
});

//планый скролл по сайту

const $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
});

