import { TASKS_STORAGE_KEY } from '../utils/constants.js'
import { getLocalStorage } from '../utils/storage.js'

const searchTasks = (inputValue) => {
  const tasks = getLocalStorage(TASKS_STORAGE_KEY)
  inputValue = inputValue.toLowerCase()
  return tasks.filter((item) => item.task.toLowerCase().includes(inputValue))
}

export default searchTasks
