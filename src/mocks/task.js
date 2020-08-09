import {getRandomNumber} from "../utils/main";
import {COLORS, TASKS_COUNT, MAX_DAYS_GAP, DESCRIPTIONS} from "../utils/const";

const task = [];

const generateDate = () => {
  const isDate = Boolean(getRandomNumber(1, 0));

  if (!isDate) {
    return null;
  }

  const daysGap = getRandomNumber(-MAX_DAYS_GAP, MAX_DAYS_GAP);

  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

export const generateTask = () => {
  const description = DESCRIPTIONS[getRandomNumber(DESCRIPTIONS.length - 1, 0)];
  const color = COLORS[getRandomNumber(COLORS.length - 1, 0)];
  const dueDate = generateDate();
  const repeating = dueDate !== null ? {
    mo: false,
    tu: false,
    we: false,
    th: false,
    fr: false,
    sa: false,
    su: false
  } : {
    mo: Boolean(getRandomNumber(1, 0)),
    tu: Boolean(getRandomNumber(1, 0)),
    we: Boolean(getRandomNumber(1, 0)),
    th: Boolean(getRandomNumber(1, 0)),
    fr: Boolean(getRandomNumber(1, 0)),
    sa: Boolean(getRandomNumber(1, 0)),
    su: Boolean(getRandomNumber(1, 0))
  };


  return {
    description,
    dueDate,
    repeating,
    color,
    isFavorite: Boolean(getRandomNumber(1, 0)),
    isArchive: Boolean(getRandomNumber(1, 0))
  };
};

for (let i = 0; i < TASKS_COUNT; i++) {
  task.push(generateTask());
}

export const preparedTasks = task;
