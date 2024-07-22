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