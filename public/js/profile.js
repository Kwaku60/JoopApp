//**** profile UI functionality *****

var user;

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

  	 user = data.email;
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

return user;


//end of get user data request
  })




var uploadHold = $("#friend-photo-" + updateId);
console.log(uploadHold);
var upload = uploadHold[0].src;


$("#profile-friend-image-actual").attr("src", upload);
//end of profileView onClick
})



















// =====

//profile images functionality


// =====


//re-write: .logo click

//grab this.id (which will be logoupload-1 or logoupload-2 etc.)
//this.id.trigger("click");


$(".logo").click(function(){

var relevantPhotoId = this.id;


console.log(relevantPhotoId);
//grab the id value for storage in the database
		var IdValue = relevantPhotoId.slice(13)
		// console.log(IdValue);


var relevantPhoto = document.getElementById(relevantPhotoId);

// console.log(relevantPhoto);
// console.log(relevantPhoto.nextSibling.id);
var relevantInputId = relevantPhoto.nextSibling.nextSibling.nextSibling.id;

var relevantInput = document.getElementById(relevantInputId);  
console.log(relevantInput);

relevantInput.click();


// relevantInput.change(function(e){
	relevantInput.addEventListener("change", function(e){

 var reader = new FileReader(),
           files = e.dataTransfer ? e.dataTransfer.files : e.target.files,
            i = 0;

            reader.onload = onFileLoad;

             while (files[i]) reader.readAsDataURL(files[i++]);

})


	




 function onFileLoad(e) {
                        var data = e.target.result;
                        var binaryValue = data;
                          relevantPhoto.setAttribute("src",data);
                          // console.log(data)
                          //the data is the binary version of the image.
                          //Upload the image to the database
                           //Save data on keydown
                            // $.post('test.php',

//grab user info in order to store to the database
	$.get("/api/user_data").then(function(data) {

  	var user = data.email;
  	console.log(user);
  	
//create an object to send to database to prepare for posting

                            var ProfilePhotoData = {

                            	image: binaryValue,
                            	updateId: IdValue,
                            	userEmail: user
                            }
                           

 $.post("/api/profilePhoto", ProfilePhotoData, function() {


                // window.location.href = "/members";
        
                       


                        
                     console.log("photo saved to database");



})




//have a get request for profilePhoto which you call on page load with the others. 
//set the photo source as the binary value

//end of get user info request
  })


}



//end of logo onClick function 
});


