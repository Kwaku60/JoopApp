// ==================================
// Basic Schedule Jumbo Functionality 
// ==================================
var userName;


$(".add-to-sched").on("click", function() {

    var selectedDay = this.id;

    $("#friend-list-quick").show();

    grabQuickFriendList(selectedDay);

});


$("#exit-friend-list-quick").on("click", function() {

    $("#friend-list-quick").hide();

})

$("#exit-schedule").on("click", function() {

    $("#schedule-jumbo").hide();

})

$("#view-schedule").on("click", function() {

    $("#schedule-jumbo").show();
})



$("#refresh-week").on("click", function() {

    $(".future-plan-well").empty();
})





// ================================
// Get Requests for Schedule Jumbo 
// ================================






function grabQuickFriendList(selectedDay) {

    $("#friend-list-quick-well").empty();

    $.get("/api/user_data").then(function(data) {

        userName = data.email

        $.get("/api/friendsQuick/" + userName, function(data) {

            console.log(data);

            for (var a = 0; a < data.length; a++) {

                var nameHold = $("<div>");
                nameHold.addClass("friend-list-name-item");
                nameHold.attr("id", "quick-friend-" + a);
                nameHold.append(data[a].name);
                $("#friend-list-quick-well").append(nameHold);

            }

            $(".friend-list-name-item").on("click", function() {

                var friendNameId = this.id;

                console.log(this.innerHTML);

                // var name = $("#" + friendNameId);

                // var ex = name.text();
                // var ex2 = name.contents();

                var participatingFriend = this.innerHTML;





                updateSchedule(friendNameId, selectedDay, participatingFriend);

            });


            //end of get friends names request
        })

        //end of user data request 

        return userName;

    })

    //end of grabQuickFriendList function
}


function updateSchedule(friendNameId, selectedDay, participatingFriend) {

    var idValueRaw = friendNameId.slice(13);  

    var primaryValue = parseInt(idValueRaw)


    var idValue = primaryValue + 1;





    $.get("/api/user_data").then(function(data) {

        var userName = data.email;


        //create an object to send to database to grab relevant plans 

        var friendScheduleInfo = {

            userEmail: userName,
            updateId: idValue

        }

        console.log(friendScheduleInfo);

        //grab the next see associated with both the username and the position

        $.get("/api/schedule/" + userName + "/" + idValue, function(data) {

            var futurePlan = data[0].body;


            //create a container for the futurePlan
            var futurePlanHold = $("<div>");
            futurePlanHold.addClass("future-plan-hold");
            var futurePlanWell = $("<div>");
            var withName = $("<div>");
            withName.addClass("with-name");
            withName.append(participatingFriend);
            futurePlanWell.addClass("future-plan-well");
            futurePlanWell.append(futurePlanHold);
            futurePlanHold.append(futurePlan);
            futurePlanHold.prepend(withName);

            //append future plan to relevant day. 
            $("#" + selectedDay + "-div").append(futurePlanWell);


            //end of get request for relevant next see data 
        });


        //end of get user data request 
    })

    //end of updateSchedule function
}









// save schedule functionality 
// =============================


$("#save-schedule").on("click", function(){
       var dayInfo =  $("#Monday-div").find(".with-name");

for(var i= 0; i<dayInfo.length; i++){

var ScheduledFriend = dayInfo[i].innerHTML;
console.log(ScheduledFriend);

    
}

// FUTURE FUNCTIONALITY:
// above code for each day. find out which friends are schedule for each day. 
// find friend divs and append "seeing Monday" or Seeing Tuesday etc. to particular friend
// div after clicking on the update schedule button.






// saveSchedule(userName);

//end of save sched onClick    
}) 









function saveSchedule(userName){



// var Schedule = {


//     userEmail: userName,
//     Monday:,
//     Teusday:,
//     Wednesday:,
//     Thursday:,
//     Friday:,
//     Saturday:,
//     Sunday:,
// }


$.post("/api/schedule", Schedule, function() {
         


            });



//end of save schedule function
}
