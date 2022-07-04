$(function(){
    let $Buttons = $('.according__button')
    const txtCont = $('.according-item__content')
    const IH = $('#okok').height()

    $('.according-item__content:not(#one-according-item)').height(0)


    $Buttons.on('click' , function(e){
        e.preventDefault()
        let $thisItem = $(this)

        if($thisItem.attr('data-toggle') == 'true'){
            $thisItem.attr('data-toggle', 'false')
            console.log('if')
        }
        else{
            $Buttons.attr('data-toggle', 'false')
            $thisItem.attr('data-toggle', 'true')
        }
        
        $Buttons.each(function(){
            if($(this).attr('data-toggle') == 'true'){
                
                // Для изменение под дерево  DOM , изменить строку ниже
                $(this).parent().next().animate({  
                    height: IH
                })
                $(this).css({
                    'transform':'rotate(180deg)'
                })
            }
            else{
                $(this).parent().next().animate({
                    height: '0'
                })
                $(this).css({
                    'transform':'rotate(0deg)'
                })
            }
        })
    })
})