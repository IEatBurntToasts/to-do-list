import navUIManager from "./nav-ui.js";
import tasksUIManager from "./tasks-ui.js";
import windowUIManager from "./window-ui.js";

export default Object.assign({}, tasksUIManager, navUIManager, windowUIManager);