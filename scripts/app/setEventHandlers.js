import { ROOT, SELECTORS } from '../utils/constants.js'
import * as handlers from '../handlers/index.js'

const addHandlersTaskManager = () => {
  const form = ROOT.querySelector(SELECTORS.manageTasksForm)
  form.addEventListener('submit', handlers.handleSubmit)

  form
    .querySelector(SELECTORS.deleteAllBtn)
    .addEventListener('click', handlers.handleDeleteAll)

  form
    .querySelector(SELECTORS.deleteLastBtn)
    .addEventListener('click', handlers.handleDeleteLast)
}

const addHandlersNav = () => {
  const nav = ROOT.querySelector(SELECTORS.nav)
  nav.addEventListener('click', (event) => {
    const showAllTasksBtn = nav.querySelector(SELECTORS.showAllTasksBtn)
    const showCompletedTasksBtn = nav.querySelector(
      SELECTORS.showCompletedTasksBtn
    )

    if (event.target === showAllTasksBtn) {
      handlers.handleShowAllTasks()
      showAllTasksBtn.classList.toggle('btn-active')
      showCompletedTasksBtn.classList.toggle('btn-active')
    } else if (event.target === showCompletedTasksBtn) {
      handlers.handleShowCompletedTasks()
      showCompletedTasksBtn.classList.toggle('btn-active')
      showAllTasksBtn.classList.toggle('btn-active')
    }
  })

  nav
    .querySelector('input[type="search"]')
    .addEventListener('input', (event) => {
      handlers.handleSearchTask(event)
    })
}

const addHandlersTaskList = () => {
  const list = ROOT.querySelector(SELECTORS.tasksList)

  list.addEventListener('change', (e) => handlers.handleCheckboxChange(e))

  list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      handlers.handleTaskItemClick(event)
    }
    if (event.target.name === 'deleteBtn') {
      handlers.handleDeleteTask(event)
    }
  })
}

export { addHandlersTaskManager, addHandlersNav, addHandlersTaskList }
