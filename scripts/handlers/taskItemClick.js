import { TASKS_STORAGE_KEY } from '../utils/constants.js'
import { getLocalStorage, setLocalStorage } from '../utils/storage.js'
import updateCounters from '../services/updateCounters.js'

const handleTaskItemClick = (event) => {
  const tasks = getLocalStorage(TASKS_STORAGE_KEY)
  const {
    dataset: { taskId }
  } = event.target

  const task = tasks.find((item) => item.id === taskId)
  const checkbox = document.getElementById(taskId)
  task.isCompleted = !task.isCompleted
  checkbox.checked = task.isCompleted

  setLocalStorage(TASKS_STORAGE_KEY, tasks)
  updateCounters()
}

export { handleTaskItemClick }
