import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomField from './Field.js'


const validate = (values) => {
    if(!values.firstName){
        return {firstName: 'Primeiro Nome Obrigatório'}
    }
    if(!values.email){
        return {firstName: 'Email é obrigatório'}
    }
    if(!values.phoneNumber){
        return {firstName: 'Telefone é obrigatório'}
    }
    return true;
}


const FirstStep = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <h2> Informações pessoais </h2>
    <form  onSubmit={handleSubmit}>
    <div  className="form-group">
      <Field
        name="firstName"
        type="text"
        component={CustomField}
        label="First Name"
      />
      <Field
        name="email"
        type="text"
        component={CustomField}
        label="E-mail"
      />
       <Field
        name="phoneNumber"
        type="text"
        component={CustomField}
        label="Phone Number"
      />
      <div>
        <button className="btn btn-primary" type="submit" >Step 2</button>
      </div>
      </div>
    </form>
    </div>
  );
};

export default reduxForm({
  form: 'wizard',  
  validate,
  initialValues : {
      phoneNumber: "XX XXXXX-XXXX",
      firstName: "Your name",
      email: "E-mail@example.com"
  },
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(FirstStep);
