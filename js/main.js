$(document).ready(function () {
    $('body').on('click', '.faq-item-question', function () {
        var isOpen = $(this).parent().hasClass('active');
        console.log('!')
        if (isOpen) {
            $(this).next().slideUp(250);
            $(this).parent().removeClass('active')
        } else {
            $(this).next().slideDown(250);
            $(this).parent().addClass('active');
        }
    });

    var $featuredContainer = $('#featured-container');
    var $featuredOuter = $featuredContainer.find('.featured-items');
    var $featuredInner = $featuredContainer.find('.featured-inner');

    $('body').on('click', '.featured-back', function () {
        console.log('!')
        var $items = $featuredInner.find('.featured-item');
        var currentLeft = parseInt($featuredInner.css('left'));

        if (currentLeft < 0) {
            $featuredInner.css('left', (currentLeft + $items.first().width() + 25) + 'px')
        }
    });

    $('body').on('click', '.featured-forward', function () {
        var $items = $featuredInner.find('.featured-item');
        var isMoreItems = false;
        var containerWidth = $featuredOuter.width();
        var containerOffset = $featuredOuter.offset();
        var currentLeft = parseInt($featuredInner.css('left'));
        
        for (var i = 0; i < $items.length; i++) {
            var $current = $($items[i]);
            var currentWidth = $current.width();
            var currentPos = $current.position();
            var currentOffset = $current.offset();

            if (currentOffset.left + currentWidth > containerOffset.left + containerWidth) {
                isMoreItems = true;
                break;
            }
        }

        if (isMoreItems) {
            $featuredInner.css('left', (currentLeft - currentWidth - 25) + 'px')
        }
    });
})