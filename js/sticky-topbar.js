!function () {
  var view = View('#topNavBar')
  var controller = {
    view:null,
    init:function(view){  //（初始化函数）
      this.view = view  //首先记住这个view
      this.bindEvents()  //去绑定事件
      //this.bindEvents.call(this)
    },
      bindEvents:function(){ //绑定事件
        var view = this.view
        window.addEventListener('scroll', (x)=>{
          if (window.scrollY > 0) {
            this.active()
          } else {
            this.deactive()
          }
        })//箭头函数没有this
      },
        active:function(){
          this.view.classList.add('sticky')
        },
        deactive:function(){
          this.view.classList.remove('sticky')
        }
}
controller.init(view)
  //controller.init.call(controller,view)
  }.call()
