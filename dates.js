const months = ["January", "February", "March", "April", "May", 
"June", "July", "August", "September", "October", "November", "December"];



$("#conf").click(function(){
    var d = new Date($("#datee").val());
datee = d.getDate() + " "+ months[d.getMonth()]+ " "+ d.getFullYear();
     //val not value

    var t = $("#timee").val();
        $("#apptdate").text(datee);
        $("#apptime").text(t);
        final = datee +", "+t;
        $("#conf").text("confirm") //if done correct...check for undeffined

    });

    sessionStorage.setItem("date")
    //gonna hand it in late idk
//    2 days is FileSystemEntry. i'm disappointed in myself but i need to rest