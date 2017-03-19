const banners = document.getElementsByClassName('banner');
const wrapper = document.getElementsByClassName('wrapper');
const blurredBackground = document.getElementById('popup-wrap')
const body = document.getElementById('body');

(function addClickEvents() {
	for (var i = 0; i < banners.length; i++) {
		banners[i].addEventListener('click', function() {
			wrapper[0].classList.toggle('flex');
this.classList.toggle('clicked-banner');
blurredBackground.classList.toggle('blurred-background')
console.log(this === banners[0])
			for (var i = 0; i < banners.length; i++) {
				if (banners[i] !== this) {			
					banners[i].classList.remove('clicked-banner');

				}
			}
		})
	}
})();