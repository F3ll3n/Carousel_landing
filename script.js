//код фантазёра
let buttonRight = document.querySelector('.carousel-right');
let buttonLeft = document.querySelector('.carousel-left');
let carouselLine = document.querySelector('.carousel-line');
let carouselItems = document.querySelectorAll('.carousel-item');
let carouselItemWidth = document.querySelector('.carousel-item').offsetWidth;
let count = 0;
let viewItems = 4;

//Слайдер медиа (срабатывают только после обновления страницы :) )
function checkMediaQuery() {
    let viewItem;
    if (window.innerWidth > 1268) {
        viewItem = 4;
    }
    else if (window.innerWidth > 968) {
        viewItem = 3;
      }
      else if (window.innerWidth > 668) {
        viewItem = 2;
      }
      else if (window.innerWidth > 368) {
        viewItem = 1;
      }
      return viewItem;
  }
window.addEventListener('resize', checkMediaQuery);
viewItems = checkMediaQuery();

//Кнопка вправо + счётчик с запуском функции смены положении линии
buttonRight.addEventListener('click', function right(){
    count++;
    if(count < carouselItems.length - viewItems + 1){
        rollCarousel();
    }
    else{
        count = 0;
        rollCarousel();
    }

    
})
//Кнопка вправо + тоже самое что и выше
buttonLeft.addEventListener('click', function left(){
    count--; 
    if(count >= 0){
        rollCarousel();
    }
    else{
        count = carouselItems.length - viewItems;
        rollCarousel();
    }

})


//Функция расчёта положения и изменения стилей для slider-line
function rollCarousel(){
    carouselLine.style.transform = 'translate(-' + count * (carouselItemWidth + 18) + 'px)';
}