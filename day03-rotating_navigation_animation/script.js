const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const container = document.querySelector('.container');

openBtn.addEventListener('click', () => {
	container.classList.add('toggle');
	// document.body.classList.add('stop-scrolling');
});

closeBtn.addEventListener('click', () => {
	container.classList.remove('toggle');
	// document.body.classList.remove('stop-scrolling');
	// document.querySelector('.container-circle').style.transform =
	// 	'rotate(' + 0 + 'deg)';
});

// Event on navigation

const liList = document.querySelectorAll('ul li');
liList.forEach(li => {
	li.addEventListener('click', () => {
		container.classList.remove('toggle');
	});
});
