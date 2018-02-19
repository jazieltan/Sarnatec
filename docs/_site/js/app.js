
$(document).ready(function(){
  var tEffect = Barba.BaseTransition.extend({
    start: function(){
      this.newContainerLoading.then( val => this.fadeInNew($(this.newContainer)));
    },
    fadeInNew: function(nc) {
      nc.hide();
      var _this = this;

      $(this.oldContainer).fadeOut(700).promise().done(() => {
        nc.css('visibility', 'visible');
        nc.fadeIn(700, function(){
          _this.done();
        })
      });
    }
  });
  Barba.Pjax.getTransition = function() {
    return tEffect;
  }
  Barba.Pjax.start();
});
$(document).foundation();
// check for imageLoaded dependency
if ( typeof imagesLoaded == 'function' ) {
  // Masonry init
  var grid = document.querySelector('.grid');

  //Check if images are loged
  imagesLoaded( grid, function() {
    //if images are loaded run Masonry init
    var msnry = new Masonry( grid,{
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
  });
}
