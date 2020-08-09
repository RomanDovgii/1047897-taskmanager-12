import {preparedTasks} from "../mocks/task";
import {createFilters} from "../mocks/filter";

const createFilterMarkup = (filter, isChecked) => {
  const {title, count} = filter;

  return `<input
      type="radio"
      id="filter__${title}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
      ${count === 0 ? `disabled` : ``}
    />
    <label for="filter__${title}" class="filter__label">
    ${title} <span class="filter__${title}-count">${count}</span></label
    >`;
};

export const generateFilter = () => {

  const filters = createFilters(preparedTasks);

  const filterMarkupFull = filters.reduce((accumulator, filter, index) => accumulator + createFilterMarkup(filter, index === 0), ``);

  return `
  <section class="main__filter filter container">
    ${filterMarkupFull}
  </section>
  `;
};
