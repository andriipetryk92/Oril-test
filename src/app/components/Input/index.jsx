import * as React from 'react';

const renderField = ({ input, label, type, placeholder, className, disabled, meta: { touched, error, warning } }) => (
    <label className={className}>{label}
        <input {...input} className={touched && (error || warning) ? `red-shadow` : undefined} placeholder={placeholder} type={type} disabled={disabled} />
        {touched &&
            ((error && (<div className="all-error"><div className="arrow"></div><div className="error"><span>{error}</span></div></div>)) ||
                (warning && (<div className="all-error"><div className="arrow"></div><div className="error"><span>{warning}</span></div></div>)))}
    </label>
);

export default renderField;
