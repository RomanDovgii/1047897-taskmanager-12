import {getRandomNumber} from "../utils/main";
import {colors, CARDS_COUNT} from "../utils/const";

let tasks = [];

const generateDate = () => {
  const maxDaysGap = 7;
  const daysGap = getRandomNumber(-maxDaysGap, maxDaysGap);

  const isDate = Boolean(getRandomNumber());

  if (!isDate) {
    return null;
  }

  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

export const generateTask = () => {
  const descriptions = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];

  return {
    description: descriptions[getRandomNumber(descriptions.length - 1)],
    dueDate: generateDate(),
    repeating: {
      mo: Boolean(getRandomNumber()),
      tu: Boolean(getRandomNumber()),
      we: Boolean(getRandomNumber()),
      th: Boolean(getRandomNumber()),
      fr: Boolean(getRandomNumber()),
      sa: Boolean(getRandomNumber()),
      su: Boolean(getRandomNumber())
    },
    color: colors[getRandomNumber(colors.length - 1)],
    isFavorite: Boolean(getRandomNumber()),
    isArchive: Boolean(getRandomNumber())
  };
};

for (let i = 0; i < CARDS_COUNT; i++) {
  tasks.push(generateTask());
}

export const preparedTasks = tasks;
