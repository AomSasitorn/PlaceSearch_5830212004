$(function () {

    var placeid = getUrlParameter('placeid');

    PlaceSearch.Detail(placeid).then(function(data){
        console.log(data);
        $('#gallery').empty();
        $('#placename').html('<hr><center>' + data.name + '</center><hr>');        
        $('#address').html(data.address);
        $('#opennow').html("<hr>Open Now : " + data.open_now);
        $('#rating').html("Rating : " + data.rating);
        $('#phone').html("Phone : " + data.phone + "<hr>");

        for(var i=0;i<data.photos.length;i++){
            var row = 
            '<div class="row">' + 
            '<div class="col-sm-6"><center><img src=' + data.photos[i] + '></center></div>' +
            '<div class="col-sm-6"><center><img src=' + data.photos[i+1] + '></center></div>' +            
            '</div><br>';
            $('#gallery').append(row);
            i=i+1;
        }
    });


    //Get URL parameter
    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }

});