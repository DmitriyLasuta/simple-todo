import { ROOT, SELECTORS, TASKS_STORAGE_KEY } from '../utils/constants.js'
import { getLocalStorage } from '../utils/storage.js'

const updateCounters = () => {
  const allTasks = ROOT.querySelector(SELECTORS.allTasksCount)
  const completedTasks = ROOT.querySelector(SELECTORS.completedTasksCount)
  const data = getLocalStorage(TASKS_STORAGE_KEY)

  allTasks.textContent = `All: ${data.length}`
  completedTasks.textContent = `Completed: ${
    data.filter((item) => item.isCompleted).length
  }`
}

export default updateCounters
