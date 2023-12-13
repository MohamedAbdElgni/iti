const regex = /^[A-Z][a-z0-9]{3,8}$/;

function validateFName(fName) {
  return regex.test(fName);
}

function validateLName(lName) {
  return regex.test(lName);
}

export default function validate(fName, lName) {
  let isFNameValid = validateFName(fName);
  let isLNameValid = validateLName(lName);

  return isFNameValid && isLNameValid;
}
