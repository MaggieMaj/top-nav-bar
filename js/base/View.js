/*调用用法
var view = View('选择器')
*/

window.View = function(selector){
    return document.querySelector(selector)
}