import {isExpired, isRepeating, isToday} from "../utils/main";

const taskToFilterMap = {
  all: (tasks) => tasks.filter((task) => !task.isArchive).length,
  overdue: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => isExpired(task.dueDate)).length,
  today: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => isToday(task.dueDate)).length,
  favorites: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => task.isFavorite).length,
  repeating: (tasks) => tasks
    .filter((task) => !task.isArchive)
    .filter((task) => isRepeating(task.repeating)).length,
  archive: (tasks) => tasks.filter((task) => task.isArchive).length,
};

export const createFilters = (tasks) => {
  return Object.entries(taskToFilterMap).map(([filterName, countTasks]) => {
    return {
      title: filterName,
      count: countTasks(tasks),
    };
  });
};
