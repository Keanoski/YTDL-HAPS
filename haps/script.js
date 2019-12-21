var mp3Btn = document.getElementById('mp3');
var	mp4Btn = document.getElementById('mp4');
var URLinput = document.querySelector('.URL-input');
var server = 'http://142.93.129.242:4000';

mp3Btn.addEventListener('click', () => {

	if (URLinput.value == ""){
		alert("Indsæt valid youtube link");
		return false;
	}
	else{
		
	console.log(`URL: ${URLinput.value}`);	
	redirectMp3(URLinput.value);
	}
});


mp4Btn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);	
	redirectMp4(URLinput.value);
});

function redirectMp3(query) {
	window.location.href = `${server}/downloadmp3?url=${query}`;
}

function redirectMp4(query) {
	window.location.href = `${server}/downloadmp4?url=${query}`;
}