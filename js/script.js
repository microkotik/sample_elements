const element = document.querySelector('.select');
const choices = new Choices(element, {
  containerOuter: 'choices',
  searchEnabled: false,
  // itemSelectText: '',
});


ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [48.872185073737896,2.354223999999991],
    zoom: 17
  });
  var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/geotag.svg',
    iconImageSize: [48, 48],
    iconImageOffset: [-30, -55]
  });

  myMap.geoObjects.add(myPlacemark);
}


new SimpleBar(document.querySelector('.scrollbar'), {
  // autoHide: false,
});


var selector = document.querySelector(".form__usertel");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);


let justValidate = new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const ph = tel.inputmask.unmaskedvalue();
        return Number(ph) && ph.length ===  10;
      },
    },
    email: {
      required: true,
      email: true
    },
  },
  messages: {
    name: 'Вы не ввели имя',
    tel: {
      required: 'Вы не ввели телефон',
      function: 'Неправильное количество символов',
    },
    email: 'Вы не ввели e-mail'
  },
});

tippy('.tooltip__icon', {
  theme: 'custom',
  maxWidth: 176,
});

