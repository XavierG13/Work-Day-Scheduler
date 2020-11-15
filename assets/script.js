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
            //run an if else statemet to deteremine the time period

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
    console.log(updateColor);


    //this listener is for when you hit the save icon
    $(".saveBtn").on("click", function (event) {

        var inputVal = $(this).siblings(".description");
        console.log(inputVal);
        var timeEl = $(this).parent().attr("id");

        localStorage.setItem(inputVal, timeEl);
        console.log(localStorage);

    })
});