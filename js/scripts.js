$(document).ready(function(){
  $("p").click(function(){
    $("img").show();
  });
});
// $(document).ready(function(){
//   $("p").click(function(){
//     $(".bottle-see").show();
//     $(".bottle-hide").hide();
//   });
// })
$(document).ready(function() {
  $("p").click(function() {
    $(".bottle-see").toggle();
    $(".bottle-hide").toggle();
  });
});
