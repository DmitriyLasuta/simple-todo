import { TASKS_STORAGE_KEY } from '../utils/constants.js'
import { getLocalStorage } from '../utils/storage.js'
import renderTaskList from '../services/renderTasks.js'

const handleShowCompletedTasks = () => {
  const tasks = getLocalStorage(TASKS_STORAGE_KEY)
  renderTaskList(tasks.filter((item) => item.isCompleted))
}

export { handleShowCompletedTasks }
