import { ROOT, SELECTORS, TASKS_STORAGE_KEY } from '../utils/constants.js'
import { getLocalStorage } from '../utils/storage.js'
import createTaskItem from '../components/taskItem.js'

const renderTaskList = (list = getLocalStorage(TASKS_STORAGE_KEY)) => {
	const toDoList = ROOT.querySelector(SELECTORS.tasksList)
	toDoList.innerHTML = ''
	const items = list.map(task => createTaskItem(task))
	toDoList.append(...items)
}

export default renderTaskList
