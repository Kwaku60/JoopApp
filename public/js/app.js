//Global Variables

//making counter for each friend div global, to store value.




//logout function

$("#logout-btn").on("click", function(){


window.location.href = "/logout";

})


// ======
//functionality for friend profile
// =====

$(".profile-view").on("click",function(){


	var profileIdFull = this.id;

//trim the id to get the value
	var profileId =  profileIdFull.slice(13);
	console.log(profileId);


//grab user name
grabFriendName(profileId);

	$("#jumbo").show();

});


$(".exit-profile").on("click", function(){


	$("#jumbo").hide();
})





