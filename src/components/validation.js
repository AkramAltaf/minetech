export default function validation(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  } else if (!/^[a-zA-Z ]*$/.test(values.name)) {
    errors.name = "Enter a valid name";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.number) {
    errors.number = "Number is required";
  } else if (!(values.number.length === 10)) {
    errors.number = "Number needs to be exactly 10 digits";
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Date of birth is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters or more";
  }

  return errors;
}
