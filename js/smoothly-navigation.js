!function () {
  var view = View('nav.menu')
  var controller = {
    view:null,
    aTags:null,
    init: function(view){
      this.view = view  //首先记住这个view
      this.initAnimation() //去初始化动画
      this.bindEvents()  //去绑定事件
    },
    initAnimation: function(){
      function animate(time) {  //告诉tween多少毫秒动一次
        requestAnimationFrame(animate);  //求间隔的API
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    scrollToElement:function(element){
      let top = element.offsetTop
      let currentTop = window.scrollY //当前高度的像素值
      let targetTop = top - 80  //目标高度的像素值
      let s = targetTop - currentTop;
      var coords = { y: currentTop };   //设置的当前坐标的y是currentTop
      var t = Math.abs((s / 100) * 300)     //距离是100像素就用300毫秒走完，倍增，Math.abs求绝对值
      if (t > 500) { t = 500 }   //设置最长时间为500ms到位
      var tween = new TWEEN.Tween(coords)     //初始位置
        .to({ y: targetTop }, t)    //结束位置，滚动时长
        .easing(TWEEN.Easing.Quadratic.InOut)  //缓动函数，设置“加速减速加速”的缓动过程
        .onUpdate(function () {   //更新
          window.scrollTo(0, coords.y);  //每次变化要执行的代码
        })
        .start();   //开始计算，并执行上面function的代码
    },
    bindEvents:function(){
      let aTags = this.view.querySelectorAll('nav.menu > ul >li >a')//获取所有元素
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = (x)=>{
          x.preventDefault()
          let a = x.currentTarget
          let href = a.getAttribute('href')
          let element = document.querySelector(href)//只会获取到第一个元素
          this.scrollToElement(element)
        }
    }
  },
} 
controller.init(view)
}.call()  