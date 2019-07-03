!function () {
  var view = View('#mySlides')
  var controller = {
    view: null,
    swiper: null,
    swiperOptions: { loop: true, pagination: { el: '.swiper-pagination', },navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }, },
    init: function(view){
       this.view = view  //首先记住这个view
       this.initSwiper() //去初始化轮播
    },
    initSwiper:function(){
      this.swiper = new Swiper(
        this.view.querySelector('.swiper-container'),
        this.swiperOptions
     )
    }
  }
 controller.init(view)
}.call()

