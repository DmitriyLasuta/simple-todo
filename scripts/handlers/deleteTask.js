import { SELECTORS } from '../utils/constants.js'
import deleteTask from '../services/deleteTask.js'
import updateCounters from '../services/updateCounters.js'
import renderTaskList from '../services/renderTasks.js'

const handleDeleteTask = (event) => {
  const { id } = event.target.closest(SELECTORS.taskItem).dataset
  deleteTask(id)
  renderTaskList()
  updateCounters()
}

export { handleDeleteTask }
