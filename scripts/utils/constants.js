const SELECTORS = {
  root: '#root',
  manageTasksForm: '#manage-tasks',
  deleteAllBtn: '#delete-all-btn',
  deleteLastBtn: '#delete-last-btn',
  nav: '.nav',
  showAllTasksBtn: '#show-all-tasks-btn',
  showCompletedTasksBtn: '#show-completed-tasks-btn',
  tasksList: '#tasks-list',
  allTasksCount: '#all-tasks',
  completedTasksCount: '#completed-tasks',
  taskItem: '.task-item'
}

const ROOT = document.querySelector(SELECTORS.root)
const TASKS_STORAGE_KEY = 'tasks'

export { ROOT, SELECTORS, TASKS_STORAGE_KEY }
