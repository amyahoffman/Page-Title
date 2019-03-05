$("button").click(function(){
    var name = $(".name").val();
    var songs = $(".songs").val();
    var phone = $(".phone").val();
    
    songs = parseInt(songs);
    console.log(songs * 10);

    $(".results").text(
      name + " , by the year 2021 , you would have listened to " + songs * 365 + " songs on your  " + phone
    );
});

