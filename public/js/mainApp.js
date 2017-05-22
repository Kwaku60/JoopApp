
// ** note 
// to append text to a textbox must use "inserttext", look up on google 

// turn the name into an input or textbox with a very tiny button on the top right 
// cornver of the div. 

// **







//get request to get logged in user data 

  $.get("/api/user_data").then(function(data) {

var userName = data.email

getLastPosts(userName);

getNextPosts(userName);

//end of get user data request
  });



function getLastPosts(userName){


//get request to grab all of the FriendNames from the database based on the username

		//loop through each associated LastSeen store the data.buttonId value in a variable. 


	//get request to grab all of the LastSeen posts from database based on the username

		//loop through each associated LastSeen store the data.buttonId value in a variable. 

			//use this variable to grab the correct textbox and append the data[i].post value to it
				// getElementById("LastSeenDiv" + data[i].buttonId)



}


	







// Function to get nextposts(userName) 

// {	//get request to grab all of the NextSee posts from database based on the username


	//loop through each associated NextSeen store the data.buttonId value in a variable

		//use this variable to grab the correct textbox and append the data.post value to it
// 				getElementById("NextSeenDiv" + data[i].buttonId)

// }





//update last on submit 

	//grab the textbox value that has the same id as the update button
	//create an object with the textbox value, username, and button id (this.id) 

	//send it as a json object to the last seen post route to store it in the database.


//update next on submit 

	//grab the textbox value that has the same id as the update next button
	//create an object with the textbox value, username, and button id (this.id) 

	//send it as a json object to the next seen post route to store it in the database.


