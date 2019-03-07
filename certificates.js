$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".photos li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  });

  $("#myInput").keydown(function(){
    $("#myInput").css("background-color", "#7B68EE");
    $("#myInput").css("color", "#fff");  
  });
  $("#myInput").keyup(function(){
    $("#myInput").css("background-color", "	#48D1CC");
    $("#myInput").css("color", "#fff");  
  });    
});

