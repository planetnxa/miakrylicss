apptDate= sessionStorage.getItem("appt");

apS = sessionStorage.getItem("serviceDetails")
aService = JSON.parse(apS);
$("#apptdate").text(apptDate);
$("#apptdeets").text(aService.name);
