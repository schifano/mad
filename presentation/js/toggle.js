$('document').ready(
	function(){

		var count = 0;
		var max_length = $('section').length;

		function scrollToElement(selector, time, verticalOffset) {
	    
	    	time = typeof (time) != 'undefined' ? time : 500;
	    
	    	verticalOffset = typeof (verticalOffset) != 'undefined' ? verticalOffset : 0;
	    
	    	element = $(selector);
	    
	    	offset = element.offset();
	    
	    	offsetTop = offset.top + verticalOffset;
	    
	    	$('html, body').animate({
	    
	     	   scrollTop: offsetTop
	    
	    	}, time);
		
		}

		$(document).keydown(function(e){
    	
			e.preventDefault();

    	    if(e.keyCode == 40 || e.keyCode == 32) { 

                if(count < max_length) {

                	count++;

                }else{

                	count = 1;

                }
	   			
    		
    		}

    		if(e.keyCode == 38) {

    			if(count > 1){

    				count--;

    			}else{

    				count = max_length;

    			}

    		}

    		scrollToElement('section:nth-child(' + count + ')', 300, -50);

    		return false;

		});

	});