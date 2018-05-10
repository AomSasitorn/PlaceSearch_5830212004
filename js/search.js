$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
var row =
'<div class="card-deck">'+
'<a href="detail.html?placeid=' + data[i].id + '">' +
'<div class="card" style="width: 20rem;">'+
'<img class="card-img-top" src=' + data[i].photo + ' alt="Card image cap" height="200">'+
'<div class="card-body">'+
'<h5 class="card-title">Name : ' + data[i].name + '</h5>'+
'<p class="card-text">Rating : ' + data[i].rating + '<br>'+
'</p></div>'+
'</div>'+
'</a>'+
'<a href="detail.html?placeid=' + data[i+1].id + '">' +
'<div class="card" style="width: 20rem;">'+
'<img class="card-img-top" src=' + data[i+1].photo + ' alt="Card image cap" height="200">'+
'<div class="card-body">'+
'<h5 class="card-title">Name : ' + data[i+1].name + '</h5>'+
'<p class="card-text">Rating : ' + data[i+1].rating + '<br>'+
'</p></div>'+
'</div>'+
'</a>'+
'<a href="detail.html?placeid=' + data[i+2].id + '">' +
'<div class="card" style="width: 20rem;">'+
'<img class="card-img-top" src=' + data[i+2].photo + ' alt="Card image cap" height="200">'+
'<div class="card-body">'+
'<h5 class="card-title">Name : ' + data[i+2].name + '</h5>'+
'<p class="card-text">Rating : ' + data[i+2].rating + '<br>'+
'</p></div>'+
'</div>'+
'</a>'+
'</div>';



            // for(var i=0;i<data.length;i++){
         

            
            //     var row =
            //     '<center><a href="detail.html?placeid=' + data[i].id + '">' +
            //     '<div class="card" style="width: 18rem;">'+
            //     '<img class="card-img-top" src=' + data[i].photo + ' alt="Card image cap">'+
            //     '<div class="card-body">'+
            //     '<h5 class="card-title">Name : ' + data[i].name + '</h5>'+
            //     '<p class="card-text">Rating : ' + data[i].rating + '<br>'+
            //   '</p></div>'+
            //   '</div>'+
            //   '</a><br></center>';
              $('#searchresult').append(row);
              i=i+2;
          }

      });
  });    
});