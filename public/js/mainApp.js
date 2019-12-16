
// ** note 
// to append text to a textbox must use "inserttext", look up on google 

// turn the name into an input or textbox with a very tiny button on the top right 
// cornver of the div. 

// **

// Global function for inserting text into text area 

function insertContent(myField, myValue) {
    //IE support

    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
    }
    //MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
            + myValue
            + myField.value.substring(endPos, myField.value.length);
    } else {
        myField.value += myValue;
    }
}







//get request to get logged in user data 

  $.get("/api/user_data").then(function(data) {

var userName = data.email

getFriendNames(userName);

// getProfilePhotos(userName);

updateName(userName);

getLastPosts(userName);

updateLast(userName);

getNextPosts(userName);

updateNext(userName);

//end of get user data request
  });


//get friends function
function getFriendNames(userName){

//get request to grab all of the FriendNames from the database based on the username
$.get("/api/friends/" + userName, function(data) {


	// loop through data and append to relevant div

	for(var a = 0; a<data.length; a++){

		var placer = data[a].updateId
		var content = data[a].name

		var container = document.getElementById("friend-name-" + data[a].updateId)

		container.value = ""


		insertContent(container, content);
	}

//end of get friends request
  });


//end of get friends function
}


function getProfilePhotos(userName){


$.get("/api/profilePhoto/" + userName, function(data){

console.log("grabbing pro pics");


    for(var a = 0; a<data.length; a++){

        var placer = data[a].updateId
        var photoBinary = data[a].image

        var photoHold = document.getElementById("friend-photo-" + placer);

       photoHold.setAttribute("src", photoBinary);

//set the source of the photo
     
     //end of loop  
    }








 // end of get profile photos request   
})





//end of get Profile Photos function
}














function getLastPosts(userName){

$.get("/api/last/" + userName, function(data) {

			// alert("getting last");

	//loop through each associated LastSeen store the data.buttonId value in a variable.
	for(var b=0; b<data.length; b++){

		var placer = data[b].updateId

		var container = document.getElementById("last-text-" + placer)

		var content = data[b].body

		container.value = ""

		insertContent(container, content);

	//end of for loop	
	} 


//end of last seen posts get reqeust 
})


//end of get last function
}



function getNextPosts(userName){

$.get("/api/next/" + userName, function(data) {

			// alert("getting next");

	//loop through each associated NextSeen store the data.updateId value in a variable.
	for(var c=0; c<data.length; c++){

		var placer = data[c].updateId

		var container = document.getElementById("next-text-" + placer)

		var content = data[c].body



//empty textbox before appending somehow 

		container.value = ""

		insertContent(container, content);


	//end of for loop	
	} 


//end of next seen posts get reqeust 
})


//end of get next function
}



function updateName(userName) {

	// alert("update name function running");
    //update name on submit/ on click
    $(".name-update").on("click", function() {

	// alert("updating name");

        console.log(this.id)
        var IdValue = this.id
        console.log(IdValue);

        var IdIntegerValue = IdValue.slice(12);

        console.log(IdIntegerValue);

        var updateNameContainer = document.getElementById("friend-name-" + IdIntegerValue);

        console.log(updateNameContainer);

        var updatedName = updateNameContainer.value;

        console.log(updatedName);


        var newName = {

            name: updatedName,

            userEmail: userName,

            updateId: IdIntegerValue
        }



        function submitName() {
//***JULY EDIT***
// route to destroy existing friends in that position

 var param1 = newName.userEmail;
 var param2 = newName.updateId;



//create shortcut for delete
$.delete = function(url, data, callback, type){
 
  if ( $.isFunction(data) ){
    type = type || callback,
        callback = data,
        data = {}
  }
 
  return $.ajax({
    url: url,
    type: 'DELETE',
    success: callback,
    data: data,
    contentType: type
  });
}





$.delete("/api/friendsClear/" + param1 + "/" + param2, function(data){


});



	// alert("submitting name");
            //post the newName object to the database to the FriendNames table 
            $.post("/api/friends", newName, function() {
                // window.location.href = "/members";
            });

            //end of submitName function        
        }

        // calling function
        submitName(newName);
// alert("updated!");
  $("#update-confirm").delay(250).show().delay(800).hide("fade",400);
        //end of update-name on click listener
    })

    //end of updateName function 	
}

















function updateLast(userName) {


    //update name on submit/ on click
    $(".last").on("click", function() {


        console.log(this.id)
        var IdValue = this.id
        console.log(IdValue);

        var IdIntegerValue = IdValue.slice(12);

        console.log(IdIntegerValue);

        var updateLastContainer = document.getElementById("last-text-" + IdIntegerValue);



        var updatedLast = updateLastContainer.value;

        console.log(updatedLast);


        var newLastPost = {

            body: updatedLast,

            userEmail: userName,

            updateId: IdIntegerValue
        }

 $("#update-confirm").delay(250).show().delay(800).hide("fade",400);

        function submitLast() {
	

            //post the newLastPost object to the database to the LastSee table 
            $.post("/api/last", newLastPost, function() {
               
            });

            //end of submitName function        
        }

        // calling function
        submitLast(newLastPost);

        //end of update-last on click listener
          $("#update-confirm").delay(250).show().delay(800).hide("fade",400);
    })

    //end of updateLast function 


};








function updateNext(userName) {
// alert("updateNext function");

    //update name on submit/ on click
    $(".next").on("click", function() {

// alert("updatenext on click");

        console.log(this.id)
        var IdValue = this.id
        console.log(IdValue);

        var IdIntegerValue = IdValue.slice(12);

        console.log(IdIntegerValue);

        var updateNextContainer = document.getElementById("next-text-" + IdIntegerValue);

        console.log(updateNextContainer);

        var updatedNext = updateNextContainer.value;

        console.log(updatedNext);


        var newNextPost = {

            body: updatedNext,

            userEmail: userName,

            updateId: IdIntegerValue
        }

 $("#update-confirm").delay(250).show().delay(800).hide("fade",400);

        function submitNext() {

// alert("submitting next");
            //post the newLastPost object to the database to the LastSee table 
            $.post("/api/next", newNextPost, function() {
                window.location.href = "/members";
            });

            //end of submitName function        
        }

        // calling function
        submitNext(newNextPost);


        //end of update-next on click listener
       
    })

    //end of updateNext function 	
};



// ================
// smaller features
// ================



$(".uploaded-profile").mouseenter (function(){

$(".upload-msg").css("visibility","visible")
 


    });


     $(".uploaded-profile").mouseleave (function(){

$(".upload-msg").css("visibility","hidden"); 

    });


