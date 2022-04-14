let arrow = document.querySelector('.img-arrow');
let header = document.querySelector	('.header');

arrow.addEventListener('click', () => {
	arrow.style.animation = 'none';
})

let intersectionObserver = new IntersectionObserver(function(entries) {
	  	if (!entries[0].isIntersecting){
	 		arrow.style.animation = 'none';	
	 		header.style.background = '#a6a6d6'
	 	}else {
	 		header.style.background = 'transparent'
	 	}
	});
intersectionObserver.observe(document.querySelector('.title'));


function initMap() {
  const polanco = { lat: 19.433797973738496, lng: -99.19090478692605 };
  const chicago = new google.maps.LatLng(19.433797973738496, -99.19090478692605);
  const map = new google.maps.Map(document.getElementById("maps"), {
    center: chicago,
    zoom: 18,
  });

  const marker = new google.maps.Marker({
    position: polanco,
    map: map,
  });
}

const TILE_SIZE = 256;

function project(latLng) {
  let siny = Math.sin((latLng.lat() * Math.PI) / 180);
  siny = Math.min(Math.max(siny, -0.9999), 0.9999);
  return new google.maps.Point(
    TILE_SIZE * (0.5 + latLng.lng() / 360),
    TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI))
  );
}

let btnMenu = document.querySelector('.img-menu');
let nav = document.querySelector('.nav-res');
let saw = false;
let navMenu = document.querySelector('.nav-menu');
let navMenu2 = document.querySelector('.nav-menu2');
let navMenu3 = document.querySelector('.nav-menu3');

btnMenu.addEventListener('click', () => {
  if (saw == false){
    nav.style.marginTop = '8vh';
    btnMenu.style.animation = 'push 1s alternate';
    saw = true;
  }else {
    nav.style.marginTop = '-500px';
    btnMenu.style.animation = 'pash 1s alternate';
    saw = false;
  }
})

navMenu.addEventListener('click', () => {
  nav.style.marginTop = '-500px';
    saw = false;
})
navMenu2.addEventListener('click', () => {
  nav.style.marginTop = '-500px';
    saw = false;
})
navMenu3.addEventListener('click', () => {
  nav.style.marginTop = '-500px';
    saw = false;
})