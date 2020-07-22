//Declares instance of IntersectionObserver API. 
var observer = new IntersectionObserver(function(entries) {

	var element = document.getElementById(entries[0].target.id)
	
	//Conditions to determine which animation class to assign
	if(entries[0].isIntersecting === true) {
		if (element.id == 'royale' || element.id == 'openworld') {
			element.classList.add("vwa-animation-right");
		} else {
			element.classList.add("vwa-animation-left");
		}
	}
}, { threshold: [0.5] });

//Creates observers do sliding elements so that when they appear in view the animation playys
observer.observe(document.getElementById('royale'));
observer.observe(document.getElementById('openworld'));
observer.observe(document.getElementById('minigames'));


//When clicked the vieweport scrolls to the element with props id
const onClick = (element) => {
  document.getElementById(element).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}