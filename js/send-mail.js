
/* Mail */
	$(document).ready(function(){
		var tpj=jQuery;
			tpj.noConflict();

			tpj(document).ready(function() {
			$("#email_send_form").validate({
		    
		       rules:{ 
		        
		            name:{
		                required: true,
		                minlength: 3,
		                maxlength: 50,
		            },
		            email:{
		                required: true,
		                email: true
		            },
		            text:{
			            required: true,
			            minlength: 5,
			            maxlength: 350
		            }
		       },
		       
		       messages:{
		        
		            name:{
		                required: "This field is mandatory",
		                minlength: "The name must be minimum 3 characters",
		                maxlength: "Maximum 50 characters",
		            },
		            email:{
		                required: "This field is mandatory",
		                email: "Enter your e-mail address"
		            },
		            text: {
			            required: "This field is mandatory",
			            minlength: "Minimum 5 characters",
			            maxlength: "Maximum 350 characters"		            
		            }
		       }
		    
		    });
				$('#send').on('click', function() {
		    	$('#email_send_form').submit(function() {event.preventDefault()});
		        if($('#email_send_form').valid()) {
		        	$('#send').attr('disabled', 'disabled');
		            $.post(
					  "...",
					  {
					    name: $('input[name=name]').val(),
					    email: $('input[name=email]').val(),
					    text: $('textarea[name=text]').val()
					  },
					  onAjaxSuccess
					);			 
					function onAjaxSuccess(data) {
					  // Here we get the data sent by the server and display them on the screen.
					  $('#result').html(data);
					  
					  $('#send').removeAttr('disabled');
					  $('input[name=name]').val('');
					  $('input[name=email]').val('');
					  $('textarea[name=text]').val('');
					}				
				}
								
		    });
		    
		});
	});
/* and Mail */