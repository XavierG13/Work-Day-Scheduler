$(document).ready(function () {

    //here you will see that the current day and time are set to the page
    var currentDayEl = document.getElementById("#currentDay");
    currentDayEl = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").append(currentDayEl);

    //this listener is for when you hit the save icon
    $(".saveBtn").on("click", function (event) {

        var inputVal = $(this).siblings(".description");
        console.log(inputVal);
        var timeEl = $(this).parent().attr("id");

        localStorage.setItem(inputVal, timeEl);
        console.log(localStorage);

    })

    


});