!function(){
  //添加 offset 类
let specialTags = document.querySelectorAll('[data-x]')
for(let i=0;i<specialTags.length;i++){
  specialTags[i].classList.add('offset')
}

  findClosestAndRemoveOffset()
  window.addEventListener('scroll',function(x){
    if(window.scrollY > 0){
      topNavBar.classList.add('sticky')
    }else{
      topNavBar.classList.remove('sticky')
    }
    findClosestAndRemoveOffset()
  })

  /*helper*/
function findClosestAndRemoveOffset(){
let specialTags = document.querySelectorAll('[data-x]')
let minIndex = 0
for(let i=1;i < specialTags.length;i++){   //先默认第一个是最小的，让它跟每一个去比，直到比出一个最小的，让它作为minIndex
  if(Math.abs(specialTags[i].offsetTop-window.scrollY) < Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
    minIndex = i
  }
}  
//minIndex就是离窗口顶部最近的元素
specialTags[minIndex].classList.remove('offset')
/*for(let i=0;i<specialTags.length;i++){
  specialTags[i].classList.remove('active')
}
specialTags[minIndex].classList.add('active')下面active变更成highli后，删除*/
let id = specialTags[minIndex].id
let a = document.querySelector('a[href="#' + id + '"]')
let li = a.parentNode
let brothersAndMe = li.parentNode.children
for(let i = 0;i<brothersAndMe.length;i++){
  brothersAndMe[i].classList.remove('highlight')
}
li.classList.add('highlight') 
}
}.call()