import { TASKS_STORAGE_KEY } from '../utils/constants.js'
import { getLocalStorage, setLocalStorage } from '../utils/storage.js'

const deleteTask = (id) => {
  const tasks = getLocalStorage(TASKS_STORAGE_KEY)
  const task = tasks.find((item) => item.id === id)
  tasks.splice(tasks.indexOf(task), 1)
  setLocalStorage(TASKS_STORAGE_KEY, tasks)
}

export default deleteTask
