import {generateBoard} from "./view/board";
import {generateCard} from "./view/card";
import {generateFilter} from "./view/filter";
import {generateForm} from "./view/form";
import {generateMenu} from "./view/menu";
import {generateMoreButton} from "./view/more-button";
import {generateSort} from "./view/sort";
import {generateTasksContainer} from "./view/task-container";
import {TASKS_PER_STEP, RENDER_POSITION} from "./utils/const";
import {render} from "./utils/main";
import {preparedTasks} from "./mocks/task";

const mainContainer = document.querySelector(`.main`);
const controlContainer = document.querySelector(`.control`);

render(controlContainer, generateMenu(), RENDER_POSITION.BEFOREEND);
render(mainContainer, generateFilter(), RENDER_POSITION.BEFOREEND);
render(mainContainer, generateBoard(), RENDER_POSITION.BEFOREEND);

const boardContainer = document.querySelector(`.board`);

render(boardContainer, generateSort(), RENDER_POSITION.BEFOREEND);
render(boardContainer, generateTasksContainer(), RENDER_POSITION.BEFOREEND);

const taskContainer = document.querySelector(`.board__tasks`);

render(taskContainer, generateForm(preparedTasks[0]), RENDER_POSITION.BEFOREEND);

let tasksBlock = preparedTasks.slice(1, TASKS_PER_STEP).reduce((accumulator, task) => accumulator + generateCard(task), ``);
render(taskContainer, tasksBlock, RENDER_POSITION.BEFOREEND);

if (preparedTasks.length > TASKS_PER_STEP) {
  render(boardContainer, generateMoreButton(), RENDER_POSITION.BEFOREEND);

  let renderedTasksCounter = TASKS_PER_STEP;

  const loadMoreButton = boardContainer.querySelector(`.load-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    tasksBlock = preparedTasks.slice(renderedTasksCounter, renderedTasksCounter + TASKS_PER_STEP).reduce((accumulator, task) => accumulator + generateCard(task), ``);
    render(taskContainer, tasksBlock, RENDER_POSITION.BEFOREEND);
    renderedTasksCounter += TASKS_PER_STEP;
    if (renderedTasksCounter > preparedTasks.length) {
      loadMoreButton.remove();
    }
  });
}
