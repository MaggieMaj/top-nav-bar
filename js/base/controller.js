/*调用用法
Controller({
    init:(){
        this.view
        this.model
        this.xxx()
        this.yyy()
    },
    xxx()
    yyy()
})
*/

window.Controller = function(options){//用户给我传你自己的init，我调用完我的init，我再调用你的init
    var init = options.init//一部分是 必须所有都要执行的，另一部分是你自己的
    
    let object = {//我们需要把options传来的所有属性都放在下面这个对象上
        view:null,
        model:null,
        init:function(view,model){  //（初始化函数）
          this.view = view  
          this.model = model
          this.model.init()
          init.call(this,view,model)//先执行init----闭包，this就是object
          this.bindEvents.call(this)//再执行bindEvents
        },  
    }
    //把options的所有东西都复制到object上，除了init
    for(let key in options){
        if(key !== 'init'){
            object[key] = options[key]
        }
    }
    return object
}