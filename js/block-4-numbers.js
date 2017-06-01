/**
 * Created by namai on 5/26/2017.
 */
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// $(function() {
//     var oTop = $('.numbers').offset().top - window.innerHeight;
//     $(window).scroll(function(){
//
//         var pTop = $('body').scrollTop();
//         console.log( pTop + ' - ' + oTop );
//         if( pTop > oTop ){
//             start_count();
//         }
//     });
// });
//
// function start_count(){
//
//     $('.count').each(function () {
//         $(this).prop('.Counter',0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 4000,
//             easing: 'swing',
//             step: function (now) {
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
// }

