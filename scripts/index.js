$('.card').on('click', function(){
    window.location.href= $(this).attr('date-href');
})

$('.form__input').on('focusout',function(){
    field_name = $(this).attr('name');
    error_flag = 0;
    error_text = '';
    switch (field_name){
        case 'name':
            console.log('len - ' + $(this).val().length);
            if ($(this).val() == "" || $(this).val().length < 2){
                error_flag = 1;
                error_text = 'Имя слишком короткое';
            }
            break;
        case 'email':
            console.log('email ' + $(this).val() + " valid? " + isEmailValid($(this).val()));
            if (!isEmailValid($(this).val())){
                error_flag = 1;
                error_text = 'Некорректный email';
            }            
            break;
    }

    if (error_flag == 0 && $(this).parent().hasClass('form__field_has-error')){
        $(this).parent().removeClass('form__field_has-error');
        $(this).parent().children('.form__error').text('');
    }
    if (error_flag == 1){
        $(this).parent().addClass('form__field_has-error');
        $(this).parent().children('.form__error').text(error_text);
    }
})

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

$('.button_open-modal-сatalog').on('click', function(e) {
  e.preventDefault();
  $('.modal_catalog').toggleClass('is-visible');
});
$('.button_open-modal-consultation').on('click', function(e) {
    e.preventDefault();
    $('.modal_consultation').toggleClass('is-visible');
  });
$('.modal-close').on('click',function(){
	$(this).closest('.modal').removeClass('is-visible');
})
if (window.screen.width < 768){
    count = 0;
    $('.card').each(function(){
        if (count >= 4){
            $(this).addClass('hidden')
        }
        count++;
    })
}
if (window.screen.width < 1300){
    count = 0;
    $('.card').each(function(){
        if (count >= 8){
            $(this).addClass('hidden')
        }
        count++;
    })
}