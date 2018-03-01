const validate = (values) => {
  const errors = {};
  if (isValidNumber(values.premium)) {
    errors.premium = 'Numbers, command and dot only allowed';
  }
  if (values.premium && values.premium.length < 1) errors.premium = 'This cannot be empty.';

  if (!values.title || !!values.title === false) {
  	errors.title = 'Please select insurance.';
  }
  console.log('errprsss', errors);
  return errors;
};

const isValidNumber = (key) => {
  const regex = /^[0-9.,\b]+$/;
  return !regex.test(key);
};
export default validate;
