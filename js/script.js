const form = document.querySelector('#taskform');
const inputForm = document.querySelector('.input-form');
const tasklist = document.querySelector('#list');


function addNewTask(e) {
	event.preventDefault();
	const tasktxt = inputForm.value;
	const newTask = `<li class="task__item item">
	<p class="task__title">${tasktxt}</p>
	<div class="task__button">
		<button class="task__button-1 button-icon">
			<img src="img/icon.png" alt="">
		</button>
		<button class="task__button-2 button-icon" >
			<img src="img/icon-delete.png" alt="">
		</button>
	</div>
</li>`

	tasklist.insertAdjacentHTML('beforeend', newTask);
	inputForm.value = "";
	savelitoLS()
}

form.addEventListener('submit', addNewTask);

function taskDelete(event) {
	if (event.target.classList.contains('task__button-2')) {

		const delTask = event.target.closest('li')
		console.log(delTask);
		delTask.remove()
		savelitoLS()
	}
}
tasklist.addEventListener('click', taskDelete)

function taskDone(event) {
	if (event.target.classList.contains('task__button-1')) {
		const doneTask = event.target.closest('li');
		const taskP = doneTask.querySelector('.task__title')
		taskP.classList.toggle('task__title-1');
		savelitoLS()
	}

}
tasklist.addEventListener('click', taskDone)

function savelitoLS() {
	localStorage.setItem('task', tasklist.innerHTML);

}

if (localStorage.getItem('task'))
{
	tasklist.innerHTML = localStorage.getItem('task');
}