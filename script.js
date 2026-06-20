function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	const radius = document.getElementById('radius');
	const volume = document.getElementById('volume');

	if(Number(radius.value) > 0 && Number(radius.value) !== typeof ''){
		let vol = (4 / 3) * Math.PI * Math.pow((radius.value), 3);

		volume.value = vol.toFixed(4);
	}else{
		return NaN; 
	}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
