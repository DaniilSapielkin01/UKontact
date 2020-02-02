export const requiredField = value => {
  if (value) {
    return undefined;
  } else if (!value) {
    return "Field is required";
  }
};

// thunk validator
export const maxLengthCreator = maxLength => value => {
  if (value.length > maxLength) {
    return `Max length is ${maxLength}  symbols`;
  } else {
    return undefined;
  }
};
