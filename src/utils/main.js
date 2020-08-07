const getCurrentDate = () => {
  let currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  currentDate = new Date(currentDate);

  return currentDate;
}

export const render = (container, element, position) => {
  container.insertAdjacentHTML(position, element);
};

export const getRandomNumber = (min = 0, max = 1) => {
  const bottom = Math.ceil(Math.min(min, max));
  const top = Math.floor(Math.max(min, max));
  return Math.floor(bottom + Math.random() * (top - bottom + 1));
};

export const isExpired = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  let currentDate = getCurrentDate();

  return currentDate.getTime() > dueDate.getTime();
};

export const isToday = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  return currentDate.getTime() === dueDate.getTime();
}

export const isRepeating = (repeating) => {
  return Object.values(repeating).some(Boolean);
};

export const getFormatedDate = (date) => {
  return `${date.toLocaleString(`en-us`, {day: `numeric`})} ${date.toLocaleString(`en-us`, {month: `long`})}`;
};
