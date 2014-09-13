$(document).ready( function() {
	$('.inspiration-getter').submit( function(event){
		// zero out results if previous search has run
		$('.results').html('');
		// get the value of the tags the user submitted
		var tag = $(this).find("input[name='answerers']").val();
		getTopUsers(tag);
	});
});



var displayResponse = function() {
	$('.results').text(result);
}


// takes a string of semi-colon separated tags to be searched
// for on StackOverflow
var getTopUsers = function(tag) {
	
	// the parameters we need to pass in our request to StackOverflow's API
	var request = {tagged: tag,
					site: 'stackoverflow',
					order: 'desc',
					sort: 'creation'
				};
	
	var result = $.ajax({
		url: "http://api.stackexchange.com/2.2/tags/css/top-answerers/",
		data: request,
		dataType: "jsonp",
		type: "GET",
		success: displayResponse
		})
}

var displayResponse = function(result) {
$('.results').text(result);
}		

