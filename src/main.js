import {generateBoard} from "./view/board";
import {generateCard} from "./view/card";
import {generateFilter} from "./view/filter";
import {generateForm} from "./view/form";
import {generateMenu} from "./view/menu";
import {generateMoreButton} from "./view/more-button";
import {generateSort} from "./view/sort";
import {generateTasksContainer} from "./view/task-container";
import {TASK_PER_STEP, RenderPosition} from "./utils/const";
import {render} from "./utils/main";
import {preparedTasks} from "./mocks/task";

const mainContainer = document.querySelector(`.main`);
const controlContainer = document.querySelector(`.control`);

render(controlContainer, generateMenu(), RenderPosition.BEFOREEND);
render(mainContainer, generateFilter(), RenderPosition.BEFOREEND);
render(mainContainer, generateBoard(), RenderPosition.BEFOREEND);

const boardContainer = document.querySelector(`.board`);

render(boardContainer, generateSort(), RenderPosition.BEFOREEND);
render(boardContainer, generateTasksContainer(), RenderPosition.BEFOREEND);

const taskContainer = document.querySelector(`.board__tasks`);

render(taskContainer, generateForm(preparedTasks[0]), RenderPosition.BEFOREEND);

let tasksBlock = preparedTasks.slice(1, TASK_PER_STEP).reduce((accumulator, task) => accumulator + generateCard(task), ``);
render(taskContainer, tasksBlock, RenderPosition.BEFOREEND);

if (preparedTasks.length > TASK_PER_STEP) {
  render(boardContainer, generateMoreButton(), RenderPosition.BEFOREEND);

  let renderedTasksCounter = TASK_PER_STEP;

  const loadMoreButton = boardContainer.querySelector(`.load-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    tasksBlock = preparedTasks.slice(renderedTasksCounter, renderedTasksCounter + TASK_PER_STEP).reduce((accumulator, task) => accumulator + generateCard(task), ``);
    render(taskContainer, tasksBlock, RenderPosition.BEFOREEND);
    renderedTasksCounter += TASK_PER_STEP;
    if (renderedTasksCounter > preparedTasks.length) {
      loadMoreButton.remove();
    }
  });
}
