(function(d) {
	var quoteContainers = d.getElementsByClassName('pegglebot-quotes');

	if (!quoteContainers) {
		return;
	}

	var quotes;

	var fetchJSONFile = function (path, callback) {
		var request = new XMLHttpRequest();

		request.onreadystatechange = function() {
			if (request.readyState === 4 && request.status === 200) {
				var data = JSON.parse(request.responseText);

				if (callback) {
					callback(data);
				}
			}
		};

		request.open('GET', path);
		request.send(); 
	}

	fetchJSONFile('/quotes.json', function(data){
		quotes = data;

		var entityMap = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': '&quot;',
			"'": '&#39;',
			"/": '&#x2F;'
		};

		Array.prototype.forEach.call(quoteContainers, function(each) {
			var showMeQuotes = function() {
				var quote = data[Math.floor(Math.random()*data.length)];

				var escapedQuote = quote.replace(/[&<>"'\/]/g, function (s) {
					return entityMap[s];
				});

				each.innerHTML = escapedQuote;
			};

			showMeQuotes();

			setInterval(showMeQuotes, 6000);
		});
	});

	if (clippy) {
		clippy.load('Clippy', function(agent){
			agent.show();

			var readyForMore = true;
			var clippyPegglebot = function() {
				if (!quotes || !readyForMore) {
					return;
				}

				readyForMore = false;

				agent.stop();

				agent.animate();

				agent.speak(quotes[Math.floor(Math.random()*quotes.length)]);

				agent._addToQueue(function() { readyForMore = true; });
			}

			jQuery(agent._el)
				.off([ 'click', 'dblclick', 'mousedown' ])
				.on('click', clippyPegglebot);
		});
	}
})(document);
