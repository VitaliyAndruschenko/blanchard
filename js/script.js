/*scroll & lists*/

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
})

const btns = document.querySelectorAll(".menu__btn");
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
var swiper = new Swiper(".mySwiper__gallery", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 38,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2
      },
      1023: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },
      1399: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      }
    },
    pagination: {
      el: ".gallery__pagination",
      clickable: true,
      type: 'fraction',
      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*swiper_events*/
  var swiper = new Swiper(".events__swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1023: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*swiper__project*/
  var swiper = new Swiper(".project__swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 34,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },      
      1399: {
        slidesPerView: 3,
        spaceBetween: 34,
        slidesPerGroup: 3
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  /*accordion*/

  $('.accordion').accordion ({
    active: true,
    heightStyle: "content",
    event: "click"
  });

  /*cart__btn*/

let tabsBtn = document.querySelectorAll('.catalog__artist_btn');
let tabsItem = document.querySelectorAll('.content__box');

tabsBtn.forEach(function(element) {
 element.addEventListener('click' , function(e) {
  const path = e.currentTarget.dataset.path;

  tabsBtn.forEach(function(btn){btn.classList.remove('catalog__artist_btn--active')});
  e.currentTarget.classList.add('catalog__artist_btn--active');

  tabsItem.forEach(function(element){element.classList.remove('content__box--active')});
  document.querySelector(`[data-target="${path}"`).classList.add('content__box--active');
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
  $('.gallery__background_seach,.gellery__information_icon').click(function(event){
    $('.gallery__information_page,.gallery__background_seach,.gellery__information_icon').toggleClass('active');
  })
});

$(document).ready(function(){
  $('.search__btn,.header__search_close').click(function(event){
    $('.header__search_item,.header__search_input,.header__search_line,.search__btn,.header__search_close').toggleClass('active');
  })
});

$ (document).ready(function(){
  $('.burger').click(function(event){
    $('.burger,.nav,.header__logo,.header__serch,.header__nav_items').toggleClass('active');  
    $('body').toggleClass('lock');
  })
});

/*popup*/

$ (document).ready(function(){
  $('.toolType__link_one').click(function(event){
    $('.toolType__link_one, .popup__one').toggleClass('active');  
  })
});

$ (document).ready(function(){
  $('.toolType__link_one').click(function(event){
    $('.toolType__link_one, .popup__one').toggleClass('active');  
  })
});

$ (document).ready(function(){
  $('.toolType__link_one').click(function(event){
    $('.toolType__link_one, .popup__one').toggleClass('active');  
  })
});
