import React from 'react'
import { reduxForm, Field, FieldArray }
    from 'redux-form'

const customField = ({ input, type = 'text', label, meta: { touched, error } }) => {
    return <div>
        <label>{label}:</label>
        <input placeholder={label} type={type} {...input} />
        {error}
    </div>
}
const ServicesComponent = ({ fields, meta:{error} }) => {
    return (
        <div>
            {error}

            <button onClick={e => { fields.push() }} >Add New Service</button>
            {fields.map((field, index) => {
                return <div key={index}>{index} -
                <Field label="nome" name={field + '.nome'} component={customField} />
                    <Field label="valor" name={`${field}.valor`} component={customField} />
                </div>
            })}
        </div>
    )
}

const validate = (values) => {
    if(!values.firstName){
        return {firstName: 'Primeiro Nome Obrigatório'}
    }
    return true;
}
const FormExample = (props) => {
    const { handleSubmit, reset } = props;
    return (
        <div>
            <Field name="firstName"
                label="Primeiro Nome"
                component={customField} />
            <Field type='password' name="lastName"
                label="Sobrenome"
                component={customField} />
            <FieldArray name='sevices'
                component={ServicesComponent} />
            <button onClick={handleSubmit} >Salvar</button>
            <button onClick={reset} >Limpar</button>
        </div>
    );
}
export default reduxForm(
    {
        form: 'formExample',
        validate,
        initialValues:{
            firstName:'Mathias'
        }
    }
)(FormExample)