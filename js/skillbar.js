/**
 * Created by namai on 5/26/2017.
 */
// $(document).ready(function(){
//     $('.skillbar').each(function(){
//         $(this).find('.skillbar-bar').animate({
//             width:jQuery(this).attr('data-percent')
//         },5000);
//     });
// });
//
// $(document).ready(function(){
//     $(".nav-tabs a").click(function(){
//         $(this).tab('show');
//     });
// });

$(function() {
    var oTop = $('#skill-bar').offset().top - window.innerHeight;
    $(window).scroll(function(){

        var pTop = $('body').scrollTop();
        console.log( pTop + ' - ' + oTop );   //just for your debugging
        if( pTop > oTop ){
            start_count();
        }
    });
});

function start_count(){

    $(document).ready(function(){
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },5000);
        });
    });

    $(document).ready(function(){
        $(".nav-tabs a").click(function(){
            $(this).tab('show');
        });
    });
}