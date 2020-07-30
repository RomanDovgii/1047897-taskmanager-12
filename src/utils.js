export const CARDS_COUNT = 3;

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

export const render = (container, element, position) => {
  container.insertAdjacentHTML(position, element);
};
