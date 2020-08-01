import {generateBoard} from "./view/board.js";
import {generateCard} from "./view/card.js";
import {generateFilter} from "./view/filter.js";
import {generateForm} from "./view/form.js";
import {generateMenu} from "./view/menu.js";
import {generateMoreButton} from "./view/more-button.js";
import {generateSort} from "./view/sort.js";
import {generateTasksContainer} from "./view/task-container.js";
import {CARDS_COUNT, RenderPosition} from "./utils/const.js";
import {render} from "./utils/index.js";

const mainContainer = document.querySelector(`.main`);
const controlContainer = document.querySelector(`.control`);

render(controlContainer, generateMenu(), RenderPosition.BEFOREEND);
render(mainContainer, generateFilter(), RenderPosition.BEFOREEND);
render(mainContainer, generateBoard(), RenderPosition.BEFOREEND);

const boardContainer = document.querySelector(`.board`);

render(boardContainer, generateSort(), RenderPosition.BEFOREEND);
render(boardContainer, generateTasksContainer(), RenderPosition.BEFOREEND);
render(boardContainer, generateMoreButton(), RenderPosition.BEFOREEND);

const taskContainer = document.querySelector(`.board__tasks`);

render(taskContainer, generateForm(), RenderPosition.BEFOREEND);
for (let i = 0; i < CARDS_COUNT; i++) {
  render(taskContainer, generateCard(), RenderPosition.BEFOREEND);
}
