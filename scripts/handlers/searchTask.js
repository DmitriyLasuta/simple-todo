import searchTasks from '../services/searchTasks.js'
import renderTaskList from '../services/renderTasks.js'

const handleSearchTask = (event) => {
  const { value } = event.target
  renderTaskList(searchTasks(value))
}

export { handleSearchTask }
