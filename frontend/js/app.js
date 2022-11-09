
$('#menuList').hover(() => {
    $('#dropdownMenu').toggleClass('show')
});

$('#imgIrish').hover(() => {
    $('#divViewPopItem1').toggleClass('d-none');
})
$('#cardFavItemThree').hover(() => {
    $('#imgIrish3').toggleClass('d-none');
    $('#anchorFavItem3').toggleClass('d-none');
    $('#fav3Title').toggleClass('d-none');
})

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


// async function loginUser() {
//     try {
//         const user = await fetch('../api/user/login');
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     }
// }

$('#btnLogin').on('click', () => {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: $('#txtEmail').val(),
            password: $('#txtPassword').val()
        })
    }).then(res => {return res.text()})
    .then(data => console.log(data))
    .catch(error => console.log(error))
})