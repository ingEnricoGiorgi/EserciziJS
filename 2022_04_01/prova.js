//$('.benvenuto').css('color','green')
//$('#string').text()
//console.log($('#string').val())


$("#button").click(function(){
   let str = $("#string").val()
//   alert(str)
   $("p:contains("+str+")").css("background-color", "yellow");
  // $("p:contains(str)").css("background-color","#FFFF00")
})

$("p:last")
  .detach()
  .insertBefore("p:eq(2)")

  

$( "#button2" ).trigger( "click" ) //triggero il click e metto los fondo
$( "#button2" ).on("click", function() {
    $( this ).css("background-color","RED")
  });
  