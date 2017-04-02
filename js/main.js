document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')


$(document).ready(function(e) {	
  	//onLoadFunctions();
	$('input').lc_switch();
	// triggered each time a field changes status
	$('body').delegate('.lcs_check', 'lcs-statuschange', function() {
		var status = ($(this).is(':checked')) ? 'checked' : 'unchecked';
		var button = ($(this));
		console.log('field ' + button.attr('id') + ' changed status: '+ status );		
	});	
	
	// triggered each time a field is checked
	$('body').delegate('.lcs_check', 'lcs-on', function() {
		console.log('field is checked');
	});	
	// triggered each time a is unchecked
	$('body').delegate('.lcs_check', 'lcs-off', function() {
		console.log('field is unchecked');
	});
	
});

							function flagButton(numbut) {						    

								if (document.getElementById('k'+numbut).checked == true){
									document.getElementById('but'+numbut).className = 'lcs_switch lcs_on lcs_checkbox_switch';
								} else {
									document.getElementById('but'+numbut).className = 'lcs_switch lcs_off lcs_checkbox_switch';
								}								
						}