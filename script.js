//код фантазёра
let buttonRight = document.querySelector('.carousel-right');
let buttonLeft = document.querySelector('.carousel-left');
let carouselLine = document.querySelector('.carousel-line');
let carouselItems = document.querySelectorAll('.carousel-item');
let carouselItemWidth = document.querySelector('.carousel-item').offsetWidth;
let count = 0;
console.log(carouselItems.length);
//После загрузки сюда добавляется значение 
let viewItems;
function checkWinWidth(){
    width = window.innerWidth;
    console.log(width);
    //Это функция которая возвращает значение функции выше, работающей от изменения экрана
    //Работает она как медиа запрос и определяет ширину текущего блока, чтобы рассчитать количество возможных шагов в стороны.
    function checkMediaQuery(winWidth) {
        let viewItem;
                if (winWidth > 1268 && winWidth < 10000) {
                    window.onresize = viewItem = 4;
                }
                if (winWidth > 968 && winWidth < 1268) {
                    window.onresize = viewItem = 3;
                  }
                if (winWidth > 668 &&  winWidth < 968) {
                    window.onresize = viewItem = 2;
                  }
                if (winWidth > 368 &&  winWidth < 668) {
                    window.onresize = viewItem = 1;
                } 
              return viewItem;
      }
      viewItems = checkMediaQuery(width);
      console.log('Ширина блоков: ' + viewItems);
      count = 0;
      rollCarousel();
      viewCarouselItemsCheck();
        //Инициализация всех плашек
      
    
      return viewItems;

 
      
}
let winWidth = checkWinWidth();
console.log(winWidth);
window.addEventListener('resize', checkWinWidth);

function viewCarouselItemsCheck() {
    let viewZone = count + viewItems;
    for(let i = 0; i < carouselItems.length; i++){
        carouselItems[i].id = `itemNum${i}`;
        let viewItems = document.getElementById(`itemNum${i}`);
        viewItems.style.opacity = 1;
        viewItems.style.overflow = 'hidden';
        viewItems.style.transition = '.8s';
        console.log(document.getElementById(`itemNum${i}`).classList[0].cssText = 'opacity: 1');
        if(i >= count && i < viewZone){
            console.log(viewItems);
            viewItems.style.height = '167px';
            viewItems.style.opacity = 1;
        } else {
            viewItems.style.height = '0px';
            viewItems.style.opacity = 0;
        }
    } 
}

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
    viewCarouselItemsCheck();
    carouselLine.style.transform = 'translate(-' + count * (carouselItemWidth + 20) + 'px)';
}
console.log(carouselItemWidth);