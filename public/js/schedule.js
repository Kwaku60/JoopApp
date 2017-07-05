
// ==================================
// Basic Schedule Jumbo Functionality 
// ==================================


$(".add-to-sched").on("click",function(){

$("#friend-list-quick").show();

grabQuickFriendList();

});



$("#exit-friend-list-quick").on("click", function(){

$("#friend-list-quick").hide();

})

$("#exit-schedule").on("click", function(){

$("#schedule-jumbo").hide();

})

$("#view-schedule").on("click", function(){

	$("#schedule-jumbo").show();
})

// ================================
// Get Requests for Schedule Jumbo 
// ================================






function grabQuickFriendList(){

$("#friend-list-quick-well").empty();

	$.get("/api/user_data").then(function(data) {

var userName = data.email

$.get("/api/friends/" + userName, function(data) {

console.log(data);

	for(var a = 0; a<data.length; a++){

		 var nameHold = $("<div>");
		 nameHold.addClass("friend-list-name-item");
		 nameHold.append(data[a].name);
		 $("#friend-list-quick-well").append(nameHold);
	}

//end of get friends names request
})

//end of user data request 
})

//end of grabQuickFriendList function
}


