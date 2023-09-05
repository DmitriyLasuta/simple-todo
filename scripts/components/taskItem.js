const createTaskItem = data => {
	const item = document.createElement('li')
	item.classList.add('task-item')
	item.dataset.taskId = data.id

	const checkbox = document.createElement('input')
	checkbox.classList.add('checkbox')
	checkbox.id = data.id
	checkbox.type = 'checkbox'
	checkbox.checked = data.isCompleted

	const label = document.createElement('label')
	label.textContent = data.task
	label.classList.add('task-text')
	label.htmlFor = data.id

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('btn')
	deleteBtn.name = 'deleteBtn'
	deleteBtn.type = 'button'
	deleteBtn.textContent = 'X'

	const taskDate = document.createElement('span')
	taskDate.classList.add('todo-date')
	taskDate.textContent = data.date
	item.append(checkbox, label, deleteBtn, taskDate)
	return item
}

export default createTaskItem
