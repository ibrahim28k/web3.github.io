$(function () {
    'use strict'
    $(window).scroll(function () {
        //window.console.log($('.navbar').height());
        //  window.console.log($(window).scrollTop());
        var navbar = $('.navbar');

        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled navbar-fixed-top');
        } else {
            navbar.removeClass('scrolled navbar-fixed-top');
        }
    });

    //Deal With Tabs
    $('.tab-switch li').click(function () {
        //Add Selected Class To Active Link
        $(this).addClass('selected').siblings().removeClass('selected');
        //Hide All Divs
        $('.tabs-section .tabs-content > div').hide();
        //Show Div Connected With This Link
        $($(this).data('class')).show();
    });
});
//window.console.log($(this).data('class'));
