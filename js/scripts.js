$(document).ready(function(){
  $("p").click(function(){
    $("img").show();
  });

// $(document).ready(function(){
//   $("p").click(function(){
//     $(".bottle-see").show();
//     $(".bottle-hide").hide();
//   });
// })

  $(".clickable").click(function() {
    $("#bottle-see").toggle();
    $(".bottle-hide").toggle();
  });



  $(".wallet-click").click(function() {
    $("#wallet-here").fadeToggle();
    $("#wallet-gone").fadeToggle();
  });
});
