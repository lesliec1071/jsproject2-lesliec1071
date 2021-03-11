$.ajax({
    url: 'https://data.cityofnewyork.us/resource/f7b6-v6v3.json',
    dataType: 'json',
    success: function(data) {
        var choice = prompt("What health facility are you looking for? Choose 1-4 (Child Health Center, Diagnostic & Treatment Center, Acute Care Hospital, Nursing Home)");
        if(choice==1){     // lines 6-14 are coding for storing the User's choice based on the prompt above. 
            choice="Child Health Center";
        }else if (choice==2){
            choice="Diagnostic & Treatment Center";
        }else if (choice==3){
            choice="Acute Care Hospital";
        }else if (choice==4){
            choice="Nursing Home";
        }
    for(var i = 0; i < data.length; i++){
        if(data[i].facility_type==choice){
            document.write("There is a " + choice + " called "+ data[i].facility_name + " in " + data[i].borough + ". " + "<br>" ); // Prints out the result of the facility type, borough and name of a facility. 
        }

    }
    }
});
