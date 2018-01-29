// $(document).foundation();

// var $grid = $('.grid').imagesLoaded(function () {
    // init Masonry after all images have loaded
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
// });  