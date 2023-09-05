import { TASKS_STORAGE_KEY } from '../utils/constants.js'
import { getLocalStorage, setLocalStorage } from '../utils/storage.js'

const addTask = (task) => {
  const tasks = getLocalStorage(TASKS_STORAGE_KEY)
  task &&
    tasks.push({
      id: self.crypto.randomUUID(),
      task,
      isCompleted: false,
      date: new Date().toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      })
    })
  setLocalStorage(TASKS_STORAGE_KEY, tasks)
}

export default addTask
