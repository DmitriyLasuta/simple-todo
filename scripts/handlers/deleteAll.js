import { TASKS_STORAGE_KEY } from '../utils/constants.js'
import { setLocalStorage } from '../utils/storage.js'
import updateCounters from '../services/updateCounters.js'
import renderTaskList from '../services/renderTasks.js'

const handleDeleteAll = () => {
  setLocalStorage(TASKS_STORAGE_KEY, [])
  renderTaskList()
  updateCounters()
}

export { handleDeleteAll }
