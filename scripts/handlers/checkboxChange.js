import { TASKS_STORAGE_KEY } from '../utils/constants.js'
import { getLocalStorage, setLocalStorage } from '../utils/storage.js'
import updateCounters from '../services/updateCounters.js'

const handleCheckboxChange = (event) => {
  const tasks = getLocalStorage(TASKS_STORAGE_KEY)
  const { target: checkbox } = event
  const task = tasks.find((task) => task.id === checkbox.id)
  task.isCompleted = checkbox.checked
  setLocalStorage(TASKS_STORAGE_KEY, tasks)
  updateCounters()
}

export { handleCheckboxChange }
