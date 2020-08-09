const getCurrentDate = () => {
  const CURRENT_DATE = new Date();
  CURRENT_DATE.setHours(23, 59, 59, 999);

  return new Date(CURRENT_DATE);
};

export const render = (container, element, position) => {
  container.insertAdjacentHTML(position, element);
};

export const getRandomNumber = (firstNumber, secondNumber) => {
  const bottom = Math.ceil(Math.min(firstNumber, secondNumber));
  const top = Math.floor(Math.max(firstNumber, secondNumber));
  return Math.floor(bottom + Math.random() * (top - bottom + 1));
};

export const isExpired = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const CURRENT_DATE = getCurrentDate();

  return CURRENT_DATE.getTime() > dueDate.getTime();
};

export const isToday = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const CURRENT_DATE = getCurrentDate();

  return CURRENT_DATE.getTime() === dueDate.getTime();
};

export const isRepeating = (repeating) => {
  return Object.values(repeating).some(Boolean);
};

export const getFormatedDate = (date) => {
  return `${date.toLocaleString(`en-us`, {day: `numeric`})} ${date.toLocaleString(`en-us`, {month: `long`})}`;
};
