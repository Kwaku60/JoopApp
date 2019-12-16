
function grabFriendName(profileId){
	//use the passed profile idvalue to grab the friend name from the relevant textbox
	var friendNameContain = $("#friend-name-" + profileId);
	//grab the inner html 
	var friendName = friendNameContain[0].value;
	var profileViewName = $("#profile-friend-name");
	$("#profile-friend-name").empty();
	$("#profile-friend-name").append(friendName);
}
//have a let variable be 0


// var friendCountA = 0;
// var friendCountB = 0;
// var friendCountC = 0;
// var friendCountD = 0;
// var friendCountE = 0;
// var friendCountF = 0;
// var friendCountG = 0;
// var friendCountH = 0;
// var friendCountI = 0;
// var friendCountJ = 0;
// var friendCountK = 0;
// var friendCountL = 0;
// var friendCountM = 0;
// var friendCountN = 0;
// var friendCountO = 0;



// //on-click event for friend seen counter increment button 

// $("#add-int-1").on("click", function(){

// var display = $("#times-seen-display-1");

// friendCountA++;

// //passing the relevant display div and the relevant friend counter value
// displayValue(display, friendCountA);

// });

// $("#add-int-2").on("click", function(){

// var display = $("#times-seen-display-2");
// friendCountB++;

// displayValue(display,friendCountB);

// });

// $("#add-int-3").on("click", function(){

// var display = $("#times-seen-display-3");
// friendCountC++;

// displayValue(display, friendCountC);

// });

// $("#add-int-4").on("click", function(){

// var display = $("#times-seen-display-4");
// friendCountD++;

// displayValue(display, friendCountD);

// });

// $("#add-int-5").on("click", function(){

// var display = $("#times-seen-display-5");
// friendCountE++;

// displayValue(display, friendCountE);

// });

// $("#add-int-6").on("click", function(){

// var display = $("#times-seen-display-6");

// friendCountF++;
// displayValue(display, friendCountF);

// });

// $("#add-int-7").on("click", function(){

// var display = $("#times-seen-display-7");

// friendCountG++;
// displayValue(display, friendCountG);

// });

// $("#add-int-8").on("click", function(){

// var display = $("#times-seen-display-8");

// friendCountH++;
// displayValue(display, friendCountH);

// });

// $("#add-int-9").on("click", function(){

// var display = $("#times-seen-display-9");

// friendCountI++;
// displayValue(display, friendCountI);

// });

// $("#add-int-10").on("click", function(){

// var display = $("#times-seen-display-10");

// friendCountJ++;
// displayValue(display, friendCountJ);

// });

// $("#add-int-11").on("click", function(){

// var display = $("#times-seen-display-11");

// friendCountK++;
// displayValue(display, friendCountK);

// });

// $("#add-int-12").on("click", function(){

// var display = $("#times-seen-display-12");

// friendCountL++;
// displayValue(display, friendCountL);

// });


// $("#add-int-13").on("click", function(){

// var display = $("#times-seen-display-13");

// friendCountM++;
// displayValue(display, friendCountM);

// });


// $("#add-int-14").on("click", function(){

// var display = $("#times-seen-display-14");

// friendCountN++;
// displayValue(display, friendCountN);

// });


// $("#add-int-15").on("click", function(){

// var display = $("#times-seen-display-15");

// friendCountO++;
// displayValue(display, friendCountO);

// });
//click handler for every incremement button
$(".add-int").on("click", function(){
	let incrementingItem = $(this);
	let newCount = $(this).data("count") ++;
	console.log(newCount);
	//run display count function after increment
	displayCount(incrementingItem, newCount);

})



function displayCount(incrementingItem, newCount){
	incrementingItem.getAttribute("value").empty().append(newCount);
}


displayCountForAll();
//run this function on page load and with each button click. 
function displayCountForAll(){
//times seen display-, increment untul twelve. for each get the value of data-count and display it in the correct text field
//empty and append

for(var i = 0; i<=15; i++){
	console.log($("#times-seen-display-"+i));
	let count = $("#times-seen-display-"+i).data("count");
	console.log(count);
	let countDisplayed = $("#times-seen-display-" +i).getAttribute("value");
	console.log(countDisplayed);
	//update the text to contain this count.
	if(count == countDisplayed){
		return;
	} else{
		countDisplayed.empty().append(count);

	}
}



}



