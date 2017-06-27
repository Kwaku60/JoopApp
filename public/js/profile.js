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


















// =====

//profile images functionality


// =====


//re-write: .logo click

//grab this.id (which will be logoupload-1 or logoupload-2 etc.)
//this.id.trigger("click");


$(".logo").click(function(){

var relevantPhotoId = this.id;
console.log(relevantPhotoId);

var relevantPhoto = document.getElementById(relevantPhotoId);

var relevantInputId = relevantPhoto.nextSibling.nextSibling.id;

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
                          relevantPhoto.setAttribute("src",data);
                          // console.log(data)
                          //the data is the binary version of the image.
                          //Upload the image to the database
                           //Save data on keydown
                            $.post('test.php',

                                {data:relevantPhoto.getAttribute("src")},


                                function(){


                                //save data with updateId and User email

                                //this way when they sign in we can load all of the photos. and append it to the relevant divs. When view profile is selected, use this to match the update Id and grab the relevant photos. 

                                //load all photos associated with userEmail AND friend update div and appen it into the photos. 

                            });
                            }







})








//original logic



// $('img#logo').click(function(){                           
//     $('#logoupload').trigger('click');
//     $('#logoupload').change(function(e){

//       var reader = new FileReader(),
//            files = e.dataTransfer ? e.dataTransfer.files : e.target.files,
//             i = 0;

//             reader.onload = onFileLoad;

//              while (files[i]) reader.readAsDataURL(files[i++]);

//               });

//                 function onFileLoad(e) {
//                         var data = e.target.result;
//                           $('img#logo').attr("src",data);
//                           // console.log(data)
//                           //the data is the binary version of the image.
//                           //Upload the image to the database
//                            //Save data on keydown
//                             $.post('test.php',

//                                 {data:$('img#logo').attr("src")},


//                                 function(){


//                                 //save data with updateId and User email

//                                 //this way when they sign in we can load all of the photos. and append it to the relevant divs. When view profile is selected, use this to match the update Id and grab the relevant photos. 

//                                 //load all photos associated with userEmail AND friend update div and appen it into the photos. 

//                             });
//                             }

//                         });
