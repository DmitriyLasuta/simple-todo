import renderTaskList from '../services/renderTasks.js'
import updateCounters from '../services/updateCounters.js'
import addTask from '../services/addTask.js'
import { TASKS_STORAGE_KEY } from '../utils/constants.js'
import { getLocalStorage } from '../utils/storage.js'

const handleSubmit = event => {
	event.preventDefault()
	const { task: input } = event.target
	const tasks = getLocalStorage(TASKS_STORAGE_KEY)

	if (input.value && !tasks.some(item => item.task === input.value)) {
		addTask(input.value)
		event.target.reset()
		renderTaskList()

		if (tasks.length > 0) {
			const { id } = tasks.at(-1)
			document.getElementById(id).scrollIntoView()
		}

		updateCounters()

		input.classList.remove('invalid-input')
	} else {
		input.classList.add('invalid-input')
	}
}

export { handleSubmit }
