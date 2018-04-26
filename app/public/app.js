$(document).ready(function () {


    function valid() {
        var valid = true;
        if ($("#name").val().trim() === '') 
        {
            alert("Please enter your name");
            valid = false;

        }
        else if($("#photo").val().trim() === '')
        {
            alert("Please enter link for your photo");
            valid = false;

        }

        return valid;
    }
    $("#submit").on("click", function () {

        //event.preventDefault();
        if (valid()) {

            var scores = [];
            scores.push($("#q1").val().trim());
            scores.push($("#q2").val().trim());
            scores.push($("#q3").val().trim());
            scores.push($("#q4").val().trim());
            scores.push($("#q5").val().trim());
            scores.push($("#q6").val().trim());
            scores.push($("#q7").val().trim());
            scores.push($("#q8").val().trim());
            scores.push($("#q9").val().trim());
            scores.push($("#q10").val().trim());


            var surveyData = {
                name: $("#name").val().trim(),
                photo: $("#photo").val().trim(),
                scores: scores
            }

            $.post("api/friends", surveyData, function (data) {

                $("#match-name").html(data.name);
                $("#match-img").attr('src', data.photo);
                $("#results-modal").modal('show');

            });
        }

    })

})