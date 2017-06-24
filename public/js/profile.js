//**** profile UI functionality *****


$("#previous-hangouts-list-head").on("click",function(){



    $("#photo-collection").hide();
    $("#memory-well").show();


})


    $("#photos-collection-head").on("click", function(){



$("#photo-collection").show();
    });






//***profile requests/data  ****

//wrap the below in a click function
$(".profile-view").on("click", function(){


//grab the id of the button clicked 
var updateIdFull = this.id

//slice it to get the number value

//store it in a variable to complete the call

        var updateId = updateIdFull.slice(13);


  $.get("/api/user_data").then(function(data) {

  	var user = data.email;
  	console.log(user);
  	console.log(updateId);


$.get("/api/profileText/" + user + "/" + updateId, function(data) {

console.log(data);
$("#memory-well").empty();
for(var a= 0; a<data.length; a++){


var entry = data[a].body;
console.log(entry);

var entryHold = $("<div>");
entryHold.addClass("entry-hold");
entryHold.append(entry);

$("#memory-well").append(entryHold);

//end of loop	
}

//end of get profile text request
})




//end of get user data request
  })


})
//grab friend last seen data by using the user name and grabbing all of the last seen with the 
//relevant update id