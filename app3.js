$(document).ready( function() {
	$('.inspiration-getter').submit( function(event){
		// zero out results if previous search has run
		$('.results').html('');
		// get the value of the tag the user submitted
		var answerers = $(this).find("input[name='answerers']").val();
		/*alert(answerers); */
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
			var output = JSON.stringify(result)
			console.log(result.items[0].user.display_name);

			 /*$('.results').append("Username: " + result.items[0].user.display_name + "<br>");
			$('.results').append("Post Count: " + result.items[0].post_count + "<br>");
			$('.results').append("Score: " + result.items[0].score + "<br>"); */

			/*$('.results').append('<div class="test"><p class="rank">Rank: #' + "1" + '</p></div>');
			$('.test').append('<p class="userName">Username: ' + result.items[0].user.display_name + '</p>');
			$('.test').append('<p class="postCount">Post Count: ' + result.items[0].post_count + '</p>');
			$('.test').append('<p class="score">Score: ' + result.items[0].score + '</p>'); */

			for(i=0; i<result.items.length; i++) {

				var counter = i + 1;
				$('.results').append("<div class='user"+counter+"'></div>");

				//$('test' + i).append('<p class="rank">Rank: #' + (i + 1) + '</p>');
				//$('.user').append('<p class="userName">Username: ' + result.items[i].user.display_name + '</p>');
			}

			for(i=0; i<result.items.length; i++) {
				var counter = i+1;

				$('.user' + counter).append('<p class="rank">Rank: #' +counter+ '</p>');
				$('.user' + counter).append('<p class="userName">Username: ' + result.items[i].user.display_name + '</p>');
				$('.user' + counter).append('<p class="postCount">Post Count: ' + result.items[0].post_count + '</p>');
				$('.user' + counter).append('<p class="score">Score: ' + result.items[0].score + '</p>');
			}

		})
		
	
}