const progressBar = document.querySelectorAll('.step');
const progress = document.getElementById('progress-line');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentStep = 1;

nextBtn.addEventListener('click', () => {
	currentStep++;
	if (currentStep > progressBar.length) {
		currentStep = progressBar.length;
	}
	updateProgress();
});

prevBtn.addEventListener('click', () => {
	currentStep--;
	if (currentStep < 1) {
		currentStep = 1;
	}

	updateProgress();
});

function updateProgress() {
	progressBar.forEach((step, index) => {
		if (index < currentStep) {
			step.classList.add('active');
		} else {
			step.classList.remove('active');
		}
	});
	const percent = ((currentStep - 1) / (progressBar.length - 1)) * 100;
	progress.style.width = `${percent}%`;
	nextBtn.disabled = currentStep === progressBar.length ? true : false;
	prevBtn.disabled = currentStep === 1 ? true : false;
}
