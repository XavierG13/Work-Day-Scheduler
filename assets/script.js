// var descriptionInput = document.getElementById(".description");
// descriptionForm = document.getElementById(id);



$(document).ready(function () {

    //here you will see that the current day and time are set to the page
    var currentDayEl = document.getElementById("#currentDay");
    currentDayEl = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").append(currentDayEl);



    //this section will determine if our time is in the past, present or future

    function updateColor() {

        //sets the hour to current time period in order to have the color setter below to update properly
        var currentHourEl = moment().hours();
        console.log(currentHourEl);

        $(".time-block").each(function () {

            var timeBlock = parseInt($(this).attr("id"));
            //run an if else statemet to deteremine the time period. will choose color after it identifies time

            if (timeBlock < currentHourEl) {
                $(this).addClass("past");
            } else if (timeBlock === currentHourEl) {
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    };
    updateColor();

    //this function will save the events in the planner in local storage

    function savePlanner() {

        $(".time-block").each(function () {
            var descriptionEl = localStorage.getItem($(this).attr("id"));
            console.log(descriptionEl);

            if (descriptionEl !== null) {
                $(this).children(".schedule").val(descriptionEl);
            }
            //this click function is for when you hit the save icon
            $(".saveBtn").on("click", function (event) {

                var timeEl = $(this).parent().attr("id");
                var valueEl = $(this).siblings(".description").val();
                console.log(valueEl);
                console.log(timeEl);

                localStorage.setItem(timeEl, JSON.stringify(valueEl));
                console.log(localStorage);

                // $(".description").localStorage.getItem(JSON.stringify(valueEl));
                // document.getElementById(id).innerHTML = valueEl.trim();
                // var inputVal = $(this).parent().attr("id");
                // inputVal.appendTo(localStorage.getItem(descriptionEl));
            })

        });

    }

    savePlanner();

    // descriptionForm.addEventListener("submit", function (event) {
    //     event.preventDefault();

    //     var descriptionText = descriptionInput.value.trim();

    //     if (descriptionText === "") {
    //         return;
    //     }

    //     descriptionForm.push(descriptionText);
    //     descriptionInput.value = "";

    //     renderDescriptions();

    // })

});