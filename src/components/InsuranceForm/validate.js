const validate = (values) => {
  const errors = {};
  if (
    values.premium &&
    values.premium.length < 1 ||
    !values.premium
  ) errors.premium = 'This cannot be empty.';

  if (!values.title || !!values.title === false) {
  	errors.title = 'Please select insurance.';
  }
  return errors;
};

export default validate;
