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
const addonList = 
[
  {name: "XL Length",price: 15},
  {name: "Glitter", price: 10},
  {name: "Paint", price: 10},
  {name: "French Tip", price: 5},
  {name: "Gems", price: 5},
  {name: "Plus removal",price:15},
  {name: "BIAB - NEW!!",price:10},
    {name: "Custom Designs",price:15}

];
var addons = [];
var serviceName = "";
var servicePrice = 0;

switch(select){
  case "acryl":
    serviceName = "Acrylics";
    servicePrice = 45;
    addons = [addonList[0],addonList[1],addonList[3],addonList[4],addonList[5],addonList[7]];
    break;
    case "mani":
      serviceName = "Manicure";
    servicePrice = 45;
    addons = [addonList[1],addonList[2],addonList[3]];
    break;
    case "gel":
      serviceName = "Gel";
    servicePrice = 35;
    addons = [addonList[1],addonList[2],addonList[3],addonList[6],addonList[7]];
    break;
    case "remove":
      serviceName = "Removal";
      servicePrice = 20;
}
  
    var added = 0;
    help = document.getElementById("test");

    let alist = document.getElementById("extras");
    let xselection = [];
    
    idVal = 0;
    addons.forEach((item) => {
      let li = document.createElement("li");
      
      li.innerHTML = "<input type='checkbox' id='"+idVal+"'><label for='"+item.name+"' >" + item.name + "</label>";
      alist.appendChild(li);
      idVal=idVal+1;
    });
    
    $('button.send').click(function(){    
      xselection = [];
      added = 0;

      $('input:checked').each(function() {
        xselection.push($(this).attr('id'));
    });       
   
    $('input:checked').each(function(){
      $(this).attr('checked',false);
    });
    
    let userAdd = [];
  for (let i = 0; i < xselection.length; i++) {
    var val = addons[xselection[i]];
    userAdd.push(val);
  }
  for(let k =0;k<userAdd.length;k++){
    added = added+userAdd[k].price;
  }
var bService = {
    name: serviceName,
    price: servicePrice,
    extras: userAdd,
    totalPrice: servicePrice+added
  };
        help.innerHTML= "added is now <br>"+bService.name+"<br>"+bService.extras[0].name+"thast name <br>"+added+"<br> total price  a- "+bService.totalPrice;
});



  //the data is all there, i just need 