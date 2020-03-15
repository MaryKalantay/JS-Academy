let allInputs = $(":input");

allInputs.each(function(  index ) {
	let defaultValue = $( this ).val();
	$( this ).focus(function() { 
		$( this ).val("");
	});
	$( this ).blur(function(){
		if(!$(this).val()){
			$( this ).val(defaultValue); 
		}
	});
});
