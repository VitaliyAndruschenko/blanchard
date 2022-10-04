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
                center: [48.872185, 2.354224],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 15
            });

var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'Subtract.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42] ,
});
myMap.geoObjects.add(myPlacemark);
        }