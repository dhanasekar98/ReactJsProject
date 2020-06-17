import React from 'react';

function FormValidateLogin(initalState, validate) {
  const [values, setValues] = React.useState(initalState);

  const [errors, setErrors] = React.useState({});

  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setValues(initalState);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  function handleChange(event) {
    event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }
  function handleBlur() {
    const validateErrors = validate(values);
    setErrors(validateErrors);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const validateErrors = validate(values);
    setErrors(validateErrors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) setSubmitting(true);
    else setSubmitting(false);
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  };
}

export default FormValidateLogin;
