	var greeting = "Hello";
	var user = "There";

	var welcome = greeting + " " + user + "!";

	var el = document.getElementById('welcome');
	el.textContent = welcome;
	
(function() {
	var commission = {
		artistName: 'Carter Larson',
		price: 300,
		discount: 25,
		offerRate: function() {
			var offerRate = this.price * ((100- this.discount) / 100);
			return offerRate;
		}
	}

	var artistName, price, offerPrice;
	artistName = document.getElementById('artistName');
	price = document.getElementById('price');
	offerPrice = document.getElementById('offerPrice');
	
	artistName.textContent = commission.artistName;
	price.textContent = 'Regular Price: $' + commission.price.toFixed(2);
	offerPrice.textContent = 'Discounted Price: $' + commission.offerRate();
	
	function offerExpires(today) {
		var weekFromToday, day, month, year, dayNames, monthNames;
		weekFromToday =new Date(today.getTime () + 7 * 24 * 60 * 60 * 1000);
		dayNames = [' Sunday', 'Monday', 'Tuesday ', 'Wednesday ', 'Thursday', ' Friday', 'Saturday '];
		monthNames =['January', ' February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', ' November', 'December'];
		day = dayNames [weekFromToday.getDay ()];
		date = weekFromToday.getDate();
		month = monthNames[weekFromToday.getMonth()] ;
		year = weekFromToday.getFullYear();
		
		expiryMsg = 'Offer expires next ';
		expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
		return expiryMsg;
	}
	
	today= new Date();
	elEnds = document.getElementById('offerEnds');
	elEnds.innerHTML = offerExpires(today);

})();

(function() { // Offer countdown function
	var time = 11; // How many times, in weeks, until the offer expires from its original offer date.
	var operator = 'countdown';
	var i = 1;
	var msg = '<br />';
	if (operator === 'countdown') {
		while (i < time) {
			if (i < (time - 1)) {
				msg += "<span class='muted-strike'>";
				msg += 'Time since offer: ' + i + ' week(s). ' + 'Time Left: ' + (time - i) + ' week(s). ' + '</span><br />';
				i++;
			} else {
				msg += 'Time since offer: ' + i + ' week(s). ' + 'Time Left: ' + (time - i) + ' week(s). ' + '</span><br />';
				i++;
			}
		}
	} else { // Back up else statement that defaults counting down the weeks since the offer and removing strikethrough.
		while (i < time) {
			msg += 'Time since offer: ' + i + ' week(s). ' + 'Time Left: ' + (time - i) + ' week(s). ' + '<br />';
			i++;
		}
	}

	var elCount = document.getElementById('counter');
	elCount.innerHTML = msg;
})();


$(document).ready(function () {
	$('#offerBox').fadeIn(1000);
	$('#blurryBackdrop').fadeIn(1000);

	$('#closeBtn').click(function () {
		$('#offerBox').slideUp(1000);
		$('#blurryBackdrop').fadeOut(1000);
	});
});