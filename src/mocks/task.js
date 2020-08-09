import {getRandomNumber} from "../utils/main";
import {COLORS, TASKS_COUNT, MAX_DAYS_GAP, BOOLEAN_MAX, BOOLEAN_MIN, MIN_ARRAY_INDEX, DESCRIPTIONS} from "../utils/const";

const tasks = [];

const generateDate = () => {
  const isDate = Boolean(getRandomNumber(BOOLEAN_MAX, BOOLEAN_MIN));

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
  const description = DESCRIPTIONS[getRandomNumber(DESCRIPTIONS.length - 1, MIN_ARRAY_INDEX)];
  const color = COLORS[getRandomNumber(COLORS.length - 1, MIN_ARRAY_INDEX)];
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
    mo: Boolean(getRandomNumber(BOOLEAN_MAX, BOOLEAN_MIN)),
    tu: Boolean(getRandomNumber(BOOLEAN_MAX, BOOLEAN_MIN)),
    we: Boolean(getRandomNumber(BOOLEAN_MAX, BOOLEAN_MIN)),
    th: Boolean(getRandomNumber(BOOLEAN_MAX, BOOLEAN_MIN)),
    fr: Boolean(getRandomNumber(BOOLEAN_MAX, BOOLEAN_MIN)),
    sa: Boolean(getRandomNumber(BOOLEAN_MAX, BOOLEAN_MIN)),
    su: Boolean(getRandomNumber(BOOLEAN_MAX, BOOLEAN_MIN))
  };


  return {
    description,
    dueDate,
    repeating,
    color,
    isFavorite: Boolean(getRandomNumber(BOOLEAN_MAX, BOOLEAN_MIN)),
    isArchive: Boolean(getRandomNumber(BOOLEAN_MAX, BOOLEAN_MIN))
  };
};

for (let i = 0; i < TASKS_COUNT; i++) {
  tasks.push(generateTask());
}

export const preparedTasks = tasks;
