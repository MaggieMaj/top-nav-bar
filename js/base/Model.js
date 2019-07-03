/*调用用法
var model = Model({
    resourceName:'表名'
})
*/
window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init:function(){ //初始化LeanCloud
            var APP_ID = '1agbukc2PcKHoU3EsbVg4Srt-gzGzoHsz'
            var APP_KEY = 'HNPhCtr4yyTDuMdISCBmBkif'       
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        fetch:function(){ //获取数据
            var query = new AV.Query(resourceName)
            return query.find()
        },
        save:function(object){ //创建数据
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)
        }
    }
}