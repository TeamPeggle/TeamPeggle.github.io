document.addEventListener("DOMContentLoaded", function(event) {
	if (window.localStorage) {
		try {
			var shouldStfu = JSON.parse(window.localStorage.getItem('stfu'));
		} catch (e) {
			var shouldStfu = false;
		}

		if (window.location.hash === '#stfu') {
			shouldStfu = !shouldStfu;

			// localstorage doesn't store
			window.localStorage.setItem(
				'stfu',
				JSON.stringify(shouldStfu)
			);
		}

		if (shouldStfu) {
			// I swear I am so tired of that now
			var audio = document.getElementById('audio-intro');

			if (audio) {
				audio.muted = true;
			}
		}
	}

	if (fartscroll) {
		fartscroll(800);
	}
});
