function cursorEffect() {
    var playreel = document.querySelector('#cursor')
var pageContent1 = document.querySelector('#page1-content')

// pageContent1.addEventListener('mousemove',function(event){
//       playreel.style.zIndex = 5 ;
//       playreel.style.left = event.x+'px';
//       playreel.style.top = event.y+'px'
//     //   console.log(event.x + '' +  event.y)
// })

pageContent1.addEventListener('mousemove',function(event){
      gsap.to(playreel,{
        x:event.x,
        y:event.y
      })
})

pageContent1.addEventListener('mouseenter',function(event){
    gsap.to(playreel,{
       scale:1,
       opacity:1
      })
})


pageContent1.addEventListener('mouseleave',function(event){
    gsap.to(playreel,{
        scale:0
        ,opacity:0
      })
})


}

cursorEffect()
