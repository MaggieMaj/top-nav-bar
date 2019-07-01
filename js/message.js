!function(){
    var view = document.querySelector('section.message')

    var model = {
        init:function(){ //初始化AV
            var APP_ID = '1agbukc2PcKHoU3EsbVg4Srt-gzGzoHsz'
            var APP_KEY = 'HNPhCtr4yyTDuMdISCBmBkif'       
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        //获取数据
        fetch:function(){
            var query = new AV.Query('Message')
            return query.find()//find是一个promise对象
        },
        //创建数据
        save:function(name,content){
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({   //save返回一个promise对象
                'name':name,
                'content': content
            })
        }
    }

    var controller = {
        view:null,
        model:null,
        messageList:null,
        init:function(view,model){
            this.view = view
            this.model = model


            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.model.init()//初始化model
            this.loadMessages()//加载message
            this.bindEvents()//绑定点击事件
        },

        loadMessages:function(){
            this.model.fetch().then(
                (messages) => {
                  let array = messages.map((item)=>item.attributes)
                  array.forEach((item)=>{//遍历
                    let li = document.createElement('li')//创建元素li
                    li.innerText = `${item.name}:${item.content}`//把项目的内容一一展示在li里面
                    this.messageList.append(li)//把li插到页面里的messageList
                  })
                }
            )           
        },
        bindEvents:function(){
            //监听用户form表单的submit按钮，如果用户点击了，就把用户的内容存到message里面
            this.form.addEventListener('click',(e) => {  
                e.preventDefault()//阻止默认事件（阻止刷新页面）
                this.saveMessage()
            })
        },
        saveMessage:function(){
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value//查找元素获取value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name,content).then(function(object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}:${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.append(li)
                myForm.querySelector('input[name=content]') = ''//清空内容
            })
        },
    }
    controller.init(view,model)
}.call()

