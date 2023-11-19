const getElement = (selection) => {
  const element = document.querySelector(selection);

  if (element) return element;
  throw new Error("Can't find element.  Give it another shot");
};

export default getElement;
