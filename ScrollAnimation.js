$(document).ready(
    function(){
      var $louiElement = $("#lvlogo")
      scrollAnimation(
        cloneLouiScroll,
        'scroll',
        $louiElement,
        function(){return(Math.random() * 100)}, 
        function(){return(Math.random() * 100)}, 
        "%"
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
  
  function cloneLouiScroll(event,elm,l,t,u){
    if(typeof l == 'function') l = l()
    if(typeof t == 'function') t = t()
    var $clone = elm.clone()
      .css({
        left: l + u,
        top: t + u
      })
      .attr("id", null)
      .hide()
    $("body").append($clone)
    $clone.fadeIn(100)
    $clone.fadeOut(1000)
  }