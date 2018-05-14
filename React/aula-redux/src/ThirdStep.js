import React from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import FieldList from './FieldList'

const ThirdStep = props => {
  const { handleSubmit,previousPage } = props;
  return (
    <div>
      <h2> Trabalhos anteriores </h2>
    <form onSubmit={handleSubmit}>
    <FieldArray name='jobs'
                component={FieldList} />
      <div>
      <button className="btn btn-primary" type="button"  onClick={previousPage}> Previous </button>
        <button className="btn btn-primary" type="submit" >Review</button>
      </div>
    </form>
    </div>
  );
};

export default reduxForm({
  form: 'wizard',  
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(ThirdStep);
