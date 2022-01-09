(function ($) {
    "use strict";
    $(document).ready(function () {
        /*$('.mobile-menu-toggle').on('click', function () {
            $('.student-sidebar').addClass('show-sidebar');
            $('body').toggleClass('menu-has-opened');
        });
        $('.schedule-tabs .schedule-tab').on('click', function () {
            $('.time-table').hide();
            var dataId = $(this).data('id');
            $('#' + dataId).slideDown();
            $('.schedule-tabs .schedule-tab').removeClass('active');
            $(this).addClass('active');
        });*/

        //intro slider
        $('.main-slider').bxSlider({
            auto: true,
            autoControls: false,
            stopAutoOnClick: true,
            pager: false,
			nextText: '<i class="fa fa-angle-right"></i>',
 prevText: '<i class="fa fa-angle-left"></i>'
        });

    });
})(jQuery);