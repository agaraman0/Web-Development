// $('h1').on('mouseover',function(){
//     $('h1').css('color','red');
// })
$('h1').on('click',function(){
    $('h1').slideUp().slideDown().animate({opacity:0.5});
})
$('h1').on('click',function(){
    $('h1').slideUp().slideDown().animate({opacity:1});
})
