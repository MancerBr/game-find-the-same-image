const CREATE_ELEMENT_PROPS = {
  class: null,
  properties: [{
    name: null,
    value: null,
    priority: null,
  }],
  attributes: [{
    name: null,
    value: null,
  }],
  src: null,
};

const setProperties = (properties, element) => {
  properties.forEach((prop) => {
    element.style.setProperty(
      prop.name,
      prop.value,
      prop.priority,
    );
  });
}

const setAttributes = (attributes, element) => {
  attributes.forEach((prop) => {
    element.setAttribute(
      prop.name,
      prop.value,
    );
  });
}

export const createElement = (tagName, props = CREATE_ELEMENT_PROPS) => {
  const element = document.createElement(tagName);

  if (props.class) {
    element.classList.add(props.class);
  }

  if (props?.properties?.[0]?.name) {
    setProperties(props.properties, element);
  }

  if (props?.attributes?.[0]?.name) {
    setAttributes(props.attributes, element);
  }

  if (props.src) {
    element.src = props.src;
  }

  return element;
};