//step two, add to the button click handler functionality where the data-count is updated and the text box is if there

// function displayValue(display, friendCount){

//fix: right now meeting count doesn't distinguish which button is clicked. 
//every time the function runs the display value will increase
//inside of whichever div you happen to be clicking

//while true
//for each (object), display 

   
// switch(friendCount){
// 	case 1:
// display.empty();
// display.append("One");

// //update number view
// //css div color change
// break;

// case 2:
// display.empty();
// display.append("Two");

// //update number view
// //css div color change
// break;


// case  3:
// display.empty();
// display.append("Three");

// //update number view
// //css div color change
// break;


// case  4:
// display.empty();
// display.append("Four");

// //update number view
// //css div color change
// break;


// case  5:
// display.empty();
// display.append("Five");

// //update number view
// //css div color change
// break;


// case  6:
// display.empty();
// display.append("six");

// //update number view
// //css div color change
// break;



// case  7:
// display.empty();
// display.append("seven");

// //update number view
// //css div color change
// break;


// case  8:
// display.empty();
// display.append("eight");

// //update number view
// //css div color change
// break;



// case  9:
// display.empty();
// display.append("nine");

// //update number view
// //css div color change
// break;



// case  10:
// display.empty();
// display.append("ten");

// //update number view
// //css div color change
// break;



// case  11:
// display.empty();
// display.append("eleven");

// //update number view
// //css div color change
// break;


// case  12:
// display.empty();
// display.append("twelve");

// //update number view
// //css div color change
// break;


// case  13:
// display.empty();
// display.append("thirteen");

// //update number view
// //css div color change
// break;


// case  14:
// display.empty();
// display.append("fourteen");

// //update number view
// //css div color change
// break;


// case  15:
// display.empty();
// display.append("fifteen");

// //update number view


// //css div color change
// //this will be the final color. afterwards will be the same. 
// break;

// case  16:
// display.empty();
// display.append("sixteen");

// //update number view


// //css div color change
// break;

// case  17:
// display.empty();
// display.append("seventeen");

// //update number view


// //css div color change
// break;


// case  18:
// display.empty();
// display.append("eighteen");

// //update number view


// //css div color change
// break;

// case  19:
// display.empty();
// display.append("nineteen");

// //update number view


// //css div color change
// break;


// case  20:
// display.empty();
// display.append("twenty");

// //update number view


// //css div color change
// break;


// case  21:
// display.empty();
// display.append("twenty-one");

// //update number view


// //css div color change
// break;


// case  22:
// display.empty();
// display.append("twenty-two");

// //update number view


// //css div color change
// break;


// case  23:
// display.empty();
// display.append("twenty-three");

// //update number view


// //css div color change
// break;

// case  24:
// display.empty();
// display.append("twenty-four");

// //update number view


// //css div color change
// break;

// case  25:
// display.empty();
// display.append("twenty-five");

// //update number view


// //css div color change
// break;

// case  26:
// display.empty();
// display.append("twenty-six");

// //update number view


// //css div color change
// break;

// case  27:
// display.empty();
// display.append("twenty-seven");

// //update number view


// //css div color change
// break;

// case  28:
// display.empty();
// display.append("twenty-eight");

// //update number view


// //css div color change
// break;

// case  29:
// display.empty();
// display.append("twenty-nine");

// //update number view


// //css div color change
// break;

// case  30:
// display.empty();
// display.append("thirty");

// //update number view


// //css div color change
// break;

// case  31:
// display.empty();
// display.append("thirty-one");

// //update number view


// //css div color change
// break;

// } 
// };


var newFriendCount = 0;
$("#add-new").on("click", function(){
	newFriendCount++;

	switch(newFriendCount){

		case  1:

		$("#fd-5").show();

		break;

		case  2:

		$("#fd-6").show();

		break;

		case  3:

		$("#fd-7").show();

		break;

		case  4:

		$("#fd-8").show();

		break;

		case  5:

		$("#fd-9").show();

		break;

		case  6:

		$("#fd-10").show();

		break;

		case  7:

		$("#fd-11").show();

		break;

		case  8:

		$("#fd-12").show();

		break;

		case  9:

		$("#fd-13").show();

		break;

		case  10:

		$("#fd-14").show();

		break;

		case  1:

		$("#fd-15").show();

		break;



	}



});
