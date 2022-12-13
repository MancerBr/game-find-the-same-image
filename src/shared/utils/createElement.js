const CREATE_ELEMENT_PROPS = {
  class: null,
  setProperties: [{
    property: null,
    value: null,
    priority: null,
  }],
  src: null,
};

export const createElement = (tagName, props = CREATE_ELEMENT_PROPS) => {
  const element = document.createElement(tagName);

  if (props.class) {
    element.classList.add(props.class);
  }

  if (props?.setProperties?.[0]?.property) {
    props.setProperties.forEach((prop) => {
      element.style.setProperty(
        prop.property,
        prop.value,
        prop.priority,
      );
    });
  }

  if (props.src) {
    element.src = props.src;
  }

  return element;
};
