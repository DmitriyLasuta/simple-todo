import renderTaskList from '../services/renderTasks.js'
import updateCounters from '../services/updateCounters.js'
import { ROOT } from '../utils/constants.js'
import {
	addHandlersNav,
	addHandlersTaskList,
	addHandlersTaskManager,
} from './setEventHandlers.js'

const main = () => {
	addHandlersTaskManager()
	addHandlersNav()
	addHandlersTaskList()

	renderTaskList()
	updateCounters()
}

export default main
