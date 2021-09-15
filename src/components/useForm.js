import { useState, useEffect } from "react";

const useForm = (callback, validation) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    dateOfBirth: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validation(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      let users = [];
      let storedUsers = localStorage.getItem("users");
      if (!!storedUsers) {
        users = [...JSON.parse(storedUsers), values];
      } else {
        users.push(values);
      }
      localStorage.setItem("users", JSON.stringify(users));
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
