

const banners = document.getElementsByClassName('banner');
const wrapper = document.getElementsByClassName('wrapper');


(function addClickEvents(){
	for (var i = 0; i < banners.length; i++){
banners[i].addEventListener('click', function(){
	this.classList.toggle('clicked-banner');
	wrapper[0].classList.toggle('flex');
	for (var i = 0; i < banners.length; i++){
		if (banners[i] !== this){
			banners[i].classList.toggle('blur');
		}
	}
})
}
})();


