// $('#goOrderAhead').hover(() => {
//     $('#toGoMug').toggleClass('d-none');
//     $('#toGoMug').slideDown('slow');


// }) 
$('.nav-item.dropdown').hover(() => {
    $('#dropdownMenu').toggleClass('show')
});

$('#cardQuality').paroller({
    factorXs: .2,
    factorSm: .2,
    factorMd: .3,
    factorLg: .2,
    factorXl: .2,
    factor: .5,
    type: 'foreground',
    direction: 'horizontal',
    transition: .5
    });
$('#cardDedication').paroller({
    factorXs: -.2,
    factorSm: -.2,
    factorMd: -.3,
    factorLg: -.2,
    factorXl: -.2,
    factor: -.5,
    type: 'foreground',
    direction: 'horizontal',
    transition: .5
    });
$('#cardCommunity').paroller({
    factorXs: .2,
    factorSm: .2,
    factorMd: .3,
    factorLg: .2,
    factorXl: .2,
    factor: .5,
    type: 'foreground',
    direction: 'horizontal',
    transition: .5
    });

$('#jumbotronMain').paroller();

$('#btnLoginHere').on('click', () => {
    // $('signUpContent').addClass('d-none');
    // $('loginContent').removeClass('d-none');
    $('#modalSignUp').modal('hide');
    $('#modalLogin').modal('show');
})
$('#btnRegisterHere').on('click', () => {
    // $('signUpContent').removeClass('d-none');
    // $('loginContent').addClass('d-none');
    $('#modalLogin').modal('hide');
    $('#modalSignUp').modal('show');

})