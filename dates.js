const months = ["January", "February", "March", "April", "May", 
"June", "July", "August", "September", "October", "November", "December"];

$("#conf").text("OKAY");

apS = sessionStorage.getItem("serviceDetails")
aService = JSON.parse(apS);
$(".price").text("total: £"+aService.totalPrice+".00");



$("#conf").click(function(){
    if($(this).text()!="CONFIRM"){
        var d = new Date($("#datee").val());
        datee = d.getDate() + " "+ months[d.getMonth()]+ " "+ d.getFullYear();
     //val not value

    var t = $("#timee").val();
        $("#apptdate").text(datee);
        $("#apptime").text(t);
        final = datee +", "+t;
if(d!="Invalid Date"){
            $("#conf").text("CONFIRM");
        }   //if done correct...check for undeffined
    }
    else{
               $("#conf").attr("href","confirmbook.html");

    }
        sessionStorage.setItem("appt",final);


    });
