$('.menu').click(function () {
    $('.menu').css('opacity', '0')
    // 讓選單出現
    $('.mb-menu').css('display', 'flex')

})


$('.error').click(function () {
    $('.menu').css('opacity', '1')

    // 讓選單消失
    $('.mb-menu').css('display', 'none')

})


