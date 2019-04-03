$(document).ready(
  function(){
      var $louiElement = $("#lvlogo")
      scrollAnimation(
          cloneLouiMouse,
          'mousemove',
          $louiElement,
          0, 
          0, 
          "px"
      )
  }
)

function scrollAnimation(animation,trigger,elm,l,t,u) {
  var start = null    
  $(window).on(
      trigger, 
      function(event){
          window.requestAnimationFrame(
              function(timestamp){
                  if(!start) start = timestamp
                  var progress = timestamp - start
                  animation(event,elm,l,t,u)
              }
          )
      }
  )
}

function cloneLouiMouse(event,elm,l,t,u){
  var $clone = elm.clone()
    .css({
      left: (event.pageX + l) + u,
      top: (event.pageY + t) + u
    })
    .attr("id", null)
    .hide()
  $("body").append($clone)
  $clone.fadeIn(100)
  $clone.fadeOut(1000)
}


