  $("a.selection").click(function(){
  var select = $(this).attr('id');    
  $(this).html(select);  
  sessionStorage.setItem("selection",select);

  });
  /*
  Variables declared by let are only available inside the block where they're defined.
   Variables declared by var are available throughout the function in which they're declared
  */
  //then store the id
 //you should check this tbh because we need to back and change it accordingly

  //the data is all there, i just need 