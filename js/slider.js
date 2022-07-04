$(function(){
    const $pagLeft = $('#pag-left')
    const $paginate = $('.paginate')
    const $pagRight = $('#pag-right')

    const $pagLeft2 = $('#pag-left-2')
    const $pagRight2 = $('#pag-right-2')

    const Slider = $('#slider-content')
    const Slider2 =$('#slider-content-2')
    const $Item = $('.slider-item')

    let counter = 0
    let counter2 = 0
    let ItemWidth = $Item.outerWidth(true) + 20;

    $pagLeft.click(function (e) { 
        e.preventDefault();

        if(counter >= 1){
            Slider.animate({ right: '-=' + ItemWidth})

            counter = counter - 1

        }

        
        
    });
    $pagRight.click(function (e) { 
        e.preventDefault();

        if(counter != $('.slider-item').length /2 - 3){

            Slider.animate({ right: '+=' + ItemWidth})

            counter = counter + 1

        }
    });
    setInterval(() => {
        counter <= 1 ? $pagLeft.attr('class', 'paginate-complete') : $pagLeft.attr('class', 'paginate')
        counter == $('.slider-item').length/2 -3 ? $pagRight.attr('class', 'paginate-complete') : $pagRight.attr('class', 'paginate')
    }, 500)




    $pagLeft2.click(function (e) { 
        e.preventDefault();

        if(counter2 >= 1){
            Slider2.animate({ right: '-=' + ItemWidth})

            counter2 = counter2 - 1

        }

        
        
    });
    $pagRight2.click(function (e) { 
        e.preventDefault();

        if(counter2 != $('.slider-item').length/2 -3){

            Slider2.animate({ right: '+=' + ItemWidth})

            counter2 = counter2 + 1

        }
    });
    setInterval(() => {
        counter2 <= 1 ? $pagLeft2.attr('class', 'paginate-complete') : $pagLeft2.attr('class', 'paginate')
        counter2 == $('.slider-item').length/2 -3 ? $pagRight2.attr('class', 'paginate-complete') : $pagRight2.attr('class', 'paginate')
    }, 500)
})