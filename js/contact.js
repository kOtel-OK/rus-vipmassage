'use strict';

$(function () {
	// $('#contact-form').validator();
	// when the form is submitted
	$('#contact-form').on('submit', function (e) {

		// if the validator does not prevent form submit
		if (!e.isDefaultPrevented()) {
			var url = "contact.php";

			// POST values in the background the the script URL
			$.ajax({
				type: "POST",
				url: url,
				data: $(this).serialize(),
				success: function success(data) {
					// data = JSON object that contact.php returns

					// we recieve the type of the message: success x danger and apply it to the
					var messageAlert = 'alert-' + data.type;
					var messageText = data.message;

					// let's compose Bootstrap alert box HTML
					var alertBox = '<span class="red-text">' + messageText + '</span>';

					// If we have messageAlert and messageText
					if (messageAlert && messageText) {
						// inject the alert to .messages div in our form
						$('#contact').find('.contact_description').html(alertBox);
						// empty the form
						$('#contact-form')[0].reset();
					}
				}
			});
			return false;
		}
	});
});