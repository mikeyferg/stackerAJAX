$(document).ready( function() {
	$('.inspiration-getter').submit( function(event){
		// zero out results if previous search has run
		$('.results').html('');
		// get the value of the tag the user submitted
		var answerers = $(this).find("input[name='answerers']").val();

		getTopUsers(answerers);
	});
});


var getTopUsers = function(answerers) {
	
	var result = $.ajax({
		url: "http://api.stackexchange.com/2.2/tags/"+answerers+"/top-answerers/all_time?site=stackoverflow",
		/*data: request, */
		dataType: "jsonp",
		type: "GET"
	})
		.done(function(result) {
			

			for(i=0; i<result.items.length; i++) {

				var counter = i + 1;
				$('.results').append("<div class='user user"+counter+"'></div>");

			}

			for(i=0; i<result.items.length; i++) {
				var counter = i+1;

				$('.user' + counter).append('<p class="rank">Rank: #' +counter+ '</p>');
				$('.user' + counter).append('<p class="userName">Username: ' + result.items[i].user.display_name + '</p>');
				$('.user' + counter).append('<p class="userPic"></p><img src='+result.items[i].user.profile_image+'>');
				$('.user' + counter).append('<p class="postCount">Post Count: ' + result.items[0].post_count + '</p>');
				$('.user' + counter).append('<p class="score">Score: ' + result.items[0].score + '</p>');
			}

		})
		.fail(function() {
    		alert( "error" );
  })	
	
}