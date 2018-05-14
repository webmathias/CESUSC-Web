import React  from 'react'
import { reduxForm, Field, FieldArray }
    from 'redux-form'
import CustomField from './Field'

const FieldList = ({ fields, meta:{error} }) => {
    return (
        <div>
            {error}

            <button type="button" className="btn btn-primary" onClick={e => { fields.push() }} >Add New Form</button>
            {fields.map((field, index) => {
                return <div key={index}>
                <Field label="Company" name={field + '.nome'} component={CustomField} />
                    <Field label="Contact" name={`${field}.valor`} component={CustomField} />
                </div>
            })}
        </div>
    )
}

export default FieldList