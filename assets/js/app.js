document.addEventListener("DOMContentLoaded", function(event) {
	if (window.localStorage) {
		// I am going to jump in front of a bus if I hear "TEAM PEGGLE PRESENTS" again

		// Why use localStorage?  Because I really need this to stick or else comments re:bus
		try {
			var shouldStfu = JSON.parse(window.localStorage.getItem('stfu'));
		} catch (e) {
			var shouldStfu = false;
		}

		if (shouldStfu) {
			var audio = document.getElementById('audio-intro');

			if (audio) {
				audio.muted = true;
			}
		} else {
			// localstorage doesn't store anything but strings
			window.localStorage.setItem(
				'stfu',
				JSON.stringify(true)
			);
		}
	}

	if (fartscroll) {
		fartscroll(800);
	}
});
