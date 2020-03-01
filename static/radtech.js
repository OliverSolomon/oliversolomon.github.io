$(document).ready(function() {
    $menuicon = $('.right-nav ');
    $menuicon.click(function() {
        $('#menu-icon ').toggleClass('close ');
        $('.toggler ').toggleClass('hide ');

    });
    $loadingtime = 3000;
    console.log($loadingtime);

    $('.loading ').fadeOut($loadingtime);
    console.log($loadingtime / 2);

    window.setTimeout(function() { $('.main-container ').fadeIn(1200) }, $loadingtime / 2);
    clearTimeout(window);

})