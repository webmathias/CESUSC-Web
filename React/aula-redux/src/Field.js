import React from 'react';

const CustomField = ({ input, type = 'text', label, meta: { touched, error } }) => {
    return (
    <div>
        <label className="form-check-label">{label}:</label>
        <input className="form-control" placeholder={label} type={type} {...input} />
        <span>{error}</span>
    </div>)
}

export default CustomField