$(document).ready(function() {
    $menuicon = $('.right-nav ');
    $menuicon.click(function() {
        $('#menu-icon ').toggleClass('close ');
        $('.toggler ').toggleClass('hide ');


    });
    $('.card').on('click', function() {
        $(this).toggleClass('switch');

    });

    $loadingtime = 4000;

    $('.loading ').fadeOut($loadingtime);


    window.setTimeout(function() { $('.main-container').fadeIn(1200) }, $loadingtime / 2);
    clearTimeout(window);

})