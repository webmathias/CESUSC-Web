import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomField from './Field.js'


const SecondStep = props => {
  const { handleSubmit, previousPage,showButton } = props;
  console.log(showButton)
  return (
    <div>
      <h2> Endereço </h2>
    <form onSubmit={handleSubmit}>
      <Field
        name="street"
        type="text"
        component={CustomField}
        label="Logradouro"
      />
      <Field
        name="zipCode"
        type="text"
        component={CustomField}
        label="CEP"
      />
       <Field
        name="city"
        type="text"
        component={CustomField}
        label="Cidade"
      />
      <div>
      <button className="btn btn-primary" type="button" hidden={!showButton} onClick={previousPage}> Previous </button>
        <button className="btn btn-primary" type="submit" hidden={!showButton} >Step 3</button>
      </div>
    </form>
    </div>
  );
};

export default reduxForm({
  form: 'wizard',  
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(SecondStep);
