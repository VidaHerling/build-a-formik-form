import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    }, 
    onSubmit: values => {
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) errors.emailField = "Field required";
      if(!values.pswField) errors.pswField = "Field required";
      if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) errors.emailField = "Username should be an email";
      return errors;
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField} />
        <div id="emailError">{formik.errors.emailField ? <div style={{color:'red'}}>{formik.errors.emailField}</div>: null}</div>
        <div>Password</div>
        <div id="pswError">{formik.errors.pswField ? <div style={{color:'red'}}>{formik.errors.pswField}</div>: null}</div>
        <input id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField} />
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
