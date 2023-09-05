import { TASKS_STORAGE_KEY } from '../utils/constants.js'
import { getLocalStorage, setLocalStorage } from '../utils/storage.js'
import updateCounters from '../services/updateCounters.js'
import renderTaskList from '../services/renderTasks.js'

const handleDeleteLast = () => {
  const tasks = getLocalStorage(TASKS_STORAGE_KEY)
  tasks.pop()
  setLocalStorage(TASKS_STORAGE_KEY, tasks)
  renderTaskList()
  updateCounters()
}

export { handleDeleteLast }
