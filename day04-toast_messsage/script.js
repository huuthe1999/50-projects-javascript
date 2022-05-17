const btns = document.querySelectorAll('.button');

const toastContainer = document.querySelector('.toast__container');

const toastList = [
	{
		type: 'success',
		message: 'Message sent successfully!',
		iconClass: 'fa-solid fa-circle-check',
		duration: 5000,
	},
];

function toast({
	type = 'info',
	message = '',
	iconClass = '',
	duration = 5000,
}) {
	const toast = document.createElement('div');
	const delay = (duration / 1000).toFixed(2);
	toast.classList.add('toast', `toast--${type}`);
	toast.style.animation = `fadeIn ease .3s, fadeOut ease 1s ${delay}s forwards`;
	toast.innerHTML = `<div class="toast__icon">
            <i class='${iconClass}'></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${type}</h3>
            <p class="toast__message"> ${message}</p>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
        </div>`;
	toastContainer.appendChild(toast);
	setTimeout(() => {
		toast.remove();
	}, duration + 1000);

	toast.addEventListener('click', e => {
		if (e.target.closest('.toast__close')) {
			toast.remove();
		}
	});
}

function toastSuccess() {
	toast({
		type: 'success',
		message: 'Message sent successfully!',
		iconClass: 'fa-solid fa-circle-check',
		duration: 5000,
	});
}
function toastError() {
	toast({
		type: 'error',
		message: 'Oops!Some error occurred.',
		iconClass: 'fa-solid fa-exclamation-triangle',
		duration: 4000,
	});
}
function toastInfo() {
	toast({
		type: 'info',
		message: 'Did you know about this feature?',
		iconClass: 'fa-solid fa-info-circle',
		duration: 5000,
	});
}
function toastWarning() {
	toast({
		type: 'warning',
		message: 'This may be dangerous!',
		iconClass: 'fa-solid fa-exclamation-triangle',
		duration: 4000,
	});
}
