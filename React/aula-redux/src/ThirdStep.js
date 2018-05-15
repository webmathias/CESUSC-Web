import React from 'react';
import { reduxForm, FieldArray } from 'redux-form';
import FieldList from './FieldList'

const ThirdStep = props => {
  const { handleSubmit,previousPage,review,showButton } = props;
  return (
    <div>
      <h2> Trabalhos anteriores </h2>
    <form onSubmit={handleSubmit}>
    <FieldArray name='jobs'
                component={FieldList} />
      <div>
      <button className="btn btn-primary" type="button" hidden={!showButton}  onClick={previousPage}> Previous </button>
        <button className="btn btn-primary" type="button" hidden={!showButton} onClick={review} >Review</button>
        <button  style={{"marginTop": "2rem"}} type="submit" hidden={showButton} className="btn btn-primary">Finish</button>
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
